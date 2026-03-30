import { Link } from "react-router-dom";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight, CircleDot, Wrench, Cog } from "lucide-react";
import { MouseEvent } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const cards = [
  {
    title: "Advanced Shaft Solutions",
    description:
      "From 020 (6P) configurations to high-velocity 4000RPM transmission shafts, delivering absolute dynamic stability for home appliances and automotive powertrains.",
    icon: CircleDot,
    span: "md:col-span-2 md:row-span-2",
    large: true,
    image: "/products/advanced-shaft.png",
  },
  {
    title: "High-Tensile Fasteners",
    description:
      "Superior grade Hex Nuts, U-Bolts, and custom threaded solutions designed for unyielding structural integrity.",
    icon: Wrench,
    span: "md:col-span-1",
    large: false,
    image: "/products/high-tensile-fasteners.png",
  },
  {
    title: "Custom CNC Machining",
    description:
      "Micron-level precision utilizing state-of-the-art controlled turning centers for complex geometries.",
    icon: Cog,
    span: "md:col-span-1",
    large: false,
    image: "/products/cnc-machining.png",
  },
];

function BentoCard({ card }: { card: typeof cards[0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative h-full rounded-2xl glass-panel glass-panel-hover p-6 ${
        card.large ? "lg:p-10" : "lg:p-8"
      } overflow-hidden font-sans`}
      onMouseMove={handleMouseMove}
    >
      {/* Product Image Background */}
      {card.image && (
        <div className="absolute inset-0 z-0 bg-[#070B14]">
          <motion.img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-700 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)] group-hover:[mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/60 to-transparent pointer-events-none" />
        </div>
      )}

      {/* Spotlight Hover Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(25, 148, 245, 0.12),
              transparent 80%
            )
          `,
        }}
      />

      {/* Shine animation on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none z-10" />

      <div className="relative z-20 h-full flex flex-col">
        <div className="flex items-start justify-between mb-8">
          <div className="p-4 bg-white/5 rounded-xl border border-white/10 group-hover:bg-sfl-blue/20 group-hover:border-sfl-blue/50 group-hover:scale-110 transition-all duration-500">
            <card.icon
              className={`text-sfl-blue ${card.large ? "w-8 h-8" : "w-6 h-6"}`}
              strokeWidth={1.5}
            />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-500">
            <ArrowUpRight className="text-white" size={20} />
          </div>
        </div>
        
        <div className="mt-auto">
          <h3
            className={`font-black uppercase tracking-tight text-white mb-4 ${
              card.large ? "text-2xl lg:text-4xl" : "text-xl"
            }`}
          >
            {card.title}
          </h3>
          <p className={`text-slate-400 leading-relaxed font-medium ${card.large ? "text-base lg:text-lg max-w-xl" : "text-sm lg:text-base opacity-70 group-hover:opacity-100 transition-opacity"}`}>
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function BentoGrid() {
  return (
    <section className="bg-[#070B14] py-24 lg:py-40 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full mesh-gradient opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-sfl-blue/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollReveal direction="up" className="flex flex-col items-center text-center mb-20 lg:mb-28">
          <div 
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-sfl-blue/20 bg-sfl-blue/5 backdrop-blur-xl mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-sfl-blue animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-sfl-blue">
              Excellence at Scale
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-none">
            Uncompromising<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sfl-blue via-white to-slate-500">
              Technical Precision
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" staggerChildren={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[320px]">
            {cards.map((card) => (
              <div
                key={card.title}
                className={`${card.span} flex`}
              >
                <Link to="/products" className="w-full h-full block group/link">
                  <BentoCard card={card} />
                </Link>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
