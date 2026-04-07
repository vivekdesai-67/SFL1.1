import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ShieldCheck, ScanLine, Target, RefreshCw, Award, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TypeWriter } from "@/components/ui/TypeWriter";

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
    <div className="min-h-screen bg-[#070B14] text-white selection:bg-sfl-blue/30 overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#070B14]">
        {/* Cinematic Background Video */}
        <div className="absolute inset-0 z-0 opacity-70 overflow-hidden pointer-events-none">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover scale-105"
          >
            <source src="/cnc-lathe.mp4?v=4" type="video/mp4" />
          </video>
        </div>
        
        {/* Thematic Gradients for Premium Integration */}
        {/* Strong dark fade on the left so the text is perfectly clear, graduating to transparent on the right to showcase the video natively */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B14] via-[#070B14]/80 to-transparent z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B14]/80 via-transparent to-[#070B14] z-0 pointer-events-none" />
        
        {/* Subtle mesh to tie into the Dark Tech aesthetic */}
        <div className="absolute inset-0 mesh-gradient opacity-30 mix-blend-overlay pointer-events-none z-0" />

        <div className="container relative z-20 mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <SectionLabel text="ISO 9001:2015 Certified" />
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none mb-6 sm:mb-8">
              Uncompromising Quality<br />
              <TypeWriter words={["Assurance & Metrology", "Precision Engineering", "Zero Defects"]} />
            </h1>

            {/* Engineering Objective Card */}
            <div className="mt-2 glass-panel p-4 sm:p-6 max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <Award size={16} className="text-sfl-blue" />
                <h3 className="text-xs font-body font-bold tracking-[0.3em] uppercase text-sfl-blue">Engineering & Quality Objective</h3>
              </div>
              <p className="text-sm font-body text-slate-400 leading-relaxed italic font-medium">
                "To consistently deliver precision-engineered shafts that meet customer specifications,
                ensure superior quality, and achieve on-time delivery through continuous improvement and operational excellence."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Operation Discipline Pillars */}
      <section className="py-20 bg-[#070B14] relative">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionLabel text="Operation Discipline" />
          <ScrollReveal direction="up" className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tighter">Quality Discipline Pillars</h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" staggerChildren={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-2xl glass-panel glass-panel-hover p-6 group h-full relative overflow-hidden"
                >
                  {/* Shine sweep */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                  {/* Blue glow */}
                  <div className="absolute top-0 right-0 w-28 h-28 bg-sfl-blue/10 blur-3xl rounded-full group-hover:bg-sfl-blue/20 transition-colors duration-500 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-sfl-blue/20 group-hover:border-sfl-blue/50 group-hover:scale-110 transition-all duration-500">
                      <pillar.icon className="w-6 h-6 text-sfl-blue" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-wider mb-3">{pillar.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Instrument Distribution Chart */}
      <section className="py-20 bg-[#070B14] relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
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
                    <div className="h-3 bg-white/5 overflow-hidden rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(count / maxCount) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-full bg-sfl-blue rounded-full"
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
                <div key={stat.label} className="glass-panel p-4 rounded-xl">
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
      <section className="py-20 bg-[#070B14] relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
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

          <div className="rounded-2xl border border-white/5 bg-white/2 backdrop-blur-xl overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="border-b border-white/5 bg-white/3">
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
                  <tr key={inst.sl} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                    <td className="px-4 py-3 text-slate-600 font-mono text-xs">{inst.sl}</td>
                    <td className="px-4 py-3 font-medium">{inst.name}</td>
                    <td className="px-4 py-3 text-slate-400 font-medium">{inst.range}</td>
                    <td className="px-4 py-3 font-mono text-xs text-sfl-blue font-bold">{inst.leastCount} mm</td>
                    <td className="px-4 py-3">
                      <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded font-semibold uppercase tracking-wider text-slate-300">
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

          <p className="text-xs text-slate-500 mt-6 leading-relaxed max-w-2xl font-medium">
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
