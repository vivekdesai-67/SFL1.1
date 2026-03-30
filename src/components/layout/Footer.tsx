import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/sfl-logo.svg";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="Sangam Fasteners Logo" className="w-9 h-9 brightness-0 invert" />
              <span className="font-extrabold text-sm tracking-widest uppercase">
                Sangam Fasteners
              </span>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              ISO 9001:2015 certified precision engineering enterprise.
              Delivering world-class machined components since 2000.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4">Navigation</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "About Us", path: "/about" },
                { label: "Infrastructure", path: "/infrastructure" },
                { label: "Product Catalog", path: "/products" },
                { label: "Quality & Metrology", path: "/quality" },
                { label: "Request Quote", path: "/rfq" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-primary-foreground/60 hover:text-sfl-navy transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/60">
              <a href="mailto:Sfplapp24@gmail.com" className="flex items-center gap-2 hover:text-sfl-navy transition-colors">
                <Mail size={14} /> Sfplapp24@gmail.com
              </a>
              <a href="tel:+919343106083" className="flex items-center gap-2 hover:text-sfl-navy transition-colors">
                <Phone size={14} /> +91 9343106083
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>B-23, KSSIDC Gamanagatti Industrial Area, Hubli, Karnataka, India - 580021</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4">Certifications</h4>
            <div className="flex flex-col gap-3">
              <div className="border border-primary-foreground/20 p-3">
                <span className="text-xs font-bold tracking-wider">ISO 9001:2015</span>
                <p className="text-xs text-primary-foreground/50 mt-1">
                  Certified by TÜV SÜD
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Sangam Fasteners Private Limited. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Precision Engineered in Hubballi, Karnataka, India.
          </p>
        </div>
      </div>
    </footer>
  );
}
