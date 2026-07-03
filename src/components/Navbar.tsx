import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, Shield, Command } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", href: "#products" },
    { name: "Solutions", href: "#solutions" },
    { name: "Enterprise", href: "#enterprise" },
    { name: "Pricing", href: "#pricing" },
    { name: "Resources", href: "#resources" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      {/* Scroll-driven Progress Indicator */}
      <div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 z-[60] origin-left transition-transform duration-75"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <motion.nav
        id="navbar"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#020617]/80 backdrop-blur-md border-b border-white/8 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-500 p-[1px] shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <div className="w-full h-full bg-[#020617] rounded-[11px] flex items-center justify-center transition-all duration-300 group-hover:bg-[#020617]/50">
                <Command className="w-5 h-5 text-blue-400 group-hover:text-white transition-all duration-300 group-hover:scale-110" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300">
                ACME
              </span>
              <span className="font-mono text-[9px] tracking-widest text-[#94A3B8] -mt-1 uppercase">
                Technologies
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div 
            className="hidden lg:flex items-center gap-8 relative"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                className="font-sans text-sm font-medium text-[#94A3B8] hover:text-white transition-colors duration-200 relative group py-1.5"
              >
                {link.name}
                {/* Magnetic Hover Line Indicator using Framer Motion LayoutId */}
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="navbarHoverLine"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors duration-200 px-4 py-2">
              Sign In
            </button>
            <motion.button
              onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 p-[1px] cursor-pointer"
            >
              <div className="w-full h-full bg-slate-950 px-5 py-2.5 rounded-[11px] flex items-center gap-2 group-hover:bg-transparent transition-all duration-300">
                <span className="font-sans text-sm font-semibold text-white">
                  Book Demo
                </span>
                <ArrowRight className="w-4 h-4 text-blue-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" />
              </div>
            </motion.button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center justify-center p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[65px] z-40 bg-[#020617]/95 backdrop-blur-xl lg:hidden flex flex-col justify-between p-6 border-b border-white/5"
          >
            <div className="flex flex-col gap-5 py-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-xl font-bold text-slate-300 hover:text-white hover:pl-2 transition-all duration-200"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-4 pb-12">
              <button className="w-full py-3.5 rounded-xl border border-white/10 bg-white/5 font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
                Sign In
              </button>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.dispatchEvent(new CustomEvent("open-demo-modal"));
                }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 font-semibold text-white flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)] cursor-pointer"
              >
                Book Demo <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
