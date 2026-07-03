import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Eye, Cpu, BarChart2, ShieldAlert, Rocket, 
  ArrowRight, Search, Code, LineChart, TrendingUp, Compass
} from "lucide-react";

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      title: "Discover",
      label: "Cluster Audit",
      description: "Acme agents scanning decentralized cloud clusters to identify under-provisioned storage pools and connection latency bottle-necks.",
      metric: "100% Automatic",
      metricLabel: "Telemetry Scan Rate",
      icon: Eye,
      accent: "text-blue-400",
      bg: "from-blue-500/10 to-blue-500/0"
    },
    {
      step: "02",
      title: "Integrate",
      label: "SDK Connection",
      description: "Embed our highly lightweight TypeScript SDK. Immediate telemetry pipeline starts flowing within minutes, with no reboot required.",
      metric: "< 4 Lines",
      metricLabel: "Code Required",
      icon: Code,
      accent: "text-indigo-400",
      bg: "from-indigo-500/10 to-indigo-500/0"
    },
    {
      step: "03",
      title: "Analyze",
      label: "Heuristics Processing",
      description: "Parallel stream processors compile data logs into luxury analytics. Watch active sparklines, traces, and metrics map out queries.",
      metric: "12M Events/s",
      metricLabel: "Process Ingestion",
      icon: LineChart,
      accent: "text-purple-400",
      bg: "from-purple-500/10 to-purple-500/0"
    },
    {
      step: "04",
      title: "Optimize",
      label: "AI Recommendation",
      description: "Gemini agents pinpoint inefficiencies and present actionable latency resolution scripts. Apply autoscale configurations instantly.",
      metric: "-24% Overhead",
      metricLabel: "Average Cost Saved",
      icon: BarChart2,
      accent: "text-cyan-400",
      bg: "from-cyan-500/10 to-cyan-500/0"
    },
    {
      step: "05",
      title: "Scale",
      label: "Guaranteed SLA",
      description: "Achieve complete multi-cloud active-active database replication. Maintain SOC2 Type II compliance standards seamlessly.",
      metric: "99.99% Uptime",
      metricLabel: "Enterprise SLA",
      icon: Rocket,
      accent: "text-emerald-400",
      bg: "from-emerald-500/10 to-emerald-500/0"
    }
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden z-10 border-t border-white/5 bg-[#020617] grid-bg">
      {/* Technical Layout Plus Coordinates */}
      <div className="tech-tick top-4 left-6">+</div>
      <div className="tech-tick top-4 right-6">+</div>
      <div className="tech-tick bottom-4 left-6">+</div>
      <div className="tech-tick bottom-4 right-6">+</div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block"></span>
              <span className="font-mono text-[9px] font-bold tracking-widest text-cyan-300 uppercase">
                DEPLOYMENT TIMELINE
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Rapid 5-Step System <br />
              Integration Pipeline
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-4 leading-relaxed">
              Transitioning legacy database clusters into consolidated high-density telemetry channels is fully automated. Step through our orchestration sequence.
            </p>
          </div>
          <span className="font-mono text-[10px] text-slate-500 max-w-xs text-left md:text-right hidden lg:block leading-relaxed">
            [PIPELINE_STATUS: SECURE_STANDBY]<br />
            [ORCHESTRATION: V4.0_STABLE]<br />
            [INTEGRATE_TIME: &lt;10_MINS]
          </span>
        </div>

        {/* Timeline Horizontal Line / Interactive nodes */}
        <div className="relative">
          {/* Connector Line behind steps */}
          <div className="absolute top-1/2 left-[5%] right-[5%] h-[2px] bg-slate-800/60 -translate-y-1/2 hidden md:block" />
          
          {/* Active Connector Progress Line with high-end laser drop glow */}
          <div 
            className="absolute top-1/2 left-[5%] h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 -translate-y-1/2 transition-all duration-500 hidden md:block shadow-[0_0_15px_rgba(59,130,246,0.8)]" 
            style={{ width: `${(activeStep / (steps.length - 1)) * 90}%` }}
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((node, index) => {
              const Icon = node.icon;
              const isSelected = activeStep === index;
              return (
                <div
                  key={node.step}
                  onClick={() => setActiveStep(index)}
                  className="flex flex-col items-center cursor-pointer group"
                >
                  {/* Step Bubble */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    animate={{ 
                      borderColor: isSelected ? "#3b82f6" : "rgba(255,255,255,0.08)",
                      boxShadow: isSelected ? "0 0 20px rgba(59, 130, 246, 0.4)" : "none"
                    }}
                    className={`w-14 h-14 rounded-full flex items-center justify-center border-2 bg-slate-950 transition-all duration-300 relative ${
                      isSelected ? "text-blue-400" : "text-slate-500 hover:text-white"
                    }`}
                  >
                    <Icon className="w-5 h-5 relative z-10" />
                    
                    {/* Ripple background ring */}
                    {isSelected && (
                      <span className="absolute -inset-1 rounded-full border border-blue-500/30 animate-pulse pointer-events-none" />
                    )}

                    {/* Step number badge */}
                    <span className="absolute -bottom-1 -right-1 bg-blue-600 font-mono text-[9px] font-bold text-white px-1.5 py-0.2 rounded-full border border-slate-950">
                      {node.step}
                    </span>
                  </motion.div>

                  {/* Node labels */}
                  <h3 className={`font-display text-sm font-bold mt-4 transition-colors duration-200 ${
                    isSelected ? "text-blue-400" : "text-slate-400 group-hover:text-white"
                  }`}>
                    {node.title}
                  </h3>
                  <span className="font-sans text-[11px] text-[#94A3B8] font-medium -mt-0.5">
                    {node.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Step Detail Panel */}
        <div className="mt-12 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {steps.map((node, index) => {
              if (index !== activeStep) return null;
              const Icon = node.icon;
              return (
                <motion.div
                  key={node.step}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl border border-white/8 bg-slate-950/40 p-6 md:p-8 overflow-hidden group"
                >
                  {/* Glass corner glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${node.bg} rounded-full blur-2xl opacity-40`} />

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    {/* Left details */}
                    <div className="md:col-span-8 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-blue-400 font-bold tracking-widest uppercase">
                          PHASE 0{index + 1} &bull; {node.label}
                        </span>
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                        {node.title}: Advanced System Integration
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                        {node.description}
                      </p>
                    </div>

                    {/* Right core telemetry metric box */}
                    <div className="md:col-span-4 border border-white/5 bg-slate-900/40 rounded-xl p-5 text-center relative overflow-hidden group-hover:border-white/10 transition-colors">
                      <span className="text-[10px] font-mono text-slate-400 tracking-wider block uppercase mb-1">
                        {node.metricLabel}
                      </span>
                      <h4 className={`text-xl sm:text-2xl font-display font-extrabold ${node.accent}`}>
                        {node.metric}
                      </h4>
                      <span className="text-[9px] text-[#94A3B8] block mt-1">
                        GUARANTEED ENTERPRISE SPEC
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
