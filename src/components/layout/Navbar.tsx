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
            <div className="relative logo-hex">
              <div className="absolute inset-0 bg-sfl-blue/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
              <svg
                width="80"
                height="80"
                viewBox="0 0 1024 1024"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10"
                role="img"
                aria-label="Sangam Fasteners Logo"
              >
                {/* Hexagon — only this rotates on hover */}
                <g className="hex-spin">
                  <path fillRule="evenodd" clipRule="evenodd" d="M818.854 226.422C847.513 277.795 880.581 337.085 892.492 358.258C904.404 379.43 929.535 424.392 948.271 457.906L982 519.202L977.378 528.463C972.306 538.177 901.75 664.925 800.565 845.478L775.22 890.671L250.526 891.781L246.119 884.725H246.1C243.682 880.749 230.232 856.726 215.902 831.147C201.572 805.801 181.957 770.514 171.801 752.888C161.877 735.244 135.42 688.726 113.37 649.265C91.1052 609.804 65.7599 564.825 56.9288 549.169C43.0476 524.918 41.0564 520.294 43.2589 516.103C44.5854 513.683 56.2648 492.725 69.2685 469.583C105.864 404.991 178.392 276.023 218.749 203.925C238.811 168.208 256.223 137.558 257.549 136.25C259.554 134.048 316.009 133.385 513.499 133.385L766.817 133.17L818.854 226.422ZM512.679 193.895C336.368 193.895 193.441 336.822 193.441 513.133C193.441 689.443 336.368 832.371 512.679 832.371C688.989 832.371 831.917 689.443 831.917 513.133C831.917 336.822 688.989 193.895 512.679 193.895Z" fill="#1994F5"/>
                </g>
                {/* SFL + INDUSTRIES text — stays static */}
                <path d="M601.627 587.883C600.96 587.366 600.456 532.489 600.456 466.08V345.312L606.828 344.11C610.178 343.592 623.086 343.075 635.313 343.075H657.44V441.997V540.918H692.638H727.999L727.495 564.652L726.991 588.219L664.82 588.736C630.629 588.904 602.308 588.568 601.641 587.869L601.627 587.883Z" fill="white"/>
                <path d="M463.111 587.599C462.445 587.081 461.942 531.974 461.942 465.323V344.251H520.295C552.398 344.251 579.829 343.733 581.323 343.215C583.66 342.348 584 344.937 584 366.473V390.751L551.896 391.101L519.629 391.619L519.126 417.115L518.623 442.43H549.722H580.657V465.687V488.944L550.225 489.294L519.629 489.812L519.126 538.033C518.786 573.857 518.284 586.423 516.613 587.459C514.099 589.012 464.605 589.348 463.111 587.627V587.599Z" fill="white"/>
                <path d="M350.92 591.391C320.599 584.508 302.393 565.566 297.848 535.6C296.835 529.403 296 521.485 296 518.043V511.496H322.789H349.414L350.591 521.135C352.439 537.321 356.82 543.001 369.961 546.106C388.66 550.415 401.965 532.844 394.053 514.42C390.179 505.466 385.457 501.507 362.541 488.077C339.462 474.647 326.992 465.862 318.231 456.908C290.935 428.845 293.632 377.881 323.953 354.462C337.943 343.788 347.539 340.683 371.124 339.661C394.368 338.794 406.004 341.214 419.473 349.986C436.995 361.527 445.592 377.713 447.098 403.538L448.11 418.521H421.664H395.381V410.771C395.381 401.467 392.178 393.214 386.962 388.387C384.266 385.799 380.898 384.946 373.985 384.946C365.731 384.946 364.212 385.463 359.831 390.626C355.957 394.934 354.944 397.858 354.944 403.706C354.944 417.654 360.844 423.165 402.28 447.787C439.514 469.821 450.971 486.706 450.971 519.246C450.971 563.845 423.676 591.391 377.681 593.461C367.907 593.811 358.312 593.111 350.892 591.391H350.92Z" fill="white"/>
                <path d="M700.679 682.739C696.324 681.933 690.521 679.916 688.025 678.226L686.172 677.099L688.432 672.586C690.848 667.589 690.449 667.668 698.269 670.569C703.751 672.587 711.329 672.829 713.104 670.975C716.248 667.91 713.831 665.899 703.915 663.397C691.34 660.253 687.226 656.225 687.953 647.678C688.68 639.131 694.163 635.345 706.653 634.618C714.473 634.133 720.276 635.26 724.71 638.083L726.485 639.294L724.389 643.486C723.178 645.746 722.13 647.757 722.051 647.92C721.973 647.999 719.471 647.357 716.569 646.388C712.135 644.934 710.524 644.776 706.574 645.34C702.625 645.982 701.898 646.309 701.655 647.842C701.334 650.259 703.673 651.549 712.377 653.645C724.632 656.625 728.581 660.496 727.933 669.043C727.527 674.768 725.431 677.748 719.628 681.055C715.842 683.23 714.467 683.557 709.79 683.472C706.725 683.393 702.697 683.066 700.679 682.745V682.739Z" fill="white"/>
                <path d="M644.248 658.963V635.181H662.705C678.745 635.181 681.247 635.345 681.647 636.471C682.374 638.246 682.21 645.661 681.568 645.661C681.162 645.661 676.008 645.824 670.041 645.903C664.074 646.067 658.677 646.388 658.107 646.709C657.623 647.115 657.138 648.641 657.138 650.095V652.833L667.86 653.075L678.503 653.317L678.745 658.393L678.988 663.391H668.993C657.786 663.391 656.823 663.797 657.302 668.388L657.544 671.047L669.877 671.29L682.132 671.532V677.093V682.739H663.19H644.248V658.957V658.963Z" fill="white"/>
                <path d="M621.678 658.963V635.181H628.529H635.38L635.217 658.799L634.974 682.339L628.366 682.581L621.672 682.823V658.963H621.678Z" fill="white"/>
                <path d="M571.697 658.963V635.181H585.727C601.125 635.181 604.911 635.908 609.024 639.857C612.653 643.243 613.858 646.387 613.943 651.706C613.943 657.266 611.683 662.106 607.898 664.923L605.559 666.698L610.236 673.713C612.816 677.583 615.233 681.212 615.554 681.775C615.96 682.502 614.428 682.745 608.625 682.745H601.125L596.855 676.293L592.663 669.842H589.034H585.484L585.242 676.129L585 682.339L578.391 682.581L571.697 682.823V658.963ZM599.023 656.461C601.282 653.559 601.197 650.415 598.702 648.077C597.012 646.466 596.2 646.302 591.929 646.708C589.27 646.95 586.768 647.35 586.283 647.678C585.799 647.92 585.399 650.5 585.399 653.402V658.563H591.366C596.927 658.563 597.49 658.399 599.023 656.467V656.461Z" fill="white"/>
                <path d="M537.842 664.602V646.466H530.585H523.328V640.82V635.174L544.53 635.338L565.652 635.58L565.895 641.062L566.137 646.466H558.801C552.435 646.466 551.544 646.63 551.466 647.92C551.387 648.647 551.302 656.71 551.223 665.814L551.145 682.339L544.536 682.581L537.842 682.823V664.602Z" fill="white"/>
                <path d="M491.411 682.417C488.673 681.775 484.638 680.321 482.385 679.195L478.193 677.099L480.453 672.586C482.87 667.51 482.955 667.51 491.096 670.569C496.172 672.422 503.03 672.743 505.126 671.21C506.01 670.569 506.495 669.357 506.252 668.145C506.089 666.691 505.283 665.971 502.788 665.244C501.013 664.759 496.984 663.554 493.841 662.663C486.263 660.489 483.04 658.15 481.101 653.552C478.442 647.186 481.101 640.571 487.795 636.864C493.035 633.962 504.883 633.478 511.656 635.894C518.749 638.396 519.07 638.875 516.411 644.2L514.236 648.712L510.608 647.022C505.29 644.684 497.148 644.199 495.131 646.053C491.581 649.276 493.762 651.05 504.32 653.631C512.782 655.727 515.206 656.854 517.944 660.161C520.446 663.063 521.33 667.012 520.524 671.204C519.797 675.153 514.4 680.636 510.045 681.847C504.805 683.38 496.742 683.622 491.424 682.41L491.411 682.417Z" fill="white"/>
                <path d="M443.526 682.417C436.111 680.485 431.029 675.887 428.612 669.115C427.728 666.456 427.4 661.943 427.4 650.415V635.181H434.251H441.102V649.531C441.102 661.543 441.345 664.281 442.556 666.619C444.816 671.296 449.971 672.743 454.89 670.169C459.003 668.073 459.645 665.172 459.645 649.289V635.181H466.574H473.504L473.183 651.542C472.862 669.521 472.299 671.859 467.458 676.935C461.734 682.98 452.866 684.998 443.519 682.417H443.526Z" fill="white"/>
                <path d="M373.389 658.877V635.017L388.945 635.338C403.937 635.58 404.586 635.658 408.45 637.754C416.67 642.11 420.862 648.876 420.947 657.829C420.947 660.731 420.305 664.844 419.578 667.018C417.888 672.016 412 678.061 406.275 680.72C402.247 682.574 401.199 682.738 387.733 682.738H373.383V658.877H373.389ZM401.363 669.357C409.183 663.554 409.262 652.832 401.442 648.077C399.424 646.865 397.329 646.465 392.98 646.465H387.098V659.041V671.616L393.065 671.295C397.577 671.132 399.673 670.568 401.37 669.363L401.363 669.357Z" fill="white"/>
                <path d="M319.141 682.175C318.977 681.769 318.735 671.132 318.656 658.393L318.414 635.174H324.866H331.232L340.421 646.623C345.497 652.911 350.174 658.229 350.737 658.393C351.706 658.714 351.785 656.86 351.379 646.944L350.815 635.174H357.666H364.517V658.956V682.738H358.957C353.475 682.738 353.396 682.66 351.136 679.758C346.218 673.228 333.642 658.557 333 658.557C332.594 658.557 332.273 664.039 332.273 670.648V682.738H325.907C322.357 682.738 319.298 682.496 319.135 682.175H319.141Z" fill="white"/>
                <path d="M296.007 658.963V635.181H302.858H309.709L309.545 658.799L309.302 682.339L302.694 682.581L296 682.823V658.963H296.007Z" fill="white"/>
              </svg>
            </div>
            <div className="hidden sm:flex flex-col justify-center gap-[2px]">
              <span className="font-black text-lg tracking-[0.2em] uppercase text-white group-hover:text-sfl-blue transition-colors duration-300 leading-none">
                Sangam Fasteners
              </span>
              <span className="font-bold text-[13px] tracking-[0.3em] uppercase text-white/60 group-hover:text-sfl-blue/80 transition-colors duration-300 leading-none">
                Private Limited
              </span>
            </div>
          </Link>

          {/* Spacer */}
          <div className="flex-1" />


            {/* Top-Right Menu Trigger — prominent & highlighted */}
            <div className="ml-4">
              <Magnetic>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={menuOpen}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full border-2 transition-all duration-300 group ${
                    menuOpen
                      ? "bg-white/15 border-white/30 text-white shadow-[0_0_20px_rgba(25,148,245,0.2)]"
                      : "bg-sfl-blue/10 border-sfl-blue/40 text-white hover:bg-sfl-blue/20 hover:border-sfl-blue/70 hover:shadow-[0_0_24px_rgba(25,148,245,0.3)]"
                  }`}
                >
                  <div className="relative h-[14px] w-14 overflow-hidden flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={menuOpen ? "close" : "menu"}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute text-xs font-black tracking-[0.25em] uppercase"
                      >
                        {menuOpen ? "Close" : "Menu"}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <MenuIcon open={menuOpen} />
                </button>
              </Magnetic>
            </div>

          </div>
      </nav>


      {/* ── Navigation Fullscreen Target GUI ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 94% 6%)" }}
            animate={{ clipPath: "circle(150% at 94% 6%)" }}
            exit={{ clipPath: "circle(0% at 94% 6%)" }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
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
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: 0.2 + (i * 0.08), 
                        duration: 0.6, 
                        ease: [0.33, 1, 0.68, 1] 
                      }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMenuOpen(false)}
                        className="inline-block text-4xl lg:text-5xl font-black text-white/80 hover:text-sfl-blue transition-all duration-300 hover:translate-x-4 tracking-tighter"
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
