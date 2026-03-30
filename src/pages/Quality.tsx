import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ShieldCheck, ScanLine, Target, RefreshCw, Award, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const instruments = [
  { sl: 1, name: "VMM Machine (Non-contact measuring)", range: "400×200×100", leastCount: "0.0001", make: "ESSON", category: "Vision" },
  { sl: 2, name: "Surface Roughness Tester", range: "0.03 mm", leastCount: "0.0001", make: "Mitutoyo", category: "Surface" },
  { sl: 3, name: "Digital Vernier Height Gauge", range: "0-300 mm", leastCount: "0.02", make: "Baker", category: "Height" },
  { sl: 4, name: "Digital Vernier Height Gauge", range: "0-300 mm", leastCount: "0.02", make: "Yuzuki", category: "Height" },
  { sl: 5, name: "Digital Vernier Height Gauge", range: "0-300 mm", leastCount: "0.02", make: "Yuzuki", category: "Height" },
  { sl: 6, name: "Vernier Caliper Digital", range: "0-150 mm", leastCount: "0.002", make: "Yuzuki", category: "Caliper" },
  { sl: 7, name: "Vernier Caliper Digital", range: "0-150 mm", leastCount: "0.002", make: "Insize", category: "Caliper" },
  { sl: 8, name: "Outside Micrometer (Digital)", range: "0-25 mm", leastCount: "0.001", make: "Mitutoyo", category: "Micrometer" },
  { sl: 9, name: "Outside Micrometer (Digital)", range: "0-25 mm", leastCount: "0.001", make: "Mitutoyo", category: "Micrometer" },
  { sl: 10, name: "Outside Micrometer (Digital)", range: "0-25 mm", leastCount: "0.001", make: "Mitutoyo", category: "Micrometer" },
  { sl: 11, name: "Outside Micrometer (Digital)", range: "25-50 mm", leastCount: "0.001", make: "Mitutoyo", category: "Micrometer" },
  { sl: 12, name: "Outside Micrometer (Digital)", range: "25-50 mm", leastCount: "0.001", make: "Mitutoyo", category: "Micrometer" },
  { sl: 13, name: "Outside Micrometer (Digital)", range: "0-25 mm", leastCount: "0.001", make: "Mitutoyo", category: "Micrometer" },
  { sl: 14, name: "Outside Micrometer (Digital)", range: "25-50 mm", leastCount: "0.001", make: "Mitutoyo", category: "Micrometer" },
  { sl: 15, name: "Outside Micrometer (Digital)", range: "25-50 mm", leastCount: "0.001", make: "Mitutoyo", category: "Micrometer" },
  { sl: 16, name: "Outside Micrometer", range: "0-25 mm", leastCount: "0.01", make: "Mitutoyo", category: "Micrometer" },
  { sl: 17, name: "Outside Micrometer", range: "25-50 mm", leastCount: "0.01", make: "Mitutoyo", category: "Micrometer" },
  { sl: 18, name: "Outside Micrometer", range: "25-50 mm", leastCount: "0.01", make: "Mitutoyo", category: "Micrometer" },
  { sl: 19, name: "Outside Micrometer", range: "0-25 mm", leastCount: "0.01", make: "Mitutoyo", category: "Micrometer" },
  { sl: 20, name: "Outside Micrometer", range: "0-25 mm", leastCount: "0.01", make: "Mitutoyo", category: "Micrometer" },
  { sl: 21, name: "Outside Micrometer", range: "25-50 mm", leastCount: "0.01", make: "Mitutoyo", category: "Micrometer" },
  { sl: 22, name: "Snap Gauge", range: "13 (-0.02)", leastCount: "—", make: "Samarth Gauge Tools", category: "Gauge" },
  { sl: 23, name: "Snap Gauge", range: "13 (-0.1, -0.15)", leastCount: "—", make: "Samarth Gauge Tools", category: "Gauge" },
  { sl: 24, name: "Snap Gauge", range: "18 (-0.05, -0.1)", leastCount: "—", make: "Samarth Gauge Tools", category: "Gauge" },
  { sl: 25, name: "Snap Gauge", range: "13 (-0.02)", leastCount: "—", make: "Samarth Gauge Tools", category: "Gauge" },
  { sl: 26, name: "Snap Gauge", range: "13 (-0.1, -0.15)", leastCount: "—", make: "Samarth Gauge Tools", category: "Gauge" },
  { sl: 27, name: "Hardness Testing Machine", range: "—", leastCount: "—", make: "—", category: "Testing" },
  { sl: 28, name: "M8 Thread Plug Gauge", range: "M8", leastCount: "—", make: "Baker", category: "Gauge" },
  { sl: 29, name: "M10 Thread Plug Gauge", range: "M10", leastCount: "—", make: "Baker", category: "Gauge" },
  { sl: 30, name: "M12 Thread Plug Gauge", range: "M12", leastCount: "—", make: "Baker", category: "Gauge" },
  { sl: 31, name: "Surface Plate", range: "640×400 mm", leastCount: "—", make: "Luthra", category: "Testing" },
  { sl: 32, name: "Bench Center", range: "—", leastCount: "—", make: "Precision", category: "Testing" },
];

const instrumentCategories = ["All", "Vision", "Surface", "Micrometer", "Caliper", "Height", "Gauge", "Testing"];

const pillars = [
  { icon: ScanLine, title: "Process Control", desc: "We maintain strict control at every production stage to ensure precision, consistency, and zero-defect quality in every shaft we manufacture." },
  { icon: Target, title: "Specification Execution", desc: "We strictly adhere to customer specifications and industry standards, ensuring every shaft is manufactured with precise dimensions, material integrity, and performance compliance." },
  { icon: ShieldCheck, title: "Quality Accountability", desc: "We take full responsibility for quality at every stage of production, ensuring each shaft meets defined standards, customer requirements, and performance expectations without compromise." },
  { icon: RefreshCw, title: "Repeat Supplier", desc: "We build long-term partnerships through consistent quality, reliable delivery, and dependable performance that customers trust and return to." },
];

const Quality = () => {
  const [instrFilter, setInstrFilter] = useState("All");
  const [showAllInstr, setShowAllInstr] = useState(false);
  const filteredInstr = instrFilter === "All" ? instruments : instruments.filter(i => i.category === instrFilter);
  const displayedInstr = showAllInstr ? filteredInstr : filteredInstr.slice(0, 15);

  // Chart-like summary data
  const makeCounts = instruments.reduce<Record<string, number>>((acc, i) => {
    const make = i.make === "—" ? "Other" : i.make;
    acc[make] = (acc[make] || 0) + 1;
    return acc;
  }, {});
  const makeEntries = Object.entries(makeCounts).sort((a, b) => b[1] - a[1]);
  const maxCount = Math.max(...makeEntries.map(e => e[1]));

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-primary text-primary-foreground overflow-hidden">
        {/* Animated Background Graphic */}
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none hidden lg:block">
          <motion.svg
            width="800"
            height="800"
            viewBox="0 0 100 100"
          >
            {/* Precision / Target / Caliper shape */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="1 3" />
              <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.2" fill="none" />
              <line x1="50" y1="5" x2="50" y2="15" stroke="currentColor" strokeWidth="1" />
              <line x1="50" y1="95" x2="50" y2="85" stroke="currentColor" strokeWidth="1" />
              <line x1="5" y1="50" x2="15" y2="50" stroke="currentColor" strokeWidth="1" />
              <line x1="95" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="1" />
            </motion.g>
            <motion.circle 
              cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" fill="none"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <circle cx="50" cy="50" r="2" fill="currentColor" />
          </motion.svg>
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-sfl-blue" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-sfl-blue">ISO 9001:2015 Certified</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-4">
            Uncompromising Quality<br />
            <span className="text-sfl-blue">Assurance & Metrology</span>
          </h1>

          {/* Engineering Objective Card */}
          <div className="mt-8 border border-primary-foreground/10 p-6 max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <Award size={16} className="text-sfl-blue" />
              <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-sfl-blue">Engineering & Quality Objective</h3>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed italic">
              "To consistently deliver precision-engineered shafts that meet customer specifications, 
              ensure superior quality, and achieve on-time delivery through continuous improvement and operational excellence."
            </p>
          </div>
        </div>
      </section>

      {/* Operation Discipline Pillars */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal direction="up" className="mb-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-sfl-blue" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-sfl-blue">Operation Discipline</span>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" className="mb-8">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">Quality Discipline Pillars</h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" staggerChildren={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-sfl-blue/40 transition-colors group h-full"
                >
                  <pillar.icon className="w-8 h-8 text-sfl-blue mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-3">{pillar.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Instrument Distribution Chart */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Bar Chart */}
            <div>
              <h2 className="text-xl font-black uppercase tracking-tighter mb-6">Instruments by Manufacturer</h2>
              <div className="space-y-3">
                {makeEntries.map(([make, count]) => (
                  <div key={make}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold uppercase tracking-wider">{make}</span>
                      <span className="text-sfl-blue font-bold">{count}</span>
                    </div>
                    <div className="h-3 bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(count / maxCount) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-full bg-sfl-navy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary Stats */}
            <div className="space-y-4">
              <h2 className="text-xl font-black uppercase tracking-tighter mb-6">Metrology Lab Summary</h2>
              {[
                { label: "Total Instruments", value: "32", pct: 100 },
                { label: "Digital Instruments", value: "21", pct: 66 },
                { label: "Mitutoyo Equipment", value: "16", pct: 50 },
                { label: "Precision (≤0.001 mm)", value: "15", pct: 47 },
              ].map(stat => (
                <div key={stat.label} className="border border-border p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider">{stat.label}</span>
                    <span className="text-lg font-black text-sfl-blue">{stat.value}</span>
                  </div>
                  <Progress value={stat.pct} className="h-1.5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Metrology Inventory */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4">
            Complete Metrology Inventory
            <span className="ml-3 text-xs font-semibold bg-sfl-blue text-white px-2 py-1 align-middle">
              {instruments.length} INSTRUMENTS
            </span>
          </h2>

          {/* Category Filter Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {instrumentCategories.map(cat => (
              <button
                key={cat}
                onClick={() => { setInstrFilter(cat); setShowAllInstr(false); }}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border transition-colors ${
                  instrFilter === cat
                    ? "bg-sfl-blue text-white border-sfl-blue"
                    : "border-white/20 text-white/70 hover:border-white/50 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="border border-border bg-card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider w-12">Sl</th>
                  <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider">Instrument</th>
                  <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider">Range / Size</th>
                  <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider">
                    <Tooltip>
                      <TooltipTrigger className="flex items-center gap-1">
                        Least Count <span className="text-sfl-blue">*</span>
                      </TooltipTrigger>
                      <TooltipContent><p className="text-xs">Smallest measurement the instrument can resolve (mm)</p></TooltipContent>
                    </Tooltip>
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider">Make</th>
                </tr>
              </thead>
              <tbody>
                {displayedInstr.map((inst) => (
                  <tr key={inst.sl} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-3 text-muted-foreground font-mono text-xs">{inst.sl}</td>
                    <td className="px-4 py-3 font-medium">{inst.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{inst.range}</td>
                    <td className="px-4 py-3 font-mono text-xs text-sfl-blue font-bold">{inst.leastCount} mm</td>
                    <td className="px-4 py-3">
                      <span className="text-[10px] bg-muted px-2 py-0.5 font-semibold uppercase tracking-wider">
                        {inst.make}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredInstr.length > 15 && !showAllInstr && (
            <button
              onClick={() => setShowAllInstr(true)}
              className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sfl-blue hover:underline"
            >
              Show All {filteredInstr.length} Instruments <ChevronDown size={14} />
            </button>
          )}

          <p className="text-xs text-muted-foreground mt-6 leading-relaxed max-w-2xl">
            Non-contact Video Measuring Machines safeguard delicate, highly polished components from physical marring 
            while ensuring exceptional, repeatable accuracy during high-volume, rapid inspection cycles.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quality;
