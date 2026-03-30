import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Magnetic } from "@/components/ui/Magnetic";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Infrastructure", path: "/infrastructure" },
  { label: "Products", path: "/products" },
  { label: "Quality", path: "/quality" },
  { label: "Contact", path: "/contact" },
  { label: "RFQ", path: "/rfq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  // The entire site is now dark, so text/logo should remain light always.
  const showLight = true;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#070B14]/70 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] border-b border-white/10 py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-sfl-blue/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
            <img 
              src="/logos/sfl-logo-light.svg" 
              alt="Sangam Fasteners Logo" 
              className="w-12 h-12 object-contain relative z-10 group-hover:rotate-[360deg] transition-transform duration-1000" 
            />
          </div>
          <div className="hidden sm:block">
            <span className="font-black text-sm tracking-[0.2em] uppercase text-white group-hover:text-sfl-blue transition-colors duration-300">
              Sangam Fasteners
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-4">
          {navLinks.map((link) => (
            <Magnetic key={link.path}>
              <Link
                to={link.path}
                className={`relative px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 group ${
                  location.pathname === link.path
                    ? "text-sfl-blue"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-sfl-blue shadow-[0_0_8px_rgba(25,148,245,0.8)]"
                  />
                )}
              </Link>
            </Magnetic>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <Magnetic>
            <Link 
              to="/rfq" 
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-sfl-blue transition-colors group"
            >
              Get a Quote
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Magnetic>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-white hover:text-sfl-blue transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden fixed inset-0 top-0 bg-[#070B14] z-40 flex flex-col items-center justify-center gap-8 overflow-hidden"
          >
            <button 
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={32} />
            </button>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`text-2xl font-black uppercase tracking-widest ${
                    location.pathname === link.path
                      ? "text-sfl-blue"
                      : "text-white/50"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button asChild className="bg-sfl-blue hover:bg-sfl-blue/80 text-white font-black uppercase tracking-widest px-8 py-6 rounded-full">
                <Link to="/rfq">Request Quote</Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
