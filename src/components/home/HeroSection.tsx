import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FileText, ChevronDown } from "lucide-react";
import { useRef } from "react";
import { Magnetic } from "@/components/ui/Magnetic";
import { SectionLabel } from "@/components/ui/SectionLabel";

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

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-[#070B14] overflow-hidden"
    >
      {/* Premium Mesh Background */}
      <motion.div 
        className="absolute inset-0 z-0 mesh-gradient opacity-60"
        style={{ y: yBg }}
      />
      
      {/* Floating Accents */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-sfl-blue/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-sfl-gold/5 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Subtle grid for industrial feel */}
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Main Content */}
      <motion.div 
        className="container mx-auto px-4 lg:px-8 relative z-10 pt-20"
        style={{ y: yText, opacity: opacityText }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Premium Tagline */}
            {/* Standardized Section Label */}
            <SectionLabel 
              text="Precision Manufacturing Since 2000" 
              center 
              className="mb-12" 
            />

            {/* Headline with high-end styling */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] text-white mb-8">
              <span className="block mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                Engineered for
              </span>
              <span className="relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sfl-blue via-white to-sfl-blue bg-[length:200%_auto] animate-[shimmer_5s_linear_infinite]">
                  Excellence.
                </span>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-[4px] bg-sfl-blue blur-sm opacity-50" />
              </span>
            </h1>

            {/* Subheadline - Refined spacing and typography */}
            <p className="text-base text-slate-400 max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
              India's premier manufacturer of high-precision machined components and industrial fasteners. 
              Certified quality, zero-defect production, and global delivery standards.
            </p>

            {/* CTAs with Magnetic Effect */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Magnetic>
                <Link 
                  to="/products"
                  className="px-12 py-5 bg-white text-black font-black uppercase tracking-widest text-sm rounded-full hover:bg-sfl-blue hover:text-white transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                >
                  Explore Catalog
                </Link>
              </Magnetic>
              
              <Magnetic>
                <Link 
                  to="/rfq"
                  className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-white/70 hover:text-white transition-colors group"
                >
                  Get Custom Quote
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-sfl-blue to-transparent" />
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 whitespace-nowrap">Scroll Down</span>
      </motion.div>
    </section>
  );
}
