import React, { useState } from "react";
import { motion } from "motion/react";
import { Check, X, ShieldAlert, Zap, Layers, RefreshCw, ArrowRight } from "lucide-react";

export default function WhyAcme() {
  const comparisonItems = [
    {
      title: "Stream Processing Latency",
      traditional: "80ms - 250ms batch windowing",
      traditionalSuccess: false,
      acme: "<1.2ms continuous parallel ingestion",
      acmeSuccess: true
    },
    {
      title: "AI Co-pilot Insights",
      traditional: "Manual report scraping & query maps",
      traditionalSuccess: false,
      acme: "Autonomous Gemini-powered patch recommendations",
      acmeSuccess: true
    },
    {
      title: "SOC2 Compliance Status",
      traditional: "Self-certified basic audit reviews",
      traditionalSuccess: false,
      acme: "SOC2 Type II accredited & real-time monitoring",
      acmeSuccess: true
    },
    {
      title: "Deploy Configuration",
      traditional: "4-6 weeks of middleware consulting",
      traditionalSuccess: false,
      acme: "<10 minutes with lightweight SDK connection",
      acmeSuccess: true
    },
    {
      title: "Uptime Commitment SLA",
      traditional: "99.9% with scheduled cold-starts",
      traditionalSuccess: false,
      acme: "99.99% active-active geo-replicated SLA",
      acmeSuccess: true
    },
    {
      title: "VPC Overhead Costs",
      traditional: "Up to 30% over-provisioned buffers",
      traditionalSuccess: false,
      acme: "Continuous automatic resource optimization",
      acmeSuccess: true
    }
  ];

  // Hover states for highlights
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const listContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 120, damping: 18 }
    }
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#020617] border-y border-white/5 overflow-hidden z-10 grid-bg">
      {/* Heavy mesh grid and glowing lights */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-blue-600/5 glowing-orb pointer-events-none blur-[100px]" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-purple-600/5 glowing-orb pointer-events-none blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block"></span>
            <span className="font-mono text-[9px] font-bold tracking-widest text-blue-300 uppercase">
              BENCHMARK ADVANTAGES
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
          >
            Engineered to Overcome <br />
            Legacy Cloud Inefficiencies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-[#94A3B8] mt-4 leading-relaxed"
          >
            See how Acme compares directly against traditional middleware databases when scaled to Fortune 500 parallel cluster sizes.
          </motion.p>
        </div>

        {/* Comparison Board Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Legacy Side - 5 Columns */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="lg:col-span-5 rounded-2xl border border-red-500/10 bg-slate-950/25 p-6 md:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-6 text-red-400/80">
                <ShieldAlert className="w-5 h-5 animate-pulse" />
                <span className="font-display text-base font-bold text-slate-300">
                  Legacy Platforms
                </span>
              </div>
              
              <motion.div 
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-5"
              >
                {comparisonItems.map((item, index) => (
                  <motion.div 
                    variants={listItemVariants}
                    key={index} 
                    className="border-b border-white/5 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">
                      {item.title}
                    </span>
                    <div className="flex items-start gap-2 text-xs text-slate-400">
                      <X className="w-4 h-4 text-red-500/50 shrink-0 mt-0.5" />
                      <span>{item.traditional}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 font-mono text-[10px] text-slate-500">
              AVERAGE CONFIG TIMELINE: &gt;14 DAYS
            </div>
          </motion.div>

          {/* Acme Side - 7 Columns */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.15 }}
            whileHover={{ scale: 1.008 }}
            className="lg:col-span-7 rounded-2xl border border-blue-500/25 bg-slate-900/10 p-6 md:p-8 relative overflow-hidden flex flex-col justify-between"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Dynamic Ambient Card Glow Base */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-600/10 via-purple-600/5 to-cyan-500/10 blur-xl opacity-70 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5 text-blue-400">
                  <Zap className="w-5 h-5 fill-blue-400 text-blue-400 animate-bounce" />
                  <span className="font-display text-base font-extrabold text-white">
                    Acme Enterprise SaaS Suite
                  </span>
                </div>
                <span className="font-mono text-[9px] tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-md uppercase font-bold animate-pulse">
                  RECOMMENDED
                </span>
              </div>

              <motion.div 
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
              >
                {comparisonItems.map((item, index) => (
                  <motion.div 
                    variants={listItemVariants}
                    key={index} 
                    onMouseEnter={() => setHoveredIdx(index)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="border-b border-white/5 pb-4 last:border-0 md:last:border-b md:pb-4 group/item cursor-default"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <span className={`block text-[10px] font-mono font-bold uppercase tracking-wider mb-1 transition-colors duration-200 ${
                      hoveredIdx === index ? "text-blue-400" : "text-blue-300"
                    }`}>
                      {item.title}
                    </span>
                    <div className="flex items-start gap-2 text-xs text-slate-200">
                      <motion.div
                        animate={{ scale: hoveredIdx === index ? 1.15 : 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Check className="w-4.5 h-4.5 text-emerald-400 shrink-0 bg-emerald-500/10 rounded-full p-0.5 mt-0.5" />
                      </motion.div>
                      <span className="font-sans font-medium">{item.acme}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 relative z-10 flex flex-wrap items-center justify-between gap-4 text-xs">
              <span className="font-mono text-[10px] text-slate-400">
                CORE LATENCY REDUCTION: <span className="text-emerald-400 font-bold">-98.5%</span>
              </span>
              
              {/* Premium magnetic / interactive button */}
              <motion.button 
                onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
                whileHover={{ scale: 1.05, x: 3 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-1.5 font-bold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer group/btn"
              >
                <span>Book Benchmark Demo</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
