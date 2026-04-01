import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, FileDown, ShieldCheck, Gauge, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const productData: Record<string, {
  title: string; sku: string; category: string; shortDesc: string;
  overview: string; specs: { param: string; value: string }[];
  quality: string; downloads: string[]; badges?: string[];
}> = {
  "shaft-020-6p": {
    title: "020 (6P) Precision Transmission Shaft",
    sku: "SFL-SHFT-020",
    category: "Transmission & Drive Components",
    shortDesc: "Induction hardened, high-grade carbon steel shaft engineered for absolute dynamic stability and vibration reduction in high-RPM home appliances.",
    overview: "The structural integrity and operational lifespan of rotational machinery relies entirely on the precise geometry of its drive shaft. Manufactured from premium quenched and tempered carbon steel, these shafts undergo rigorous surface finishing and precise induction hardening to withstand extreme, continuous torsional stress. Trusted by leading OEMs including Whirlpool, Godrej, IFB, Samsung, and LG.",
    specs: [
      { param: "Material Composition", value: "High-Tensile Carbon Steel" },
      { param: "Shaft Configuration", value: "6-Pole (6P)" },
      { param: "Operational Diameter Range", value: "16 mm – 140 mm" },
      { param: "Thermal Treatment", value: "Quenched & Tempered / Induction Hardened" },
      { param: "Surface Finish Accuracy", value: "Verified via Mitutoyo Tester (0.0001 mm least count)" },
      { param: "Dynamic Rotational Capacity", value: "Standard RPM configurations" },
      { param: "Available Plating", value: "Electroless Nickel, Hard Chrome, Zinc" },
      { param: "Quality Verification", value: "ESSON VMM + Digital Micrometer" },
    ],
    quality: "Every completed shaft is subjected to rigorous non-contact dimensional analysis utilizing our ESSON Video Measuring Machine (VMM) with 0.0001 mm resolution, alongside precise Mitutoyo digital micrometer checks and surface roughness testing, to guarantee absolute adherence to exact customer tolerances prior to final dispatch.",
    downloads: ["Technical Data Sheet (PDF)", "CAD Drawing (.STP)", "Material Certificate", "Quality Inspection Report"],
    badges: ["Home Appliance", "Washing Machine"],
  },
  "shaft-lg-fl440": {
    title: "LG-FL440 / 4000RPM Drive Shaft",
    sku: "SFL-SHFT-4K",
    category: "Transmission & Drive Components",
    shortDesc: "High-velocity, quenched and tempered transmission shaft designed for LG front-load washing machines and heavy-industrial drive applications requiring maximum torsional strength.",
    overview: "Engineered for absolute concentricity, our high-RPM shafts are manufactured utilizing state-of-the-art CNC turning on Galaxy Midas 6 and ACE J 300 LM machines, followed by CNC cylindrical grinding on Hi-Life grinders. Specifically designed to eliminate harmonic vibration in demanding applications. Available in highly balanced configurations supporting up to 4000 RPM — the trusted, zero-defect choice for LG, Whirlpool, and Godrej.",
    specs: [
      { param: "Material Composition", value: "Premium Alloy Steel" },
      { param: "Operational Diameter Range", value: "16 mm – 140 mm" },
      { param: "Thermal Treatment", value: "Deep Induction Hardened" },
      { param: "Surface Finish", value: "Verified via Mitutoyo Tester (0.0001 mm)" },
      { param: "Dynamic Rotational Capacity", value: "Up to 4000 RPM" },
      { param: "Available Plating", value: "Electroless Nickel, Hard Chrome" },
      { param: "Manufacturing", value: "Galaxy Midas 6 CNC + Hi-Life Grinding" },
      { param: "Inspection", value: "ESSON VMM Non-contact + Mitutoyo Digital" },
    ],
    quality: "Every shaft undergoes rigorous non-contact dimensional analysis utilizing ESSON VMM alongside Mitutoyo digital micrometer checks. Surface roughness verified to 0.0001 mm resolution. 100% inspection before dispatch.",
    downloads: ["Technical Data Sheet (PDF)", "CAD Drawing (.STP)", "Material Certificate", "Quality Inspection Report"],
    badges: ["NEW Development", "LG Platform", "4000 RPM"],
  },
  "shaft-030-7s": {
    title: "030 (7S) Precision Shaft",
    sku: "SFL-SHFT-030",
    category: "Transmission & Drive Components",
    shortDesc: "7-spline precision shaft for heavy-duty washing machine applications.",
    overview: "CNC turned and ground 7-spline shaft designed for enhanced torque transmission in heavy-duty washing machines. Manufactured on Galaxy Midas 6 CNC Turning Centers with rigorous quality control.",
    specs: [
      { param: "Material", value: "Carbon Steel" },
      { param: "Configuration", value: "7-Spline (7S)" },
      { param: "Treatment", value: "Quenched & Tempered" },
      { param: "Surface Finish", value: "Mitutoyo verified (0.0001 mm)" },
    ],
    quality: "100% dimensional inspection using ESSON VMM and Mitutoyo digital micrometers.",
    downloads: ["Technical Data Sheet (PDF)", "CAD Drawing (.STP)"],
    badges: ["Home Appliance"],
  },
  "shaft-4000rpm": {
    title: "4000RPM High-Velocity Transmission Shaft",
    sku: "SFL-SHFT-4KRPM",
    category: "Transmission & Drive Components",
    shortDesc: "Maximum-RPM shaft for automotive powertrains and heavy-industrial drive applications.",
    overview: "Our highest RPM shaft offering, engineered for maximum torsional strength and zero vibration at sustained 4000 RPM. Manufactured on ACE Designers J 300 LM CNC Lathes with Linear Motion guideways, finished on Hi-Life CNC cylindrical grinders.",
    specs: [
      { param: "Material", value: "Premium Alloy Steel" },
      { param: "Max RPM", value: "4000 RPM" },
      { param: "Max Turning Diameter", value: "320 mm (ACE J 300 LM)" },
      { param: "Treatment", value: "Deep Induction Hardened" },
      { param: "Plating", value: "Hard Chrome" },
    ],
    quality: "Non-contact ESSON VMM analysis + Mitutoyo surface roughness testing at 0.0001 mm resolution.",
    downloads: ["Technical Data Sheet (PDF)", "CAD Drawing (.STP)", "Material Certificate"],
    badges: ["NEW Development", "Automotive", "4000 RPM"],
  },
};

const defaultProduct = {
  title: "Product Detail",
  sku: "SFL-XXX",
  category: "Components",
  shortDesc: "Precision-manufactured component meeting exacting OEM specifications.",
  overview: "Manufactured using state-of-the-art CNC machining centers (Galaxy Midas 6 and ACE J 300 LM) with rigorous quality control protocols. Every component verified using ESSON VMM and Mitutoyo measuring instruments.",
  specs: [
    { param: "Material", value: "High-Grade Steel" },
    { param: "Tolerance", value: "As per customer specification" },
    { param: "Surface Finish", value: "Precision ground, Mitutoyo verified" },
    { param: "Inspection", value: "ESSON VMM + Digital Micrometer" },
  ],
  quality: "Subject to comprehensive dimensional verification using 32 advanced metrology instruments including ESSON VMM (0.0001 mm), Mitutoyo micrometers, and Baker/Yuzuki height gauges.",
  downloads: ["Technical Data Sheet (PDF)"],
  badges: [] as string[],
};

const tabs = ["Overview", "Specifications", "Quality & Metrology", "Downloads"];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = (id && productData[id]) || defaultProduct;
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="min-h-screen bg-[#070B14]">
      <Navbar />

      <section className="pt-24 pb-6 lg:pt-28 bg-[#070B14] border-b border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal direction="left">
            <Link to="/products" className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-widest text-sfl-blue mb-6 hover:text-white transition-colors group">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Catalog
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Product Header */}
            <ScrollReveal direction="up">
              <div className="mb-12">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#A5D8FF] border-l-2 border-sfl-blue pl-2">
                    {product.category}
                  </span>
                  {(product.badges || []).map(badge => (
                    <span key={badge} className="bg-sfl-blue/10 text-sfl-blue px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-full border border-sfl-blue/20">
                      {badge}
                    </span>
                  ))}
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter mt-2 mb-4 leading-none bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-500">
                  {product.title}
                </h1>
                <p className="text-[10px] text-slate-500 font-mono tracking-widest">SKU: {product.sku}</p>
                <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent my-8" />
                <p className="text-sm text-slate-400 leading-relaxed font-medium italic">"{product.shortDesc}"</p>
              </div>
            </ScrollReveal>

            {/* Tabs */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="flex border-b border-white/5 mb-12 overflow-x-auto no-scrollbar">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 sm:px-6 py-3 sm:py-4 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] whitespace-nowrap border-b-2 transition-all duration-300 ${
                      activeTab === tab
                        ? "border-sfl-blue text-sfl-blue bg-sfl-blue/5"
                        : "border-transparent text-white/40 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {/* Tab Content */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="min-h-[400px]">
                {activeTab === "Overview" && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">{product.overview}</p>
                    
                    {/* Manufacturing Process Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                      {[
                        { icon: Wrench, label: "CNC Turning", desc: "Galaxy Midas 6 / ACE J 300 LM" },
                        { icon: Gauge, label: "CNC Grinding", desc: "Hi-Life Cylindrical Grinder" },
                        { icon: ShieldCheck, label: "VMM Inspection", desc: "ESSON 0.0001 mm Resolution" },
                      ].map(step => (
                        <div key={step.label} className="glass-panel p-6 hover:bg-white/5 transition-all duration-500 group">
                          <step.icon size={24} className="text-sfl-blue mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                          <h4 className="text-[10px] font-black uppercase tracking-widest mb-2 text-white">{step.label}</h4>
                          <p className="text-[10px] text-slate-500 leading-relaxed font-medium">{step.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "Specifications" && (
                  <div className="glass-panel overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/5 bg-white/2">
                          <th className="text-left px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Parameter</th>
                          <th className="text-left px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.specs.map((s) => (
                          <tr key={s.param} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                            <td className="px-6 py-4 font-black text-[11px] uppercase tracking-wider text-white/70">{s.param}</td>
                            <td className="px-6 py-4 text-slate-400 font-medium">{s.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === "Quality & Metrology" && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">{product.quality}</p>
                    <div className="glass-panel p-8 space-y-6">
                      <SectionLabel text="Inspection Capability Excellence" className="mb-8" />
                      {[
                        { label: "VMM Resolution", value: "0.0001 mm", pct: 100 },
                        { label: "Surface Roughness", value: "0.0001 mm", pct: 100 },
                        { label: "Micrometer Accuracy", value: "0.001 mm", pct: 90 },
                        { label: "Height Gauge", value: "0.02 mm", pct: 60 },
                      ].map(cap => (
                        <div key={cap.label} className="group">
                          <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-3">
                            <span className="text-slate-500 group-hover:text-white transition-colors">{cap.label}</span>
                            <Tooltip>
                              <TooltipTrigger>
                                <span className="text-sfl-blue font-black">{cap.value}</span>
                              </TooltipTrigger>
                              <TooltipContent className="bg-sfl-navy border-white/10 text-[10px] font-black uppercase tracking-widest text-white">
                                Least count / resolution
                              </TooltipContent>
                            </Tooltip>
                          </div>
                          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${cap.pct}%` }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-sfl-blue to-white" 
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "Downloads" && (
                  <div className="grid grid-cols-1 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {product.downloads.map((d) => (
                      <div key={d} className="glass-panel p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-white/5 transition-all duration-300 group">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-white/5 rounded-lg text-sfl-blue group-hover:scale-110 transition-transform">
                            <FileDown size={20} />
                          </div>
                          <span className="text-[11px] font-black uppercase tracking-widest text-white/80">{d}</span>
                        </div>
                        <Button variant="ghost" className="text-[10px] font-black uppercase tracking-widest text-sfl-blue hover:text-white hover:bg-sfl-blue transition-all">
                          Download PDF
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Sticky Quote Box */}
          <div className="lg:col-span-1">
            <ScrollReveal direction="right" delay={0.3}>
              <div className="lg:sticky lg:top-28 glass-panel p-8 space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sfl-blue/5 blur-2xl rounded-full" />
                
                <div>
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-4 text-white">Request a Quote</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                    Get comprehensive pricing, manufacturability analysis, and exact lead-time for this component series.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full bg-sfl-blue hover:bg-white hover:text-black text-white text-[10px] font-black uppercase tracking-widest py-6 transition-all duration-500 rounded-none" asChild>
                    <Link to="/rfq">Add to Quote Request</Link>
                  </Button>
                  <Button variant="outline" className="w-full border-white/10 hover:border-sfl-blue hover:bg-sfl-blue/5 text-slate-400 hover:text-white text-[10px] font-black uppercase tracking-widest py-6 transition-all duration-500 rounded-none" asChild>
                    <Link to="/rfq">Engineering Support</Link>
                  </Button>
                </div>

                <div className="space-y-4 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={16} className="text-sfl-blue" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">ISO 9001:2015 Certified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Gauge size={16} className="text-sfl-blue" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Zero-Defect Protocol</span>
                  </div>
                  <div className="p-3 bg-white/2 border border-white/5">
                    <p className="text-[8px] text-sfl-blue font-black uppercase tracking-[0.3em]">
                      Response Window: &lt; 24 Hours
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
