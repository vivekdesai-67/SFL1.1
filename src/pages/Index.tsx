import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { BentoGrid } from "@/components/home/BentoGrid";
import { StatsSection } from "@/components/home/StatsSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Link } from "react-router-dom";
import { ShieldCheck, Award, Cpu, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const Index = () => {
  return (
    <div style={{ position: "relative" }} className="relative min-h-screen bg-[#070B14] text-white selection:bg-sfl-blue/30 overflow-x-hidden">
      <Navbar />
      
      <HeroSection />

      <div className="relative">
        {/* Subtle transition between sections */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#070B14] to-transparent z-10" />
        
        <ScrollReveal delay={0.1} direction="up">
          <TrustBar />
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.1} direction="up">
        <BentoGrid />
      </ScrollReveal>

      <div className="relative bg-[#070B14]">
         <div className="absolute inset-0 mesh-gradient opacity-10 pointer-events-none" />
         <ScrollReveal delay={0.1} direction="right">
          <StatsSection />
        </ScrollReveal>
      </div>

      {/* Engineering & Quality CTA Section - Premium Upgrade */}
      <section className="py-32 lg:py-48 relative overflow-hidden bg-[#070B14]">
        {/* Background Accents */}
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-sfl-blue/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-sfl-gold/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex flex-col items-center mb-20 text-center">
              <SectionLabel 
                text="Global Delivery Standards" 
                center 
                className="mb-8" 
              />
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
                Engineered for <br/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sfl-blue via-white to-slate-500">
                  Extreme Environments
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" staggerChildren={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: ShieldCheck,
                  title: "ISO 9001:2015",
                  desc: "Certified quality management ensuring zero-defect production across all machining lines.",
                  link: "/quality",
                },
                {
                  icon: Award,
                  title: "Elite OEM Partner",
                  desc: "Recognized as a top-tier supplier for precision shafts with 100% client retention.",
                  link: "/about",
                },
                {
                  icon: Cpu,
                  title: "Advanced Fleet",
                  desc: "50+ state-of-the-art CNC and Grinding centers for uncompromised manufacturing speed.",
                  link: "/infrastructure",
                },
              ].map((card) => (
                <div key={card.title} className="h-full">
                  <Link
                    to={card.link}
                    className="group block h-full rounded-2xl glass-panel glass-panel-hover p-6 sm:p-10 relative overflow-hidden flex flex-col"
                  >
                    {/* Blue glow */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-sfl-blue/10 blur-3xl rounded-full group-hover:bg-sfl-blue/20 transition-colors duration-500 pointer-events-none" />
                    {/* Shine sweep */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                    
                    <div className="mb-8 p-4 bg-white/5 rounded-xl border border-white/10 w-fit group-hover:bg-sfl-blue/20 group-hover:border-sfl-blue transition-all duration-500">
                      <card.icon 
                        className="w-8 h-8 text-sfl-blue group-hover:scale-110 transition-transform duration-500" 
                        strokeWidth={1.5} 
                      />
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-widest mb-4 text-white">
                      {card.title}
                    </h3>
                     <p className="text-sm text-slate-400 leading-relaxed mb-10 font-medium group-hover:opacity-100 transition-opacity">
                      {card.desc}
                    </p>
                    
                    <div className="mt-auto flex items-center gap-3 text-[10px] text-white font-black uppercase tracking-[0.2em] group-hover:text-sfl-blue transition-colors duration-300">
                      Learn More 
                      <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal delay={0.1} direction="up">
        <Footer />
      </ScrollReveal>
    </div>
  );
};

export default Index;
