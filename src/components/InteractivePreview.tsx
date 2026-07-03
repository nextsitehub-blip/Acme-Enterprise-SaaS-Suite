import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  TrendingUp, Cpu, ShieldCheck, Globe, Database,
  ArrowRight, CornerDownRight, Laptop, Monitor
} from "lucide-react";
import LiveDashboard from "./LiveDashboard";

export default function InteractivePreview() {
  const [activeTab, setActiveTab] = useState("Analytics");

  const previewTabs = [
    { 
      id: "Analytics", 
      label: "Analytics", 
      icon: TrendingUp,
      title: "Parallel Query Analytical Ingestion",
      summary: "Ingest over 12 million events per second with sub-millisecond querying latency. Perfect for parsing massive logs.",
      features: ["Dynamic Ingestion", "Parallel Stream Mapping", "Interactive Datapoint Crosshairs"]
    },
    { 
      id: "Operations", 
      label: "Operations", 
      icon: Cpu,
      title: "Decentralized Virtual Cluster Management",
      summary: "Optimize CPU loads and virtual instances across the global edge network. Fully automated resource allocation.",
      features: ["Live CPU/Memory Tracking", "Dynamic Instance Replication", "Terminal Log Streaming"]
    },
    { 
      id: "Security", 
      label: "Security", 
      icon: ShieldCheck,
      title: "Zero-Trust Threat Radar & Intrusion Mitigation",
      summary: "Ensure deep layer protection. Real-time scanning, network isolation triggers, and continuous token verification.",
      features: ["Layer-7 WAF Rule Tuning", "Token Expiry Handlers", "Cryptographic Node Sharding"]
    },
    { 
      id: "Cloud", 
      label: "Cloud", 
      icon: Globe,
      title: "Global Mesh Route Optimization",
      summary: "Synchronize geographic replication channels and edge routing pipelines. Zero cold-start latency.",
      features: ["Active Rolling Releases", "Pipeline Visualizers", "Geo-routing latency graphs"]
    },
    { 
      id: "Finance", 
      label: "Finance", 
      icon: Database,
      title: "FinOps Allocation & Overhead Minimization",
      summary: "Uncover idle container pools to slash infrastructure overhead. Guaranteed cost optimization metrics.",
      features: ["Active Spend Warnings", "Container Allocation Metrics", "Continuous Resource Shunting"]
    }
  ];

  return (
    <section id="solutions" className="relative py-24 md:py-32 bg-[#050b18]/40 border-y border-white/5 overflow-hidden z-10">
      {/* Mesh overlays */}
      <div className="absolute inset-0 grid-overlay grid-mask opacity-25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-blue-600/5 glowing-orb pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 inline-block"></span>
              <span className="font-mono text-[9px] font-bold tracking-widest text-purple-300 uppercase">
                INTERACTIVE CONSOLE PREVIEW
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Real-time Ingestion & <br />
              Heuristics Dashboard
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] mt-4 leading-relaxed">
              Explore our control panels and live cluster consoles. Toggle between functional tabs to witness real-time metric rendering, network path tracing, and AI recommendation systems in action.
            </p>
          </div>

          {/* Interactive Toggle Pill Deck */}
          <div className="flex flex-wrap gap-2 bg-slate-900/40 p-2 border border-white/8 rounded-2xl max-w-lg">
            {previewTabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold font-sans transition-all relative ${
                    isSelected ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-blue-600 rounded-xl"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Detail Narrative & Monitor Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Narrative - 4 Columns */}
          <div className="lg:col-span-4 space-y-6">
            <AnimatePresence mode="wait">
              {previewTabs.map((tab) => {
                if (tab.id !== activeTab) return null;
                return (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-2">
                        MODULE PREVIEW
                      </span>
                      <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                        {tab.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#94A3B8] mt-3 leading-relaxed">
                        {tab.summary}
                      </p>
                    </div>

                    <div className="space-y-2.5 border-t border-white/5 pt-5">
                      <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 block">
                        KEY TELEMETRY AGENTS
                      </span>
                      {tab.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <CornerDownRight className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <button 
                        onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
                        className="flex items-center gap-2 text-xs font-bold text-white bg-white/5 border border-white/8 hover:bg-white/10 hover:border-white/15 px-4.5 py-3 rounded-xl transition-all cursor-pointer group"
                      >
                        <span>Book Sandbox Demo</span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Interactive Mock Monitor Stand / Canvas - 8 Columns */}
          <div className="lg:col-span-8 flex flex-col items-center">
            {/* Monitor Mockup Wrapper */}
            <div className="w-full relative rounded-2xl border border-white/12 bg-slate-900/10 p-2 shadow-[0_30px_60px_rgba(0,0,0,0.7)] group">
              {/* Internal Monitor frame */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-cyan-400/50 rounded-t-2xl opacity-70" />
              
              <div className="rounded-xl overflow-hidden bg-slate-950 p-[1px]">
                <LiveDashboard activeTab={activeTab} />
              </div>
            </div>

            {/* Monitor Stand Base */}
            <div className="hidden lg:flex flex-col items-center z-10">
              <div className="w-24 h-12 bg-gradient-to-b from-slate-800 to-slate-900 border-x border-white/5" />
              <div className="w-48 h-3 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-b-xl border-b border-x border-white/5 shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
