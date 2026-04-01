import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Clock, MessageSquare, Send } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { SectionLabel } from "@/components/ui/SectionLabel";

const contactInfo = [
  {
    icon: Phone,
    title: "Direct Access",
    value: "+91 94481 23456",
    sub: "Mon - Sat, 9am - 6pm IST",
    color: "from-blue-500/10 to-cyan-500/10"
  },
  {
    icon: Mail,
    title: "Global Inquiries",
    value: "support@sfpl.com",
    sub: "Response within 24 hours",
    color: "from-purple-500/10 to-pink-500/10"
  },
  {
    icon: MapPin,
    title: "Headquarters",
    value: "Hubballi, Karnataka",
    sub: "25,000 m² Tech Facility",
    color: "from-amber-500/10 to-orange-500/10"
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#070B14] text-white selection:bg-sfl-blue/30 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#070B14]">
        <div className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" />
        
        <div className="container relative z-20 mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <SectionLabel text="Establish Connection" center />
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
              Connect with <br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-sfl-blue to-white">Global Excellence</span>
            </h1>
            <p className="text-base text-slate-400 leading-relaxed font-medium max-w-2xl mx-auto">
              Our engineering experts are ready to discuss your Tier-1 precision requirements. 
              Partner with a leader in automated manufacturing and zero-defect quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, i) => (
              <ScrollReveal direction="up" delay={i * 0.1} key={info.title}>
                <div className="glass-panel p-10 group hover:border-sfl-blue/40 transition-all duration-500 h-full relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-sfl-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <info.icon className="w-7 h-7 text-sfl-blue" />
                    </div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">{info.title}</h3>
                    <div className="text-xl font-black mb-1 group-hover:text-sfl-blue transition-colors">{info.value}</div>
                    <p className="text-sm text-slate-400 font-medium">{info.sub}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Unified Inquiry & Location */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Form */}
            <ScrollReveal direction="left">
              <div className="glass-panel p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <MessageSquare size={120} className="text-sfl-blue" />
                </div>
                
                <h2 className="text-3xl font-black uppercase tracking-tight mb-8">Send Inquiries</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#A5D8FF] ml-1">Full Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-sfl-blue/50 transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-[#A5D8FF] ml-1">Email Address</label>
                      <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-sfl-blue/50 transition-colors" placeholder="john@enterprise.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#A5D8FF] ml-1">Company</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-sfl-blue/50 transition-colors" placeholder="Automotive Corp." />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#A5D8FF] ml-1">Message</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-sfl-blue/50 transition-colors resize-none" placeholder="Describe your industrial requirements..."></textarea>
                  </div>

                  <Magnetic>
                    <button type="submit" className="w-full py-5 bg-sfl-blue rounded-xl text-xs font-black uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-[0_0_40px_rgba(25,148,245,0.3)] flex items-center justify-center gap-3 group">
                      Initialize Consultation
                      <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </Magnetic>
                </form>
              </div>
            </ScrollReveal>

            {/* Industrial Presence */}
            <ScrollReveal direction="right">
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-black uppercase tracking-tight mb-6">Strategic Presence</h2>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed mb-8">
                    Located in Hubballi’s manufacturing corridor, our facility acts as a precision 
                    engineering hub for global supply chains.
                  </p>
                  
                  {/* Map Placeholder */}
                  <div className="aspect-video glass-panel overflow-hidden relative group">
                    <div className="absolute inset-0 bg-slate-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                       <MapPin className="w-12 h-12 text-sfl-blue/20" />
                       <div className="absolute text-[8px] font-black uppercase tracking-widest text-white/20 bottom-4">Hubballi Industrial Zone</div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] to-transparent opacity-60" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-sfl-blue mb-3">Facility Hours</h4>
                    <ul className="text-xs text-slate-400 space-y-2 font-medium">
                      <li className="flex justify-between border-b border-white/5 pb-2"><span>Monday - Saturday</span> <span>09:00 - 21:00</span></li>
                      <li className="flex justify-between border-b border-white/5 pb-2 opacity-50"><span>Sunday</span> <span>Closed</span></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-sfl-blue mb-3">Response Protocol</h4>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed">
                      All technical RFQs are reviewed by our engineering lead within 24 hours of submission.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Global Reach Banner */}
      <section className="py-24 bg-white/5 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full border border-sfl-blue/20 flex items-center justify-center">
                <Globe className="w-8 h-8 text-sfl-blue animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-black uppercase tracking-tight">Supplying Globally</h3>
                <p className="text-xs text-slate-500 font-medium">Tier-1 logistics to Europe, Asia & Americas.</p>
              </div>
            </div>
            <div className="h-[1px] md:h-12 w-full md:w-[1px] bg-white/10 shrink-0" />
            <div className="flex items-center gap-4">
               <div className="w-16 h-16 rounded-full border border-sfl-blue/20 flex items-center justify-center">
                <Clock className="w-8 h-8 text-sfl-blue" />
              </div>
              <div>
                <h3 className="text-xl font-black uppercase tracking-tight">Fast Response</h3>
                <p className="text-xs text-slate-500 font-medium">Instant technical feedback system.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
