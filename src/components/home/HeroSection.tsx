import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FileText, ChevronDown } from "lucide-react";
import { useRef } from "react";
import { Magnetic } from "@/components/ui/Magnetic";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TypeWriter } from "@/components/ui/TypeWriter";
import { Award } from "lucide-react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax values
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const opacityScrollIndicator = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  return (
    <section 
      ref={containerRef}
      style={{ position: "relative" }}
      className="relative min-h-screen flex items-center justify-center bg-[#070B14] overflow-hidden"
    >
      {/* Premium High-Fidelity Video Background Integration */}
      <div className="absolute inset-0 z-0 opacity-70 overflow-hidden pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover scale-105 transition-opacity duration-1000"
        >
          <source src="/videos/hero-cnc.mp4" type="video/mp4" />
        </video>
        {/* Thematic Gradients for Premium Integration - Matched with Quality Page */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B14] via-[#070B14]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B14]/80 via-transparent to-[#070B14] z-10 pointer-events-none" />
        
        {/* Subtle mesh to tie into the Dark Tech aesthetic */}
        <div className="absolute inset-0 mesh-gradient opacity-30 mix-blend-overlay pointer-events-none z-10" />
      </div>

      {/* Subtle Mesh Background Overlay - Reduced for 4K video clarity */}
      <motion.div 
        className="absolute inset-0 z-0 mesh-gradient opacity-20 mix-blend-overlay"
        style={{ y: yBg }}
      />
      
      {/* Floating Accents */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-sfl-blue/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-sfl-gold/5 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Subtle grid for industrial feel */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Main Content */}
      <motion.div 
        className="container mx-auto px-4 lg:px-8 relative z-10 pt-20"
        style={{ y: yText, opacity: opacityText }}
      >
        <div className="max-w-4xl text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Premium Tagline */}
            <SectionLabel 
              text="Precision Manufacturing Since 2000" 
              className="mb-12" 
            />

            {/* Headline with high-end styling - Matched with Quality Page structure */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none mb-6 sm:mb-8 text-white">
              Engineered for<br />
              <TypeWriter words={["Excellence.", "Precision.", "Zero Defects."]} />
            </h1>

            {/* Engineering Objective Card - Matched with Quality Page */}
            <div className="mt-2 glass-panel p-4 sm:p-6 max-w-2xl mb-12">
              <div className="flex items-center gap-2 mb-3">
                <Award size={16} className="text-sfl-blue" />
                <h3 className="text-xs font-body font-bold tracking-[0.3em] uppercase text-sfl-blue">Engineering & Manufacturing Objective</h3>
              </div>
              <p className="text-sm font-body text-slate-400 leading-relaxed italic font-medium">
                "To consistently deliver precision-engineered shafts that meet customer specifications,
                ensure superior quality, and achieve on-time delivery through continuous improvement and operational excellence."
              </p>
            </div>

          </motion.div>
        </div>

        {/* CTAs with Magnetic Effect - Truly Centered on Screen */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-col sm:flex-row gap-5 sm:gap-8 justify-center items-center px-4 mt-12 w-full"
        >
          <Magnetic>
            <Link 
              to="/products"
              className="block sm:inline-block px-8 sm:px-12 py-4 sm:py-5 bg-sfl-blue text-white font-black uppercase tracking-widest text-xs sm:text-sm rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_40px_rgba(25,148,245,0.3)] w-full sm:w-auto text-center"
            >
              Explore Catalog
            </Link>
          </Magnetic>
          
          <Magnetic>
            <Link 
              to="/rfq"
              className="block sm:inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest text-white/70 hover:text-white transition-colors group"
            >
              Get Custom Quote
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </Magnetic>
        </motion.div>
      </motion.div>


      {/* Floating Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ opacity: opacityScrollIndicator }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-sfl-blue to-transparent" />
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 whitespace-nowrap">Scroll Down</span>
      </motion.div>
    </section>
  );
}
