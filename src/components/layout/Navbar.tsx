import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Linkedin, Youtube, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Magnetic } from "@/components/ui/Magnetic";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Our Products", path: "/products" },
  { label: "Infrastructure", path: "/infrastructure" },
  { label: "Quality", path: "/quality" },
  { label: "Contact Us", path: "/contact" },
];

/** Animated SMP-style 3-bar → X icon */
function MenuIcon({ open }: { open: boolean }) {
  return (
    <div className="flex flex-col justify-center items-center gap-[6px] w-6 h-5">
      <span
        className="block h-[2px] bg-current origin-center"
        style={{
          width: "24px",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          transform: open ? "translateY(8px) rotate(45deg)" : "none",
        }}
      />
      <span
        className="block h-[2px] bg-current"
        style={{
          transition: "width 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
          width: open ? "0px" : "16px",
          opacity: open ? 0 : 1,
        }}
      />
      <span
        className="block h-[2px] bg-current origin-center"
        style={{
          width: "24px",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          transform: open ? "translateY(-8px) rotate(-45deg)" : "none",
        }}
      />
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [location]);

  // Close on outside click / Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      {/* ─── Top Navbar (Logo + Desktop CTA Only) ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          scrolled && !menuOpen
            ? "bg-[#070B14]/85 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.35)] border-b border-white/10 py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
          
          {/* Logo (Original Top-Left Position) */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-sfl-blue/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
              <img
                src="/logos/sfl-logo-light.svg"
                alt="Sangam Fasteners Logo"
                className="w-12 h-12 object-contain relative z-10 group-hover:rotate-[360deg] transition-transform duration-1000"
              />
            </div>
            <div className="hidden sm:flex flex-col justify-center gap-[2px]">
              <span className="font-black text-sm tracking-[0.2em] uppercase text-white group-hover:text-sfl-blue transition-colors duration-300 leading-none">
                Sangam Fasteners
              </span>
              <span className="font-bold text-[9px] tracking-[0.3em] uppercase text-white/60 group-hover:text-sfl-blue/80 transition-colors duration-300 leading-none">
                Private Limited
              </span>
            </div>
          </Link>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Desktop right side CTA */}
          <div className={`transition-opacity duration-300 ${menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <Magnetic>
              <Link
                to="/rfq"
                className="hidden lg:flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/60 hover:text-sfl-blue transition-colors group"
              >
                Get a Quote
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Magnetic>
          </div>

        </div>
      </nav>

      {/* ─── Left-Center Fixed Menu Trigger ─── */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[70] flex items-center">
        
        {/* The Trigger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className={`flex flex-col items-center justify-center gap-2 p-4 pt-5 pb-5 rounded-r-2xl border-t border-r border-b backdrop-blur-xl transition-all duration-300 group shadow-2xl ${
            menuOpen
              ? "bg-transparent border-transparent text-white"
              : "bg-[#070B14]/60 border-white/10 text-white hover:bg-[#070B14]/80 hover:border-sfl-blue/30"
          }`}
        >
          <MenuIcon open={menuOpen} />
          <span className="text-[10px] font-black tracking-[0.2em] uppercase transition-colors duration-300 mt-1">
            Menu
          </span>
        </button>
      </div>

      {/* ── Navigation Fullscreen Target GUI ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-[55] bg-[#070B14] overflow-y-auto overflow-x-hidden pt-24 pb-12"
          >
            {/* Massive Watermark Text Background */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black opacity-[0.02] text-white pointer-events-none select-none tracking-tighter">
              Menu
            </div>

            <div className="container mx-auto min-h-full px-8 lg:px-24 flex items-center relative z-10 w-full pl-20 lg:pl-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 w-full">
                
                {/* ── Left Column: Links ── */}
                <div className="flex flex-col gap-6 justify-center lg:py-12">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMenuOpen(false)}
                        className="inline-block text-2xl lg:text-3xl font-semibold text-white/80 hover:text-sfl-blue transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* RFQ explicitly on bottom of links */}
                  <motion.div
                     initial={{ opacity: 0, x: -30 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: navLinks.length * 0.08, duration: 0.4, ease: "easeOut" }}
                     className="mt-6"
                   >
                     <Link
                       to="/rfq"
                       onClick={() => setMenuOpen(false)}
                       className="group inline-flex items-center gap-3 px-6 py-3 bg-sfl-blue text-white rounded-full font-bold text-sm tracking-widest uppercase hover:bg-sfl-blue/90 hover:shadow-[0_0_20px_rgba(25,148,245,0.4)] transition-all"
                     >
                       Request Quote
                       <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                     </Link>
                   </motion.div>
                </div>

                {/* ── Right Column: Info details ── */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="flex flex-col justify-center gap-12 lg:border-l lg:border-white/10 lg:pl-16 relative"
                >
                  
                  {/* Address */}
                  <div>
                    <h3 className="text-xl font-medium text-sfl-blue mb-4">Address</h3>
                    <div className="text-white/70 space-y-2 text-[15px] leading-relaxed relative">
                      <p className="font-semibold text-white">Sangam Fasteners Private Limited</p>
                      <p>Global Industrial Hub,</p>
                      <p>Ahmedabad - 380015</p>
                      <p>Gujarat, INDIA</p>
                    </div>
                  </div>

                  {/* Contact */}
                  <div>
                    <h3 className="text-xl font-medium text-sfl-blue mb-4">Contact</h3>
                    <div className="text-white/70 space-y-3 text-[15px]">
                      <div className="flex sm:items-center flex-col sm:flex-row gap-1 sm:gap-4">
                        <span className="w-36 text-white/50 shrink-0">Customer Care</span>
                        <span className="font-mono">: +91 98765 43210</span>
                      </div>
                      <div className="flex sm:items-center flex-col sm:flex-row gap-1 sm:gap-4">
                        <span className="w-36 text-white/50 shrink-0">Technical Support</span>
                        <span className="font-mono">: +91 98765 43211</span>
                      </div>
                      <div className="flex sm:items-center flex-col sm:flex-row gap-1 sm:gap-4">
                        <span className="w-36 text-white/50 shrink-0">Email</span>
                        <span className="font-mono">: info@sangamfasteners.com</span>
                      </div>
                    </div>
                  </div>

                  {/* Socials */}
                  <div>
                    <h3 className="text-xl font-medium text-sfl-blue mb-4">Follow us</h3>
                    <div className="flex items-center gap-6 text-sfl-blue">
                      <a href="#" className="hover:text-white transition-colors duration-300 hover:scale-110 transform">
                        <Linkedin size={22} />
                      </a>
                      <a href="#" className="hover:text-white transition-colors duration-300 hover:scale-110 transform">
                        <MessageCircle size={22} />
                      </a>
                      <a href="#" className="hover:text-white transition-colors duration-300 hover:scale-110 transform">
                        <Youtube size={24} />
                      </a>
                    </div>
                  </div>

                </motion.div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
