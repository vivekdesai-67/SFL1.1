import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Mail, Phone, MapPin, Shield } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const steps = [
  { label: "Corporate Details", num: 1 },
  { label: "Project Specifications", num: 2 },
  { label: "Engineering Assets", num: 3 },
];

const RFQ = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    company: "", contact: "", sector: "", email: "", phone: "",
    component: "", volume: "", material: "", tolerance: "", notes: "",
  });

  const update = (key: string, val: string) =>
    setFormData((prev) => ({ ...prev, [key]: val }));

  const handleSubmit = () => {
    toast.success("RFQ submitted successfully. Our engineering team will respond within 24 hours.");
    setStep(1);
    setFormData({ company: "", contact: "", sector: "", email: "", phone: "", component: "", volume: "", material: "", tolerance: "", notes: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 bg-primary text-primary-foreground overflow-hidden">
        {/* Animated Background Graphic */}
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none hidden lg:block">
          <motion.svg
            width="800"
            height="800"
            viewBox="0 0 100 100"
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Documents / Blueprint Shape */}
            <path d="M30 20 L70 20 L80 30 L80 80 L30 80 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M70 20 L70 30 L80 30" fill="none" stroke="currentColor" strokeWidth="1" />
            <line x1="40" y1="40" x2="70" y2="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            <line x1="40" y1="50" x2="60" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            <line x1="40" y1="60" x2="70" y2="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            <rect x="20" y="30" width="50" height="60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />
          </motion.svg>
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-sfl-blue" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-sfl-blue">RFQ Portal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-4">
            Request a Custom<br /><span className="text-sfl-blue">Manufacturing Quote</span>
          </h1>
          <p className="text-sm text-primary-foreground/60 max-w-2xl leading-relaxed">
            Provide your detailed project specifications below, and our senior engineering team 
            will return a comprehensive pricing, manufacturability, and timeline analysis within 24 hours.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            {/* Progress */}
            <div className="flex items-center gap-2 mb-10">
              {steps.map((s) => (
                <div key={s.num} className="flex items-center gap-2 flex-1">
                  <div className={`w-8 h-8 flex items-center justify-center text-xs font-bold ${
                    step >= s.num ? "bg-sfl-blue text-white" : "bg-white/10 text-white/40"
                  }`}>
                    {s.num}
                  </div>
                  <span className={`text-xs font-semibold uppercase tracking-wider hidden sm:block ${
                    step >= s.num ? "text-white" : "text-white/40"
                  }`}>
                    {s.label}
                  </span>
                  {s.num < 3 && <div className="flex-1 h-[2px] bg-white/20 ml-2" />}
                </div>
              ))}
            </div>

            {/* Step 1 */}
            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider block mb-2">Company Name *</label>
                  <Input value={formData.company} onChange={(e) => update("company", e.target.value)} placeholder="Your organization" className="border-border" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider block mb-2">Procurement Lead *</label>
                    <Input value={formData.contact} onChange={(e) => update("contact", e.target.value)} placeholder="Full name" />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider block mb-2">Industry Sector *</label>
                    <Input value={formData.sector} onChange={(e) => update("sector", e.target.value)} placeholder="e.g., Automotive, Appliances" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider block mb-2">Email *</label>
                    <Input type="email" value={formData.email} onChange={(e) => update("email", e.target.value)} placeholder="procurement@company.com" />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider block mb-2">Phone</label>
                    <Input value={formData.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <Button variant="sfl-navy" onClick={() => setStep(2)} className="mt-4">
                  Continue to Specifications →
                </Button>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider block mb-2">Target Component *</label>
                  <Input value={formData.component} onChange={(e) => update("component", e.target.value)} placeholder="e.g., Splined Shaft, Custom Hex Nut" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider block mb-2">Estimated Annual Volume</label>
                    <Input value={formData.volume} onChange={(e) => update("volume", e.target.value)} placeholder="e.g., 50,000 units" />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider block mb-2">Material Grade</label>
                    <Input value={formData.material} onChange={(e) => update("material", e.target.value)} placeholder="e.g., EN8, EN24" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider block mb-2">Tolerance Constraints (mm)</label>
                  <Input value={formData.tolerance} onChange={(e) => update("tolerance", e.target.value)} placeholder="e.g., ±0.01 mm" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider block mb-2">Additional Notes</label>
                  <Textarea value={formData.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Special requirements, surface finish, plating preferences..." rows={4} />
                </div>
                <div className="flex gap-3 mt-4">
                  <Button variant="ghost-industrial" onClick={() => setStep(1)}>← Back</Button>
                  <Button variant="sfl-navy" onClick={() => setStep(3)}>Continue to Upload →</Button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="border-2 border-dashed border-border p-10 text-center hover:border-sfl-navy transition-colors cursor-pointer">
                  <div className="text-muted-foreground mb-3">
                    <span className="text-3xl">📎</span>
                  </div>
                  <p className="text-sm font-semibold mb-1">Drag & Drop CAD Files Here</p>
                  <p className="text-xs text-muted-foreground">
                    Upload 2D/3D CAD Files, Technical Specification Sheets, or Bill of Materials.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Accepts .STP, .IGES, .DWG, and .PDF formats up to 50MB
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="ghost-industrial" onClick={() => setStep(2)}>← Back</Button>
                  <Button variant="sfl-navy" onClick={handleSubmit}>
                    Submit RFQ for Secure Engineering Review
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Trust Panel */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-20 border border-white/10 bg-white/5 backdrop-blur-sm p-6 space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Direct Procurement Support</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Have a highly complex assembly requirement or need immediate DFM feedback? Speak directly with our technical sales engineers.
                </p>
              </div>
              <div className="space-y-3 text-xs">
                <a href="mailto:Sfplapp24@gmail.com" className="flex items-center gap-2 text-white/60 hover:text-sfl-blue transition-colors">
                  <Mail size={14} /> Sfplapp24@gmail.com
                </a>
                <a href="tel:+919343106083" className="flex items-center gap-2 text-white/60 hover:text-sfl-blue transition-colors">
                  <Phone size={14} /> +91 9343106083
                </a>
                <div className="flex items-start gap-2 text-white/60">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <span>B-23, KSSIDC Gamanagatti Industrial Area, Hubli, Karnataka, INDIA - 580021</span>
                </div>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex items-start gap-2">
                  <Shield size={14} className="text-sfl-blue mt-0.5 shrink-0" />
                  <p className="text-[10px] text-muted-foreground leading-relaxed">
                    <span className="font-bold">Absolute Confidentiality:</span> All uploaded 2D/3D CAD drawings, material specifications, 
                    and proprietary data are protected under strict, enterprise-grade Non-Disclosure protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RFQ;
