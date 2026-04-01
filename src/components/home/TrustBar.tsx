import { Handshake } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const clients = [
  { name: "Ashok Leyland", src: "/clients/ASHOK LEYLAND.png" },
  { name: "BEML", src: "/clients/BEML LOGO .png" },
  { name: "BHEL", src: "/clients/BHEL.png" },
  { name: "Godrej", src: "/clients/Godrej_Logo.png" },
  { name: "Haier", src: "/clients/Haier_logo.png" },
  { name: "IFB", src: "/clients/IFB LOGO.png" },
  { name: "LG", src: "/clients/LG LOGO.png" },
  { name: "L&T", src: "/clients/Larsen-Toubro-LT-Logo.png" },
  { name: "NTPC", src: "/clients/NTPC LOGO.png" },
  { name: "Samsung", src: "/clients/SAMSUNG.png" },
  { name: "TATA", src: "/clients/TATA.png" },
  { name: "Whirlpool", src: "/clients/Whirlpool_Corporation_Logo.png" },
  { name: "Vestel", src: "/clients/Vestel-logo.png" },
  { name: "Goa Shipyard", src: "/clients/goashipyard_logo.png" },
  { name: "APSRTC", src: "/clients/APSRTC  LOGO.png" },
  { name: "KSRTC", src: "/clients/KSRTC LOGO.png" },
  { name: "NLC India", src: "/clients/NLC_India_Limited.svg.png" },
];

export function TrustBar() {
  const doubled = [...clients, ...clients];

  return (
    <section className="relative py-16 overflow-hidden bg-[#070B14]">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sfl-blue/[0.02] to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <ScrollReveal direction="up">
          <div className="flex flex-col items-center justify-center gap-4">
            <SectionLabel 
              text="Strategic Partnerships" 
              center 
              className="mb-0" 
            />
            <p className="text-sm font-medium tracking-wide text-slate-400 text-center max-w-2xl">
              Powering the global supply chains of industry leaders with uncompromised precision.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="relative group/marquee">
        {/* Left & Right gradient masks for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#070B14] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#070B14] to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-marquee w-max items-center py-4">
          {doubled.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex items-center justify-center mx-10 md:mx-16 group cursor-default transition-transform duration-500 hover:scale-110"
            >
              <div className="relative p-2 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all duration-500">
                <img 
                  src={client.src} 
                  alt={`${client.name} logo`} 
                  className="h-8 md:h-10 w-auto object-contain max-w-[160px] brightness-0 invert opacity-60 group-hover:invert-0 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
