import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ShieldAlert, Cpu, Globe, Users, CheckCircle, Zap } from "lucide-react";

export default function Statistics() {
  const stats = [
    {
      id: "uptime",
      value: "99.99%",
      label: "Guaranteed SLA Uptime",
      detail: "Active failovers with automated geo-replication.",
      icon: CheckCircle,
      accent: "text-emerald-400",
      bgGradient: "from-emerald-500/10 to-transparent",
      sparkline: [20, 20, 20, 20, 20, 20, 20, 20, 20, 19.99, 20, 20]
    },
    {
      id: "events",
      value: "12M+",
      label: "Daily Ingested Events",
      detail: "Parallel stream processing across edge clusters.",
      icon: Zap,
      accent: "text-blue-400",
      bgGradient: "from-blue-500/10 to-transparent",
      sparkline: [4, 8, 12, 10, 16, 22, 18, 25, 30, 28, 35, 42]
    },
    {
      id: "clients",
      value: "480+",
      label: "Global Enterprise Clients",
      detail: "Fortune 500 banks, health networks, and retail giants.",
      icon: Users,
      accent: "text-purple-400",
      bgGradient: "from-purple-500/10 to-transparent",
      sparkline: [10, 12, 15, 18, 20, 24, 28, 30, 34, 38, 42, 48]
    },
    {
      id: "countries",
      value: "65+",
      label: "Deployment Regions",
      detail: "Geo-routed latency tunnels optimized globally.",
      icon: Globe,
      accent: "text-cyan-400",
      bgGradient: "from-cyan-500/10 to-transparent",
      sparkline: [5, 8, 12, 18, 22, 25, 32, 38, 44, 52, 60, 65]
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#020617] overflow-hidden z-10 grid-bg border-t border-white/5">
      {/* Decorative Technical Crosshairs */}
      <div className="tech-tick top-4 left-6">+</div>
      <div className="tech-tick top-4 right-6">+</div>
      <div className="tech-tick bottom-4 left-6">+</div>
      <div className="tech-tick bottom-4 right-6">+</div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
              <span className="font-mono text-[9px] font-bold tracking-widest text-emerald-300 uppercase">
                TELEMETRY VOLUME & METRICS
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Verifiable Operational <br />
              Performance At Scale
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-4 leading-relaxed">
              We process high-density telemetry packets across global edge gateways. Inspect the historical stream logs from our primary clusters.
            </p>
          </div>
          <span className="font-mono text-[10px] text-slate-500 max-w-xs text-left md:text-right hidden lg:block leading-relaxed">
            [DATA_INTEGRITY: 100.00%]<br />
            [FAILOVER_STATUS: STABLE_SLA_OK]<br />
            [MONITOR_PING: ACTIVE]
          </span>
        </div>

        {/* Statistics Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: idx * 0.08 }}
                key={stat.id}
                className="relative rounded-2xl border border-white/5 bg-slate-900/20 p-6 md:p-8 hover:border-white/12 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                whileHover={{ y: -5, scale: 1.01 }}
              >
                {/* Background Spark Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-lg bg-slate-800/40 border border-white/5 flex items-center justify-center">
                      <Icon className={`w-4.5 h-4.5 ${stat.accent} group-hover:scale-110 transition-transform`} />
                    </div>
                    {/* Simulated pulse indicator */}
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  {/* Main Value */}
                  <h3 className="font-display text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2">
                    {stat.value}
                  </h3>

                  {/* Label */}
                  <h4 className="font-sans text-xs font-bold text-slate-200 uppercase tracking-wider mb-1">
                    {stat.label}
                  </h4>

                  {/* Small Detail Description */}
                  <p className="font-sans text-[11px] text-[#94A3B8] leading-relaxed">
                    {stat.detail}
                  </p>
                </div>

                {/* Micro sparkline visual inside card */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-3">
                  <div className="flex-1 flex items-end gap-1 h-8">
                    {stat.sparkline.map((val, i) => {
                      const maxVal = Math.max(...stat.sparkline);
                      const heightPercent = (val / maxVal) * 100;
                      return (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${heightPercent}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 120, 
                            damping: 15, 
                            delay: (idx * 0.1) + (i * 0.03) 
                          }}
                          className={`w-full rounded-xs transition-all duration-300 ${
                            stat.id === "uptime" ? "group-hover:bg-emerald-400 bg-emerald-500/45" : 
                            stat.id === "events" ? "group-hover:bg-blue-400 bg-blue-500/45" :
                            stat.id === "clients" ? "group-hover:bg-purple-400 bg-purple-500/45" : "group-hover:bg-cyan-400 bg-cyan-500/45"
                          }`}
                        />
                      );
                    })}
                  </div>
                  <span className="font-mono text-[9px] text-[#94A3B8]/60 shrink-0 uppercase tracking-widest">
                    HISTORICAL
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
