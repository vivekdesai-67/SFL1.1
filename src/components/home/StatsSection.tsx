import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Ruler, IndianRupee, Users, Settings } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const stats = [
  { value: 25000, suffix: " m²", label: "Total Landed Facility Area", icon: Ruler },
  { value: 4800, suffix: " Lacs", label: "Annual Sales Turnover (INR) 2023-24", icon: IndianRupee },
  { value: 100, suffix: "%", label: "OEM Client Retention Rate", icon: Users },
  { value: 51, suffix: "+", label: "Advanced Production Machines", icon: Settings },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-sfl-navy-foreground tracking-tighter">
      {count.toLocaleString()}
      <span className="text-2xl md:text-3xl lg:text-4xl text-sfl-navy-foreground/80 ml-1">{suffix}</span>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="bg-primary text-primary-foreground py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
          <SectionLabel 
            text="Scale" 
            className="mb-4" 
          />
        
        <ScrollReveal direction="up" className="mb-20">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-black uppercase tracking-tighter text-white flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
            <span>Infrastructure Built</span>
            <span className="font-light opacity-50">For Global Scale</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" staggerChildren={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-l-2 border-sfl-navy pl-6"
              >
                <stat.icon className="w-6 h-6 text-sfl-navy mb-5" strokeWidth={1.5} />
                <div className="flex flex-col gap-3">
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                  <p className="text-xs font-body text-primary-foreground/50 uppercase tracking-[0.2em] font-black">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
