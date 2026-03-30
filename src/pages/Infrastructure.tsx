import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Factory, Zap, Ruler, Box, ChevronDown, ChevronRight, Info, Gauge } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Magnetic } from "@/components/ui/Magnetic";

const categories = [
  "All", "CNC Turning", "Milling", "Grinding", "Automation", "Thread Forming",
  "Cutting & Sawing", "Drilling & Tapping", "Quality Check", "Pneumatics",
  "Pressing", "Manual Lathe", "Buffing", "Parting"
];

const machines = [
  { sl: 1, name: "Circular Saw Cutting Machine", make: "Zeal Tech Automation", year: "2018", category: "Cutting & Sawing" },
  { sl: 2, name: "Circular Saw Cutting Machine", make: "Zeal Tech Automation", year: "2021", category: "Cutting & Sawing" },
  { sl: 3, name: "U-Drilling Machine", make: "Precicut Tool", year: "2019", category: "Drilling & Tapping" },
  { sl: 4, name: "U-Drilling Machine", make: "Steel Tech Automation", year: "2010", category: "Drilling & Tapping" },
  { sl: 5, name: "CNC Turning Center Midas 6 Old", make: "Galaxy Midas 6", year: "2011", category: "CNC Turning" },
  { sl: 6, name: "CNC Turning Center Midas New", make: "Galaxy Midas 6", year: "2014", category: "CNC Turning" },
  { sl: 7, name: "CNC Turning Center Meda", make: "Galaxy Midas 6", year: "2008", category: "CNC Turning" },
  { sl: 8, name: "CNC Turning Center Midas 6", make: "Galaxy Midas 6", year: "2017", category: "CNC Turning" },
  { sl: 9, name: "Drilling & Tapping Machine", make: "Precicut Tool", year: "2011", category: "Drilling & Tapping" },
  { sl: 10, name: "Vertical Milling Center Gourav", make: "Gaurav BMV 35 TC220", year: "2011", category: "Milling" },
  { sl: 11, name: "Vertical Milling Center Chandra", make: "Chandra", year: "2011", category: "Milling" },
  { sl: 12, name: "Hydraulic Thread Rolling Machine", make: "Thread Aid", year: "2017", category: "Thread Forming" },
  { sl: 13, name: "Hydraulic Thread Rolling Machine Old", make: "Venkateshwar Industries", year: "2000", category: "Thread Forming" },
  { sl: 14, name: "Hydraulic Pressing Machine", make: "Polhydron Pvt Ltd", year: "2005", category: "Pressing" },
  { sl: 15, name: "Hydraulic Pressing Machine", make: "Liner Assembly", year: "2005", category: "Pressing" },
  { sl: 16, name: "CNC Turning Center Meda 4I", make: "Finish Turning", year: "2009", category: "CNC Turning" },
  { sl: 17, name: "CNC Cylindrical Grinding Machine", make: "Hi-Life", year: "2012", category: "Grinding" },
  { sl: 18, name: "CNC Turning Center Midas 6 Plus", make: "Galaxy", year: "2015", category: "CNC Turning" },
  { sl: 19, name: "CNC Cylindrical Grinding Machine", make: "Hi-Life", year: "2015", category: "Grinding" },
  { sl: 20, name: "CNC Turning Center Midas 6 Plus", make: "Galaxy", year: "2016", category: "CNC Turning" },
  { sl: 21, name: "CNC Cylindrical Grinding Machine", make: "Hi-Life", year: "2017", category: "Grinding" },
  { sl: 22, name: "Trobe Machine", make: "Parting", year: "2014", category: "Parting" },
  { sl: 23, name: "Hydraulic Pressing Machine", make: "Liner Assembly", year: "2005", category: "Pressing" },
  { sl: 24, name: "Punching Machine", make: "Punching", year: "2000", category: "Pressing" },
  { sl: 25, name: "Buffing Machine", make: "Buffing", year: "2005", category: "Buffing" },
  { sl: 26, name: "Drilling & Tapping Machine", make: "Drilling & Tapping", year: "2019", category: "Drilling & Tapping" },
  { sl: 27, name: "EN Series Rotary Screw Air Compressor", make: "ELGI", year: "2018", category: "Pneumatics" },
  { sl: 28, name: "Air Compressor", make: "Air Suck & Store", year: "2008", category: "Pneumatics" },
  { sl: 29, name: "13×13 Manual Super Lathe M/C", make: "—", year: "2000", category: "Manual Lathe" },
  { sl: 30, name: "Table Grinding Machine", make: "—", year: "2000", category: "Grinding" },
  { sl: 31, name: "Table Drilling Machine", make: "—", year: "2000", category: "Drilling & Tapping" },
  { sl: 32, name: "Tap Check Machine", make: "X Flow Technologies", year: "2021", category: "Quality Check" },
  { sl: 33, name: "Tap Check Machine", make: "X Flow Technologies", year: "2021", category: "Quality Check" },
  { sl: 34, name: "ACE CNC Lathe Model: J 300 LM", make: "Ace Designers Ltd.", year: "2021", category: "CNC Turning" },
  { sl: 35, name: "ACE CNC Lathe Model: J 300 LM", make: "Ace Designers Ltd.", year: "2021", category: "CNC Turning" },
  { sl: 36, name: "ELGi Air Compressor Manual", make: "ELGI", year: "2014", category: "Pneumatics" },
  { sl: 37, name: "Bolt Tightening Machine", make: "X Flow Technologies", year: "2021", category: "Quality Check" },
  { sl: 38, name: "Bolt Tightening Machine", make: "X Flow Technologies", year: "2021", category: "Quality Check" },
  { sl: 39, name: "Bolt Tightening Machine", make: "X Flow Technologies", year: "2021", category: "Quality Check" },
  { sl: 40, name: "Hydraulic Thread Rolling Machine", make: "Thread Aid", year: "2022", category: "Thread Forming" },
  { sl: 41, name: "Manual Drilling Tapping Machine", make: "Rajesh Traders Rajkot", year: "2022", category: "Drilling & Tapping" },
  { sl: 42, name: "Automatic Pick and Place", make: "Arrows Engineering", year: "2022", category: "Automation" },
  { sl: 43, name: "Robotic Arm", make: "Arrows Engineering", year: "2022", category: "Automation" },
  { sl: 44, name: "ACE CNC Lathe Model: J 300 LM", make: "Ace Designers Ltd.", year: "2022", category: "CNC Turning" },
  { sl: 45, name: "ACE CNC Lathe Model: J 300 LM", make: "Ace Designers Ltd.", year: "2022", category: "CNC Turning" },
  { sl: 46, name: "CNC Cylindrical Grinding Machine", make: "Hi-Life", year: "2022", category: "Grinding" },
  { sl: 47, name: "Bolt Tightening Machine", make: "X Flow Technologies", year: "2021", category: "Quality Check" },
  { sl: 48, name: "Drilling & Tapping Machine", make: "Precicut Tool", year: "2022", category: "Drilling & Tapping" },
  { sl: 49, name: "U-Drilling Machine", make: "Precicut Tool", year: "2022", category: "Drilling & Tapping" },
  { sl: 50, name: "EN Series Rotary Screw Air Compressor", make: "ELGI", year: "2023", category: "Pneumatics" },
  { sl: 51, name: "Polytron Milling Machine", make: "Trishul", year: "2024", category: "Milling" },
];

const spotlights = [
  {
    title: "Galaxy Midas 6 CNC Turning Center",
    desc: "Equipped with advanced Fanuc/Siemens interfaces and absolute feedback encoders. Rapid traverse rates of 40 m/min on X and Z axes, spindle speeds up to 6000 rpm. Separated lube oil collection prevents coolant contamination — perfectly suited for high-volume, automated, zero-defect production runs.",
    specs: ["Spindle: 6000 RPM", "Traverse: 40 m/min", "Controller: Fanuc/Siemens"],
  },
  {
    title: "ACE Designers J 300 LM CNC Lathe",
    desc: "High-rigidity Linear Motion (LM) guideways on X and Z axes, a heavy-duty 8-station bi-directional turret, and a powerful 4000 RPM AC spindle motor. Handles maximum turning diameter of 320 mm with flawless consistency.",
    specs: ["Max Dia: 320 mm", "Turret: 8-Station", "Spindle: 4000 RPM"],
  },
  {
    title: "Zeal Tech Circular Saw Automation",
    desc: "Fully equipped with robotic auto-loaders for continuous material feeding. Ensures absolute dimensional consistency across thousands of rapid cuts. Reduces thermal distortion, minimizes raw material wastage, and eliminates manual handling risks.",
    specs: ["Auto-loader", "Zero Thermal Distortion", "Continuous Feed"],
  },
  {
    title: "Polytron Milling Machine (2024)",
    desc: "Latest addition to the manufacturing floor by Trishul. Advanced multi-axis milling capability for complex geometries and tight-tolerance components. Expands SFPL's capability into precision milling applications.",
    specs: ["Year: 2024", "Make: Trishul", "Multi-axis"],
  },
];

const facilityStats = [
  { icon: Factory, value: "25,000 m²", label: "Total Landed Area", pct: 100 },
  { icon: Box, value: "20,000 m²", label: "Built-up Production Area", pct: 80 },
  { icon: Ruler, value: "10,000 m²", label: "Additional Warehousing", pct: 40 },
  { icon: Zap, value: "260 KVA", label: "Electrical Power", pct: 100 },
];

const Infrastructure = () => {
  const [filter, setFilter] = useState("All");
  const [spotlightIdx, setSpotlightIdx] = useState(0);
  const [expandedCats, setExpandedCats] = useState<string[]>([]);
  const filtered = filter === "All" ? machines : machines.filter(m => m.category === filter);

  const categoryCounts = categories.slice(1).map(cat => ({
    cat,
    count: machines.filter(m => m.category === cat).length,
  }));

  const toggleCat = (cat: string) => {
    setExpandedCats(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-white selection:bg-sfl-blue/30 overflow-x-hidden">
      <Navbar />

      {/* Hero with Mesh Gradient */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#070B14]">
        <div className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#070B14] to-transparent z-10" />
        
        <div className="container relative z-20 mx-auto px-4 lg:px-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="w-8 h-[2px] bg-sfl-gold" />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-sfl-gold">Industrial Scale</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
              Manufacturing<br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-sfl-blue to-white">Infrastructure</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-medium opacity-80">
              Our Hubballi facility houses 51 advanced production centers across 25,000 m² — 
              delivering precision engineering at global scale with 120+ specialist engineers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facility Dashboard - Premium Cards */}
      <section className="py-12 relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal direction="up" staggerChildren={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {facilityStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl glass-panel glass-panel-hover p-8 relative overflow-hidden group">
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className="w-8 h-8 text-sfl-blue group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                    <Info size={14} className="text-slate-500 opacity-50" />
                  </div>
                  <div className="text-3xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-6">{stat.label}</div>
                  <Progress value={stat.pct} className="h-1 bg-white/5" />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Accordion - Refined Design */}
      <section className="py-24 bg-[#070B14]">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal direction="up" className="mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tighter flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-sfl-blue/20 flex items-center justify-center">
                <Gauge className="w-5 h-5 text-sfl-blue" />
              </div> 
              Fleet Distribution
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" staggerChildren={0.05}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryCounts.map(({ cat, count }) => (
                <button
                  key={cat}
                  onClick={() => toggleCat(cat)}
                  className={`w-full group rounded-2xl border transition-all duration-500 p-6 text-left ${
                    expandedCats.includes(cat) 
                    ? "bg-white/5 border-sfl-blue shadow-[0_0_30px_rgba(25,148,245,0.15)]" 
                    : "glass-panel glass-panel-hover"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#A5D8FF]">{cat}</span>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-3xl font-black text-white">{count}</span>
                        <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Centers</span>
                      </div>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-white/10 transition-transform duration-500 ${expandedCats.includes(cat) ? "rotate-180 border-sfl-blue bg-sfl-blue/20" : "group-hover:border-sfl-blue"}`}>
                      <ChevronDown size={14} className={expandedCats.includes(cat) ? "text-sfl-blue" : "text-slate-500"} />
                    </div>
                  </div>
                  {expandedCats.includes(cat) && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-6 pt-6 border-t border-white/5 space-y-3"
                    >
                      {machines.filter(m => m.category === cat).map(m => (
                        <div key={m.sl} className="flex items-center justify-between text-[11px] font-medium">
                          <span className="text-slate-400 group-hover:text-white transition-colors">{m.name}</span>
                          <span className="text-[9px] font-black bg-sfl-blue/10 text-sfl-blue px-2 py-0.5 rounded-md">{m.year}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Machine Inventory - Premium Table */}
      <section className="py-24 bg-[#070B14] relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <ScrollReveal direction="left">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                Full Machine <br/> <span className="text-sfl-blue">Inventory</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <div className="flex flex-wrap gap-2 justify-end">
                {["All", "CNC Turning", "Milling", "Grinding", "Automation"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-full border transition-all duration-300 ${
                      filter === cat
                        ? "bg-sfl-blue border-sfl-blue text-white shadow-lg shadow-sfl-blue/30"
                        : "border-white/10 text-slate-500 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="rounded-3xl border border-white/5 bg-white/2 backdrop-blur-3xl overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/5 bg-white/3">
                      <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">ID</th>
                      <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Center Name</th>
                      <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Manufacturer</th>
                      <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Vintage</th>
                      <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 text-right">Utility</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((m, i) => (
                      <tr
                        key={`${m.sl}-${m.name}`}
                        className="group border-b border-white/2 hover:bg-white/3 transition-colors"
                      >
                        <td className="px-8 py-5 text-[10px] font-black text-slate-600">#{m.sl.toString().padStart(2, '0')}</td>
                        <td className="px-8 py-5 text-sm font-bold text-white group-hover:text-sfl-blue transition-colors">{m.name}</td>
                        <td className="px-8 py-5 text-xs text-slate-400 font-medium">{m.make}</td>
                        <td className="px-8 py-5 text-xs text-slate-500 font-mono">{m.year}</td>
                        <td className="px-8 py-5 text-right">
                          <span className="text-[9px] font-black bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase tracking-tighter text-slate-300">
                            {m.category}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Technology Spotlight Carousel */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-10">Technology Spotlight</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Carousel Navigation */}
            <div className="lg:col-span-2 space-y-2">
              {spotlights.map((s, i) => (
                <button
                  key={s.title}
                  onClick={() => setSpotlightIdx(i)}
                  className={`w-full text-left p-4 border transition-all ${
                    spotlightIdx === i
                      ? "border-sfl-navy bg-sfl-navy/10"
                      : "border-primary-foreground/10 hover:border-primary-foreground/30"
                  }`}
                >
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    spotlightIdx === i ? "text-sfl-blue" : "text-primary-foreground/50"
                  }`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm font-bold mt-1">{s.title}</h3>
                </button>
              ))}
            </div>

            {/* Spotlight Detail */}
            <motion.div
              key={spotlightIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-3 border border-primary-foreground/10 p-8"
            >
              <h3 className="text-lg font-black uppercase tracking-tight text-sfl-blue mb-4">
                {spotlights[spotlightIdx].title}
              </h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed mb-6">
                {spotlights[spotlightIdx].desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {spotlights[spotlightIdx].specs.map(spec => (
                  <span key={spec} className="text-[10px] border border-sfl-blue/40 text-sfl-blue px-3 py-1 font-semibold uppercase tracking-wider">
                    {spec}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Infrastructure;
