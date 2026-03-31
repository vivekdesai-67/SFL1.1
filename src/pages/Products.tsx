import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Search, X, Settings, Database, Activity } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Magnetic } from "@/components/ui/Magnetic";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type ProductItem = {
  id: string; title: string; summary: string; category: string; material: string; coating: string; thread: string; application: string; badge: string | null; image?: string; noInvert?: boolean;
};

const allProducts: ProductItem[] = [
  {
    id: "shaft-020-6p",
    title: "020 (6P) Shaft",
    summary: "Precision transmission shaft for washing machine drum assemblies. Induction hardened carbon steel with dynamic stability.",
    category: "Shafts",
    material: "Carbon Steel",
    coating: "Zinc Plating",
    thread: "N/A",
    application: "Home Appliance",
    badge: null,
    image: "/products/shaft-020.png",
  },
  {
    id: "shaft-030-7s",
    title: "030 (7S) Shaft",
    summary: "7-spline precision shaft for heavy-duty washing machine applications. CNC turned and ground for absolute concentricity.",
    category: "Shafts",
    material: "Carbon Steel",
    coating: "Electroless Nickel Plating",
    thread: "N/A",
    application: "Home Appliance",
    badge: null,
    image: "/products/shaft-030.png",
  },
  {
    id: "shaft-040-8s",
    title: "040 (8S) Shaft",
    summary: "8-spline transmission shaft with enhanced torque capacity for industrial washing systems and heavy appliances.",
    category: "Shafts",
    material: "Carbon Steel",
    coating: "Chrome Plating",
    thread: "N/A",
    application: "Home Appliance",
    badge: null,
    image: "/products/shaft-040.png",
  },
  {
    id: "shaft-050-8p",
    title: "050 (8P) Shaft",
    summary: "8-pole precision drive shaft for advanced motor assemblies. Quenched and tempered for maximum torsional strength.",
    category: "Shafts",
    material: "Alloy Steel",
    coating: "Electroless Nickel Plating",
    thread: "N/A",
    application: "Home Appliance",
    badge: null,
    image: "/products/shaft-050.png",
  },
  {
    id: "shaft-lg-fl440",
    title: "LG-FL440 Drive Shaft",
    summary: "High-velocity quenched and tempered shaft for LG front-load washing machines. Engineered for 4000RPM dynamic stability.",
    category: "Shafts",
    material: "Alloy Steel",
    coating: "Chrome Plating",
    thread: "N/A",
    application: "Home Appliance",
    badge: "NEW",
    image: "/products/shaft-lg.png",
  },
  {
    id: "shaft-4000rpm",
    title: "4000RPM High-Velocity Shaft",
    summary: "Maximum-RPM transmission shaft for demanding automotive and industrial drive applications requiring ultimate torsional strength.",
    category: "Shafts",
    material: "Alloy Steel",
    coating: "Hard Chrome",
    thread: "N/A",
    application: "Automotive",
    badge: "NEW",
    image: "/products/shaft-4000.png",
  },
  {
    id: "hex-nuts-bolts",
    title: "High-Tensile Hex Nuts & U-Bolts",
    summary: "Corrosion-resistant, internally and externally threaded standard and custom fasteners. Hot-dip galvanized or electroless nickel plating.",
    category: "Fasteners",
    material: "Alloy Steel",
    coating: "Hot Dip Galvanized",
    thread: "Metric",
    application: "Industrial",
    badge: null,
    image: "/products/high-tensile-fasteners-v2.png",
    noInvert: true,
  },
  {
    id: "cnc-component-1",
    title: "CNC Machining Housing",
    summary: "Precision CNC-turned component for industrial assemblies. Multi-axis machining with tight tolerances.",
    category: "Machined Components",
    material: "Alloy Steel",
    coating: "Chrome Plating",
    thread: "Metric",
    application: "Industrial",
    badge: null,
    image: "/products/cnc-machining-housing-v2.png",
    noInvert: true,
  },
];

const filterOptions = {
  category: ["Shafts", "Fasteners", "Machined Components"],
  material: ["Carbon Steel", "Alloy Steel", "Stainless Steel"],
  application: ["Home Appliance", "Automotive", "Industrial"],
};

type FilterKey = keyof typeof filterOptions;

const Products = () => {
  const [filters, setFilters] = useState<Record<string, string[]>>({});
  const [search, setSearch] = useState("");

  const toggleFilter = (key: string, value: string) => {
    setFilters((prev) => {
      const current = prev[key] || [];
      return { ...prev, [key]: current.includes(value) ? current.filter((v) => v !== value) : [...current, value] };
    });
  };

  const activeFilters = Object.entries(filters).flatMap(([key, values]) =>
    values.map((v) => ({ key, value: v }))
  );

  const filtered = allProducts.filter((p) => {
    const matchesFilters = Object.entries(filters).every(([key, values]) =>
      values.length === 0 || values.includes(p[key as keyof typeof p] as string)
    );
    const matchesSearch = search === "" || 
      p.title.toLowerCase().includes(search.toLowerCase()) || 
      p.summary.toLowerCase().includes(search.toLowerCase());
    return matchesFilters && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#070B14] text-white selection:bg-sfl-blue/30">
      <Navbar />

      {/* Header with Mesh Gradient */}
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
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-sfl-gold">Engineering Catalog</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
              Component<br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-sfl-blue to-white">Solutions</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-medium opacity-80">
              A comprehensive portfolio of precision-engineered shafts, high-tensile 
              industrial fasteners, and custom CNC components built to global standards.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 pb-32">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters - Premium Glass */}
          <aside className="lg:w-72 shrink-0">
            <div className="lg:sticky lg:top-28 space-y-10">
              {/* Search */}
              <div className="relative">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="SEARCH CATALOG..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-[10px] font-black tracking-widest border border-white/10 bg-white/5 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-sfl-blue transition-all"
                />
              </div>

              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-slate-500">Filtration</h3>
                {(Object.entries(filterOptions) as [FilterKey, string[]][]).map(([key, options]) => (
                  <div key={key} className="mb-8">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#A5D8FF] mb-4 opacity-70">{key}</h4>
                    <div className="flex flex-col gap-2">
                      {options.map((opt) => {
                        const active = (filters[key] || []).includes(opt);
                        return (
                          <button
                            key={opt}
                            onClick={() => toggleFilter(key, opt)}
                            className={`text-left text-[10px] font-black tracking-widest px-4 py-3 rounded-xl border transition-all duration-300 ${
                              active
                                ? "bg-sfl-blue text-white border-sfl-blue shadow-[0_0_20px_rgba(25,148,245,0.4)]"
                                : "border-white/5 bg-white/3 text-white/50 hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-6">
              <p className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-500">Showing {filtered.length} Results</p>
              {activeFilters.length > 0 && (
                <button
                  onClick={() => setFilters({})}
                  className="text-[10px] font-black tracking-[0.3em] uppercase text-sfl-blue hover:text-white transition-colors underline"
                >
                  Reset Filters
                </button>
              )}
            </div>

            <ScrollReveal direction="up" staggerChildren={0.05}>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filtered.map((product) => (
                  <div key={product.id}>
                    <Magnetic>
                      <Link
                        to={`/products/${product.id}`}
                        className="group block rounded-2xl glass-panel glass-panel-hover p-8 relative h-full flex flex-col"
                      >
                        {product.badge && (
                          <div className="absolute top-4 right-4 bg-sfl-gold text-black text-[9px] font-black px-2 py-1 rounded shadow-lg z-20">
                            {product.badge}
                          </div>
                        )}
                        
                        <div className="h-72 bg-[#070B14] mb-8 rounded-xl flex items-center justify-center border border-white/5 transition-colors overflow-hidden relative group-hover:border-white/10">
                          {product.image ? (
                            <>
                              <img src={product.image} alt={product.title} className={`absolute inset-0 w-full h-full transition-all duration-700 group-hover:scale-110 [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] ${product.noInvert ? 'object-cover opacity-80 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal' : 'object-contain invert brightness-105 contrast-125 mix-blend-screen'}`} />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/20 to-transparent pointer-events-none" />
                            </>
                          ) : product.category === "Shafts" ? (
                            <Activity className="w-12 h-12 text-sfl-blue opacity-40 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500" />
                          ) : product.category === "Fasteners" ? (
                            <Settings className="w-12 h-12 text-sfl-blue opacity-40 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-500" />
                          ) : (
                            <Database className="w-12 h-12 text-sfl-blue opacity-40 group-hover:opacity-100 transition-all duration-500" />
                          )}
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-[9px] font-black tracking-widest text-[#A5D8FF] border border-[#A5D8FF]/20 px-2 py-1 rounded">
                            {product.category}
                          </span>
                        </div>

                        <h3 className="text-xl font-black uppercase tracking-tight mb-4 group-hover:text-sfl-blue transition-colors">
                          {product.title}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed mb-10 opacity-70 group-hover:opacity-100 transition-opacity flex-1 font-medium italic">
                          "{product.summary}"
                        </p>

                        <div className="flex items-center justify-between border-t border-white/5 pt-6">
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors flex items-center gap-2">
                            View Specs <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </span>
                          <span className="text-[10px] font-black uppercase tracking-widest bg-white/5 px-3 py-1 rounded text-slate-400">{product.material}</span>
                        </div>
                      </Link>
                    </Magnetic>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;

