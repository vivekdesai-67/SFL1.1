import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Users, Target, Award, Shield, Factory, Zap, Timer, Briefcase } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Magnetic } from "@/components/ui/Magnetic";

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
  return (
    <div className="min-h-screen bg-[#070B14] text-white selection:bg-sfl-blue/30 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#070B14]">
        <div className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#070B14] to-transparent z-10" />
        
        <div className="container relative z-20 mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-sfl-gold" />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-sfl-gold">Our Legacy</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
              Pioneering <span className="text-sfl-blue">Precision</span><br /> Since 1989.
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed font-medium opacity-80 max-w-2xl">
              Shree Fasteners Private Limited (SFPL) has evolved from a specialist component manufacturer 
              into a global leader in Tier-1 precision engineering and automated manufacturing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Corporate Dashboard */}
      <section className="py-12 bg-[#070B14] relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal direction="up" staggerChildren={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-panel p-8 text-center group hover:bg-white/5 transition-all duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-sfl-blue/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 text-sfl-blue" />
                  </div>
                  <div className="text-4xl font-black mb-1">{stat.value}</div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-slate-500">{stat.label}</div>
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
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-tight">
                  Uncompromising <br /><span className="text-sfl-blue">Technical Expertise</span>
                </h2>
                <div className="space-y-6 text-slate-400 font-medium leading-relaxed">
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
                  <div key={v.title} className="glass-panel p-6 flex gap-6 items-start hover:border-sfl-blue/40 transition-colors group">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${v.color} flex-shrink-0 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform`}>
                      <v.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
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

      {/* Strategic Timeline */}
      <section className="py-32 bg-[#070B14] relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Milestones & <span className="text-sfl-blue">Evolution</span></h2>
              <p className="text-slate-500 font-medium">A trajectory of growth and industrial transformation.</p>
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
                      <div className={`glass-panel p-8 group hover:bg-white/5 transition-all duration-500 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                        <div className={`text-2xl font-black text-sfl-blue mb-2 ${i % 2 === 0 ? "justify-end" : "justify-start"} flex items-center gap-2`}>
                           {item.year}
                        </div>
                        <p className="text-sm font-bold text-white/80 leading-relaxed">{item.event}</p>
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
            <div className="glass-panel p-16 text-center relative overflow-hidden group">
              <div className="absolute inset-0 mesh-gradient opacity-10 group-hover:opacity-20 transition-opacity duration-1000" />
              <div className="relative z-10">
                <Award className="w-16 h-16 text-sfl-blue mx-auto mb-8 animate-pulse" />
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-none">
                  Partner with a <br />Global Engineering Leader
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Magnetic>
                    <a href="/products" className="px-10 py-5 bg-sfl-blue rounded-xl text-xs font-black uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-[0_0_40px_rgba(25,148,245,0.3)]">
                      Explore Capabilities
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a href="/contact" className="px-10 py-5 rounded-xl border border-white/10 text-xs font-black uppercase tracking-[0.2em] hover:bg-white/5 transition-all">
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
