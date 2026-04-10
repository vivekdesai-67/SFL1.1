import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Users, Target, Award, Shield, Factory, Zap, Timer, Briefcase } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TypeWriter } from "@/components/ui/TypeWriter";
import { useRef, useEffect } from "react";

const stats = [
  { label: "Active Clients", value: "200+", icon: Users },
  { label: "Precision Centers", value: "51", icon: Factory },
  { label: "Specialist Team", value: "120+", icon: Briefcase },
  { label: "Years of Excellence", value: "35", icon: Zap },
];

const values = [
  {
    title: "Zero Defect Policy",
    desc: "Rigorous ISO 9001:2015 certified quality management systems at every stage of production.",
    icon: Shield,
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "On-Time Delivery",
    desc: "Optimized logistics and production scheduling ensuring 99.8% on-time delivery rate.",
    icon: Timer,
    color: "from-amber-500/20 to-orange-500/20"
  },
  {
    title: "Engineering Innovation",
    desc: "Continuous investment in multi-axis machinery and automated manufacturing technologies.",
    icon: Target,
    color: "from-emerald-500/20 to-teal-500/20"
  },
];

const timeline = [
  { year: "1989", event: "Incorporation of SFL Hubballi plant" },
  { year: "2005", event: "Strategic expansion into precision engineering" },
  { year: "2015", event: "Integration of advanced CNC turning centers" },
  { year: "2021", event: "Multi-axis automation & Robotic interface launch" },
  { year: "2023", event: "Tier-1 partnership with global auto-majors reached" },
];

const About = () => {
  const aboutVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = aboutVideoRef.current;
    if (!video) return;
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay prevented; poster shown
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#070B14] text-white selection:bg-sfl-blue/30 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#070B14]">
        {/* Cinematic Background Video */}
        <div className="absolute inset-0 z-0 opacity-70 overflow-hidden pointer-events-none">
          <video 
            ref={aboutVideoRef}
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto"
            poster="/quality-hero-bg.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/about-hero.mp4" type="video/mp4" />
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
            <SectionLabel text="Our Legacy" />
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none mb-6 sm:mb-8 text-white">
              Pioneering <span className="bg-clip-text text-transparent bg-gradient-to-r from-sfl-blue to-white">Precision</span><br />
              <TypeWriter words={["Engineering Excellence", "Global Leadership", "Innovation First"]} />
            </h1>
            
            {/* Corporate Objective Card */}
            <div className="mt-2 glass-panel p-4 sm:p-6 max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <Target size={16} className="text-sfl-blue" />
                <h3 className="text-xs font-body font-bold tracking-[0.3em] uppercase text-sfl-blue">Corporate Mission & Strategy</h3>
              </div>
              <p className="text-sm font-body text-slate-400 leading-relaxed italic font-medium">
                "Shree Fasteners Private Limited (SFPL) is dedicated to evolving from a specialist component manufacturer 
                into a global leader in Tier-1 precision engineering through uncompromising commitment to zero-defect 
                manufacturing and automated technological advancement."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Corporate Dashboard */}
      <section className="py-12 bg-[#070B14] relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal direction="up" staggerChildren={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl glass-panel glass-panel-hover p-8 text-center group relative overflow-hidden">
                  {/* Shine sweep */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                  {/* Blue glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sfl-blue/10 blur-3xl rounded-full group-hover:bg-sfl-blue/20 transition-colors duration-500 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-sfl-blue/20 group-hover:border-sfl-blue/50 group-hover:scale-110 transition-all duration-500">
                      <stat.icon className="w-6 h-6 text-sfl-blue" />
                    </div>
                    <div className="text-4xl font-black mb-1">{stat.value}</div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Extended Narrative */}
      <section className="py-32 bg-[#070B14] relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-sfl-blue/10 blur-[100px]" />
                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter mb-6 sm:mb-8 leading-tight">
                  Uncompromising <br /><span className="text-sfl-blue">Technical Expertise</span>
                </h2>
                <div className="space-y-6 text-sm text-slate-400 font-medium leading-relaxed">
                  <p>
                    Over three decades, we have strictly adhered to zero-defect manufacturing protocols. Our 
                    infrastructure in Hubballi acts as the engineering heart for global automotive and 
                    heavy machinery leaders.
                  </p>
                  <p>
                    Every component leaving our floor undergoes high-precision automated inspection, 
                    ensuring that SFPL remains synonymous with reliability and industrial excellence.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" staggerChildren={0.1}>
              <div className="grid grid-cols-1 gap-4">
                {values.map((v) => (
                  <div key={v.title} className="rounded-2xl glass-panel glass-panel-hover p-6 flex gap-6 items-start group relative overflow-hidden">
                    {/* Shine sweep */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                    {/* Blue glow */}
                    <div className="absolute top-0 right-0 w-28 h-28 bg-sfl-blue/10 blur-3xl rounded-full group-hover:bg-sfl-blue/20 transition-colors duration-500 pointer-events-none" />
                    <div className={`relative z-10 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center group-hover:bg-sfl-blue/20 group-hover:border-sfl-blue/50 group-hover:scale-110 transition-all duration-500`}>
                      <v.icon className="w-6 h-6 text-sfl-blue" />
                    </div>
                    <div className="relative z-10">
                      <h3 className="font-black uppercase tracking-tight text-sm mb-2">{v.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Leadership & Recognition */}
      <section className="py-32 bg-[#070B14] relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <SectionLabel text="Leadership & Excellence" center />
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              Recognized <span className="bg-clip-text text-transparent bg-gradient-to-r from-sfl-blue to-white">Globally</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            {/* Leadership Profiles */}
            <ScrollReveal direction="up">
              <Magnetic>
                <div className="glass-panel p-10 text-left group h-full relative overflow-hidden transition-all duration-500 hover:border-sfl-blue/40">
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                  <div className="absolute top-0 right-0 w-48 h-48 bg-sfl-blue/10 blur-[80px] rounded-full group-hover:bg-sfl-blue/20 transition-colors duration-700 pointer-events-none" />
                  
                  <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start relative z-10">
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 bg-sfl-blue/20 blur-xl group-hover:bg-sfl-blue/40 transition-colors duration-500 rounded-2xl opacity-0 group-hover:opacity-100" />
                      <div className="w-40 h-40 rounded-2xl overflow-hidden relative border border-white/10 bg-white/5 shadow-2xl">
                        <img 
                          src="/images/chairman-profile.png" 
                          alt="Ishwarappa S Handigol - Chairman" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-1 group-hover:text-sfl-blue transition-colors">
                        Ishwarappa S <span className="text-slate-500">Handigol</span>
                      </h3>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="h-[2px] w-4 bg-sfl-gold" />
                        <p className="text-sfl-gold text-[10px] font-black tracking-[0.3em] uppercase">Chairman / Director</p>
                      </div>
                      <p className="text-sm text-slate-400 font-medium leading-relaxed mb-4">
                        A first-generation entrepreneur & visionary leader with 50+ years of industrial experience. His passion for automotive and home appliances has brought immense success, focused always on maximum customer satisfaction.
                      </p>
                      <div className="flex gap-4">
                         <div className="text-[10px] font-black uppercase tracking-widest text-slate-600 bg-white/5 px-3 py-1 rounded-full border border-white/5">50+ Years Exp.</div>
                         <div className="text-[10px] font-black uppercase tracking-widest text-slate-600 bg-white/5 px-3 py-1 rounded-full border border-white/5">Founder</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Magnetic>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <Magnetic>
                <div className="glass-panel p-10 text-left group h-full relative overflow-hidden transition-all duration-500 hover:border-sfl-blue/40">
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                  <div className="absolute top-0 right-0 w-48 h-48 bg-sfl-blue/10 blur-[80px] rounded-full group-hover:bg-sfl-blue/20 transition-colors duration-700 pointer-events-none" />
                  
                  <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start relative z-10">
                    <div className="relative shrink-0">
                       <div className="absolute inset-0 bg-sfl-blue/20 blur-xl group-hover:bg-sfl-blue/40 transition-colors duration-500 rounded-2xl opacity-0 group-hover:opacity-100" />
                      <div className="w-40 h-40 rounded-2xl overflow-hidden relative border border-white/10 bg-white/5 shadow-2xl">
                        <img 
                          src="/images/ceo-profile.png" 
                          alt="Sangamesh I Handigol - CEO" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-1 group-hover:text-sfl-blue transition-colors">
                        Sangamesh I <span className="text-slate-500">Handigol</span>
                      </h3>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="h-[2px] w-4 bg-sfl-blue" />
                        <p className="text-sfl-blue text-[10px] font-black tracking-[0.3em] uppercase">CEO / Marketing Head</p>
                      </div>
                      <p className="text-sm text-slate-400 font-medium leading-relaxed mb-4">
                        A Marketing graduate with over 20 years of experience in the family business. He is the driving force implementing modern ways to simplify business and make Sangam Fasteners a reputed organization globally.
                      </p>
                      <div className="flex gap-4">
                         <div className="text-[10px] font-black uppercase tracking-widest text-slate-600 bg-white/5 px-3 py-1 rounded-full border border-white/5">20+ Years Exp.</div>
                         <div className="text-[10px] font-black uppercase tracking-widest text-slate-600 bg-white/5 px-3 py-1 rounded-full border border-white/5">Innovation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Magnetic>
            </ScrollReveal>
          </div>

          {/* Awards Text */}
          <ScrollReveal direction="up">
            <div className="text-center mb-16 max-w-4xl mx-auto px-4">
              <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-sfl-blue/20 bg-sfl-blue/5 shadow-[0_0_15px_rgba(25,148,245,0.05)]">
                <Award className="w-4 h-4 text-sfl-blue drop-shadow-[0_0_8px_rgba(25,148,245,0.5)]" />
                <span className="text-[10px] font-body font-black uppercase tracking-[0.4em] text-sfl-blue">Prestigious Recognition</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black uppercase tracking-tighter leading-[1.1] text-slate-300">
                Sangam Fasteners Pvt Ltd has been recognized as one of the <br className="hidden md:block" /> 
                <span className="text-white underline decoration-sfl-blue/50 decoration-2 underline-offset-[12px]">Top Manufacturers in shafts</span> and was honored with the <br className="hidden md:block" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sfl-blue to-white">Best Supplier Award from IFB</span>.
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="glass-panel overflow-hidden group relative">
                <div className="aspect-video relative bg-[#070B14]">
                  <img src="/images/ifb-award.png" alt="IFB Supplier Partners Meet 2014" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                  
                  {/* Glass Card content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="relative overflow-hidden inline-block px-4 py-1 rounded mb-3 border border-white/10 bg-white/5 backdrop-blur-md">
                       <span className="text-sfl-blue text-[10px] font-black tracking-[0.4em] uppercase relative z-10">2014 Recognition</span>
                    </div>
                    <h4 className="text-2xl font-black uppercase tracking-tight leading-none text-white group-hover:text-sfl-blue transition-colors">
                      IFB Supplier <br />Partners Meet
                    </h4>
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-sfl-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="glass-panel overflow-hidden group relative">
                <div className="aspect-video relative bg-[#070B14]">
                  <img src="/images/sbi-award.png" alt="Bank Day 1st July 2017 SBI Award" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                  
                  {/* Glass Card content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="relative overflow-hidden inline-block px-4 py-1 rounded mb-3 border border-white/10 bg-white/5 backdrop-blur-md">
                       <span className="text-sfl-gold text-[10px] font-black tracking-[0.4em] uppercase relative z-10">2017 Recognition</span>
                    </div>
                    <h4 className="text-2xl font-black uppercase tracking-tight leading-none text-white group-hover:text-sfl-gold transition-colors">
                      SBI Bank Day <br />Industrial Excellence
                    </h4>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-sfl-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Strategic Timeline */}
      <section className="py-32 bg-[#070B14] relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Milestones & <span className="text-sfl-blue">Evolution</span></h2>
              <p className="text-sm text-slate-500 font-medium">A trajectory of growth and industrial transformation.</p>
            </div>
          </ScrollReveal>

          <div className="relative max-w-5xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <ScrollReveal direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.1} key={item.year}>
                  <div className={`relative flex items-center justify-center md:justify-between w-full ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="w-full md:w-[45%]">
                      <div className={`rounded-2xl glass-panel glass-panel-hover p-8 group relative overflow-hidden ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                        {/* Shine sweep */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                        <div className="relative z-10">
                          <div className={`text-2xl font-black text-sfl-blue mb-2 ${i % 2 === 0 ? "justify-end" : "justify-start"} flex items-center gap-2`}>
                             {item.year}
                          </div>
                          <p className="text-sm font-bold text-white/80 leading-relaxed">{item.event}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Circle on line */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#070B14] border-2 border-sfl-blue z-10 hidden md:block" />
                    
                    <div className="hidden md:block w-[45%]" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#070B14]">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal direction="up">
            <div className="glass-panel p-8 sm:p-16 text-center relative overflow-hidden group">
              <div className="absolute inset-0 mesh-gradient opacity-10 group-hover:opacity-20 transition-opacity duration-1000" />
              <div className="relative z-10">
                <Award className="w-16 h-16 text-sfl-blue mx-auto mb-8 animate-pulse" />
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-none">
                  Partner with a <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-sfl-blue via-white to-slate-500">
                    Global Engineering Leader
                  </span>
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Magnetic>
                <a href="/products" className="block sm:inline-block px-6 sm:px-10 py-4 sm:py-5 bg-sfl-blue rounded-xl text-xs font-black uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-[0_0_40px_rgba(25,148,245,0.3)] w-full sm:w-auto text-center">
                      Explore Capabilities
                    </a>
                  </Magnetic>
                  <Magnetic>
                <a href="/contact" className="block sm:inline-block px-6 sm:px-10 py-4 sm:py-5 rounded-xl border border-white/10 text-xs font-black uppercase tracking-[0.2em] hover:bg-white/5 transition-all w-full sm:w-auto text-center">
                      Contact Expertise
                    </a>
                  </Magnetic>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
