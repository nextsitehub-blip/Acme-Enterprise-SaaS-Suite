import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle, Database, ShieldAlert, Zap } from "lucide-react";

export default function CaseStudies() {
  const cases = [
    {
      id: "vortex-financial",
      client: "Vortex Financial",
      title: "Optimizing 2.4 Billion Monthly Ledger Queries With Parallel Stream Aggregators",
      metric: "-98.4%",
      metricLabel: "Query Latency Reduction",
      roi: "15x Throughput Improvement",
      description: "How Vortex Financial migrated their high-frequency transactional ledger tables onto Acme parallel pipelines to guarantee SOC2 security while completely bypassing DB queue bottlenecks.",
      tags: ["Fintech", "Ledger Telemetry", "SOC2 Type II"],
      color: "from-blue-600 via-indigo-600 to-purple-600",
      accent: "text-blue-400"
    },
    {
      id: "novasphere-health",
      client: "Novasphere Health",
      title: "Consolidating Decentralized Patient Records Across 42 Hybrid Cluster Pools",
      metric: "$1.2M",
      metricLabel: "Annual Compute Saved",
      roi: "34% Cost Shunting SLA",
      description: "Novasphere implemented Acme autonomous container cost allocation models to automatically prune idle threads, consolidating clinical records without witnessing a single dropped event.",
      tags: ["Healthcare", "Compute Shunting", "Active Ingestion"],
      color: "from-purple-600 via-violet-600 to-pink-500",
      accent: "text-purple-400"
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#020617] overflow-hidden z-10 grid-bg">
      {/* Light orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-blue-600/5 glowing-orb pointer-events-none blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="max-w-3xl mb-20 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block"></span>
            <span className="font-mono text-[9px] font-bold tracking-widest text-cyan-300 uppercase">
              CASE ARCHIVES
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight"
          >
            Proven Operations Impact <br />
            At Fortune 500 Scales
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-[#94A3B8] mt-4 leading-relaxed"
          >
            Discover how global organizations deploy Acme technologies to accelerate telemetry querying, minimize overhead budget leakages, and protect databases.
          </motion.p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((cs, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 80, damping: 15, delay: idx * 0.15 }}
              key={cs.id}
              whileHover={{ 
                y: -6, 
                scale: 1.01,
                borderColor: "rgba(255, 255, 255, 0.15)"
              }}
              className="group relative rounded-3xl border border-white/8 bg-slate-900/10 p-8 md:p-10 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-default"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Background gradient block as abstract visual replacement */}
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gradient-to-tr opacity-5 group-hover:opacity-10 blur-3xl transition-all duration-500 pointer-events-none" />

              <div>
                {/* Client Profile Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <span className="font-mono text-xs font-bold text-[#94A3B8]">
                    {cs.client} &bull; CLIENT BRIEF
                  </span>
                  <div className="flex gap-2">
                    {cs.tags.map((tag) => (
                      <motion.span
                        whileHover={{ scale: 1.05, y: -1 }}
                        key={tag}
                        className="font-mono text-[9px] font-bold text-slate-400 bg-white/5 border border-white/8 px-2 py-0.5 rounded cursor-pointer"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Case Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-blue-400 transition-colors duration-200">
                  {cs.title}
                </h3>

                {/* Case Narrative */}
                <p className="font-sans text-xs sm:text-sm text-[#94A3B8] mt-4 leading-relaxed">
                  {cs.description}
                </p>

                {/* ROI highlights bar with bounce hover */}
                <motion.div 
                  whileHover={{ scale: 1.015 }}
                  className="grid grid-cols-2 gap-4 bg-slate-950/60 p-4 border border-white/5 rounded-xl mt-8 transition-colors group-hover:border-white/10"
                >
                  <div>
                    <span className="block text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                      {cs.metricLabel}
                    </span>
                    <span className="font-display text-2xl font-extrabold text-white">
                      {cs.metric}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                      MEASURED PERFORMANCE
                    </span>
                    <span className={`font-display text-base font-bold ${cs.accent}`}>
                      {cs.roi}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Action row link */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="font-mono text-[10px] text-slate-500 uppercase">
                  PUBLISHED REPORT &bull; 10M READS
                </span>
                
                <motion.button 
                  onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
                  whileHover={{ scale: 1.05, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-1.5 text-blue-400 font-bold hover:text-white transition-colors duration-200 cursor-pointer group/btn"
                >
                  <span>Request Full Case Study</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
