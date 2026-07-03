import { motion } from "motion/react";
import { ArrowRight, MessageSquare, ShieldCheck, Mail, Globe } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden z-10 border-t border-white/5 bg-[#020617]">
      {/* Heavy mesh grid overlay */}
      <div className="absolute inset-0 grid-overlay grid-mask pointer-events-none opacity-40 z-0" />
      
      {/* Giant central glowing light source */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[550px] rounded-full bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-cyan-500/10 blur-[130px] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10 flex flex-col items-center">
        
        {/* Decorative Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block animate-pulse" />
          <span className="font-mono text-[9px] font-bold tracking-widest text-blue-300 uppercase">
            ENTERPRISE DEPLOYMENT
          </span>
        </motion.div>

        {/* Headline */}
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white max-w-4xl">
          Transform Enterprise Operations <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
            With Acme SaaS Suite
          </span>
        </h2>

        {/* Subtitle */}
        <p className="font-sans text-xs sm:text-sm lg:text-base text-[#94A3B8] max-w-xl mt-6 leading-relaxed">
          Unlock sub-millisecond query indexing and autonomous cost shunting. Get connected with our global operations architects to schedule a custom sandbox review.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <motion.button
            onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
            whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold text-white text-xs flex items-center gap-2.5 shadow-[0_4px_30px_rgba(59,130,246,0.3)] transition-all cursor-pointer"
          >
            <span>Book Enterprise Demo</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          <motion.button
            onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.08)" }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 font-semibold text-slate-200 text-xs flex items-center gap-2.5 transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-slate-400" />
            <span>Talk to Sales</span>
          </motion.button>
        </div>

        {/* Footer badges within CTA */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-12 text-[10px] text-slate-500 font-mono">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> SOC2 COMPLIANT
          </span>
          <span className="flex items-center gap-1.5">
            <Globe className="w-4 h-4 text-blue-400" /> DEPLOYED REGIONS: 65+
          </span>
          <span className="flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-purple-400" /> RESPONSE &lt; 2 HOURS
          </span>
        </div>

      </div>
    </section>
  );
}
