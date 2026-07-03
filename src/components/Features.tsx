import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { 
  Server, TrendingUp, Sparkles, Shield, Layers, Zap, 
  ArrowUpRight, ShieldCheck, Activity, Network, Database, Cpu, CornerDownRight
} from "lucide-react";

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Module 1: Live active node grid state
  const [activeNodes, setActiveNodes] = useState<number[]>([2, 5, 11, 14, 21, 23]);
  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      // Pick random nodes to light up
      const shuffled = Array.from({ length: 25 }, (_, i) => i).sort(() => 0.5 - Math.random());
      setActiveNodes(shuffled.slice(0, 6));
    }, 1500);
    return () => clearInterval(interval);
  }, [isInView]);

  // Module 2: Live latency states
  const [latencyVal, setLatencyVal] = useState(0.84);
  const [latencyHistory, setLatencyHistory] = useState<number[]>([12, 18, 14, 11, 9, 14, 12, 8, 11, 9, 8, 10]);
  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      const nextVal = Number((0.6 + Math.random() * 0.4).toFixed(2));
      setLatencyVal(nextVal);
      setLatencyHistory(prev => [...prev.slice(1), Math.round(nextVal * 12)]);
    }, 2000);
    return () => clearInterval(interval);
  }, [isInView]);

  // Module 3: AI interactive tuner states
  const [aiConfidence, setAiConfidence] = useState(98.4);
  const [aiStatus, setAiStatus] = useState("OPTIMAL_RESERVE");
  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setAiConfidence(Number((97.5 + Math.random() * 1.8).toFixed(1)));
      setAiStatus(Math.random() > 0.5 ? "OPTIMAL_RESERVE" : "TUNING_INGRESS");
    }, 3000);
    return () => clearInterval(interval);
  }, [isInView]);

  // Module 5: Draggable dot coordinates (Spotlight mesh overlay)
  const [hoveredMeshIdx, setHoveredMeshIdx] = useState<number | null>(null);

  // Module 6: Webhook pipeline event indicator
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveWorkflowStep(prev => (prev + 1) % 4);
    }, 1800);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section id="products" ref={containerRef} className="relative py-24 md:py-32 overflow-hidden z-10 bg-[#020617] border-t border-white/5 grid-bg">
      {/* Visual Ticks Overlay at Section Edges */}
      <div className="tech-tick top-4 left-6">+</div>
      <div className="tech-tick top-4 right-6">+</div>
      <div className="tech-tick bottom-4 left-6">+</div>
      <div className="tech-tick bottom-4 right-6">+</div>

      {/* Atmospheric Glow Backdrops */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/5 glowing-orb pointer-events-none blur-[140px]" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/5 glowing-orb pointer-events-none blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* SECTION HEADER - Editorial Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block"></span>
              <span className="font-mono text-[9px] font-bold tracking-widest text-blue-300 uppercase">
                ENGINEERING SPECIFICATION
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              An Asymmetric Architecture <br />
              For Zero-Overhead Ingestion
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-4 leading-relaxed">
              We shunted standard templated layouts. Witness actual interactive modules executing pipeline audits, predictive resource allocation, and zero-trust authentication below.
            </p>
          </div>
          <span className="font-mono text-[10px] text-slate-500 max-w-xs text-left md:text-right hidden lg:block leading-relaxed">
            [SYS_STATUS: ACTIVE]<br />
            [REPLICATION: MULTI-MASTER ACTIVE]<br />
            [DECENTR_GRIDS: OPERATIONAL_OK]
          </span>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* CARD 1: GLOBAL EDGE ROUTING (COL-SPAN 2) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="lg:col-span-2 group relative rounded-2xl border border-white/5 bg-slate-900/10 p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-blue-500/20"
          >
            {/* Top metallic indicator line */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 opacity-30 group-hover:opacity-100 transition-opacity" />

            {/* Inner Bento Visual Representation */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8">
              <div className="md:col-span-7 text-left space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Server className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] tracking-wider text-slate-500 font-extrabold uppercase">
                    MODULE_01 &bull; TELEMETRY AGENT
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  Global Edge Route Mapping
                </h3>
                <p className="font-sans text-xs text-[#94A3B8] leading-relaxed">
                  Decentralized routing clients aggregated dynamically. Bypasses classic middleware proxies to streams metrics into local memory rings with zero cold starts.
                </p>
              </div>

              {/* Dynamic Interactive Node Grid Visual */}
              <div className="md:col-span-5 flex items-center justify-center">
                <div className="bg-[#030712] border border-white/8 rounded-xl p-4.5 w-full max-w-[210px] shadow-inner">
                  <div className="grid grid-cols-5 gap-2.5">
                    {Array.from({ length: 25 }).map((_, idx) => {
                      const isActive = activeNodes.includes(idx);
                      return (
                        <div
                          key={idx}
                          className={`aspect-square rounded-sm border transition-all duration-500 ${
                            isActive 
                              ? "bg-blue-500/20 border-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.5)] scale-105" 
                              : "bg-white/2 border-white/5"
                          }`}
                        />
                      );
                    })}
                  </div>
                  <div className="flex justify-between items-center mt-3 text-[8px] font-mono text-slate-500">
                    <span>ACTIVE PIPES: {activeNodes.length} / 25</span>
                    <span className="text-blue-400 animate-pulse">● ROUTING</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom details */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>INGESTION_SPEED: &lt;1.2ms AVG</span>
              <span className="text-blue-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold">
                Deploy Agent Client <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </motion.div>

          {/* CARD 2: REAL-TIME ANALYTICS OVERVIEW (COL-SPAN 1) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.1 }}
            className="group relative rounded-2xl border border-white/5 bg-slate-900/10 p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-cyan-500/20"
          >
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30 group-hover:opacity-100 transition-opacity" />

            <div className="text-left space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="font-mono text-[10px] tracking-wider text-slate-500 font-extrabold uppercase">
                  MODULE_02 &bull; HIGH-DENSITY
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Sub-ms Query Spans
              </h3>
              <p className="font-sans text-xs text-[#94A3B8] leading-relaxed">
                Engineered for rapid time-series retrieval. Parallelized multi-threaded shunting engines render log query traces instantly.
              </p>
            </div>

            {/* Interactive spark gauge */}
            <div className="bg-[#030712] border border-white/8 rounded-xl p-4 mb-6 text-center shadow-inner flex flex-col justify-between">
              <div className="flex items-end gap-1.5 h-10 justify-center">
                {latencyHistory.map((val, i) => (
                  <div
                    key={i}
                    style={{ height: `${val * 8}%` }}
                    className="w-1.5 bg-gradient-to-t from-cyan-600 to-blue-400 rounded-full transition-all duration-300"
                  />
                ))}
              </div>
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/5">
                <span className="font-mono text-[9px] text-slate-500">PING ROUNDTRIP</span>
                <span className="font-mono text-xs font-bold text-cyan-400">{latencyVal}ms</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>SLA GUARANTEE: 99.99%</span>
              <span className="text-cyan-400 font-bold">Metrics API</span>
            </div>
          </motion.div>

          {/* CARD 3: PREDICTIVE GEMINI CO-PILOT (COL-SPAN 1) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.2 }}
            className="group relative rounded-2xl border border-white/5 bg-slate-900/10 p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-purple-500/20"
          >
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 opacity-30 group-hover:opacity-100 transition-opacity" />

            <div className="text-left space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </div>
                <span className="font-mono text-[10px] tracking-wider text-slate-500 font-extrabold uppercase">
                  MODULE_03 &bull; AI OPTIMIZER
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                Gemini Copilot
              </h3>
              <p className="font-sans text-xs text-[#94A3B8] leading-relaxed">
                Autonomous server shunting, memory allocation forecasts, and resource compaction models mapped in real-time.
              </p>
            </div>

            {/* Interactive AI Tuner Visual */}
            <div className="bg-[#030712] border border-white/8 rounded-xl p-4 mb-6 shadow-inner space-y-3">
              <div className="flex justify-between items-center text-[9px] font-mono">
                <span className="text-slate-400">MODEL REPLICAS</span>
                <span className="text-purple-400 font-bold">{aiStatus}</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full rounded-full transition-all duration-1000"
                  style={{ width: `${aiConfidence}%` }}
                />
              </div>
              <div className="flex justify-between text-[8px] font-mono text-slate-500">
                <span>AUTOTUNE METRIC</span>
                <span>CONFIDENCE: {aiConfidence}%</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>ALERTS DISPATCHED: OK</span>
              <span className="text-purple-400 font-bold">Predict API</span>
            </div>
          </motion.div>

          {/* CARD 4: ZERO-TRUST COMPLIANT SECURITY (COL-SPAN 2) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.3 }}
            className="lg:col-span-2 group relative rounded-2xl border border-white/5 bg-slate-900/10 p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-emerald-500/20"
          >
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-500 opacity-30 group-hover:opacity-100 transition-opacity" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8">
              <div className="md:col-span-7 text-left space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Shield className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] tracking-wider text-slate-500 font-extrabold uppercase">
                    MODULE_04 &bull; COMPLIANCE MESH
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  SOC2 Certified Zero-Trust
                </h3>
                <p className="font-sans text-xs text-[#94A3B8] leading-relaxed">
                  Cryptographically isolated cluster credentials, multi-factor SAML SSO gateway tunnels, and automated, granular temporal user role token audits.
                </p>
              </div>

              {/* Dynamic Interactive scanning visualizer */}
              <div className="md:col-span-5 flex items-center justify-center">
                <div className="bg-[#030712] border border-white/8 rounded-xl p-4.5 w-full max-w-[210px] shadow-inner text-center relative overflow-hidden">
                  <div className="relative w-20 h-20 mx-auto mb-2 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-emerald-500/15 animate-ping" />
                    <div className="absolute inset-2 rounded-full border border-emerald-500/30 animate-pulse" />
                    <ShieldCheck className="w-8 h-8 text-emerald-400 relative z-10" />
                  </div>
                  <span className="block text-[9px] font-mono font-bold text-emerald-400 tracking-wider">
                    DECRYPT: ACTIVE_AES256
                  </span>
                  <span className="block text-[7px] font-mono text-slate-500">
                    GRANTS: OK &bull; EXPIRED: NEVER
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>SAML & OKTA ENABLED</span>
              <span className="text-emerald-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold">
                View Credentials <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </motion.div>

          {/* CARD 5: DYNAMIC CO-ORDINATE HEATMAPS (COL-SPAN 2) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.4 }}
            className="lg:col-span-2 group relative rounded-2xl border border-white/5 bg-slate-900/10 p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-violet-500/20"
          >
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-violet-500 to-purple-500 opacity-30 group-hover:opacity-100 transition-opacity" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8">
              <div className="md:col-span-7 text-left space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] tracking-wider text-slate-500 font-extrabold uppercase">
                    MODULE_05 &bull; USER_SPACE
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white group-hover:text-violet-400 transition-colors">
                  Coordinate Telemetry Heatmaps
                </h3>
                <p className="font-sans text-xs text-[#94A3B8] leading-relaxed">
                  Toggle custom data nodes and cluster clusters across high-dimensional grids. Hover over elements to verify memory parameters and query traces on active heat points.
                </p>
              </div>

              {/* Hoverable heat dot matrix visualizer */}
              <div className="md:col-span-5 flex items-center justify-center">
                <div className="bg-[#030712] border border-white/8 rounded-xl p-4 w-full max-w-[210px] shadow-inner">
                  <span className="block text-[8px] font-mono text-slate-500 mb-2.5 uppercase tracking-wider">
                    HOVER GRID TO HEAT MAP
                  </span>
                  <div className="grid grid-cols-6 gap-2">
                    {Array.from({ length: 24 }).map((_, idx) => (
                      <div
                        key={idx}
                        onMouseEnter={() => setHoveredMeshIdx(idx)}
                        onMouseLeave={() => setHoveredMeshIdx(null)}
                        className={`aspect-square rounded-full transition-colors duration-200 cursor-pointer ${
                          hoveredMeshIdx === idx
                            ? "bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.8)] scale-110"
                            : idx % 3 === 0 
                            ? "bg-violet-900/40" 
                            : idx % 4 === 0 
                            ? "bg-violet-500/10" 
                            : "bg-white/2"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>VISUALIZER: RETINA_GRID</span>
              <span className="text-violet-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold">
                Configure Layouts <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </motion.div>

          {/* CARD 6: WORKFLOW DISPATCH WEBHOOKS (COL-SPAN 1) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.5 }}
            className="group relative rounded-2xl border border-white/5 bg-slate-900/10 p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-amber-500/20"
          >
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-amber-500 to-orange-500 opacity-30 group-hover:opacity-100 transition-opacity" />

            <div className="text-left space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-600/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="font-mono text-[10px] tracking-wider text-slate-500 font-extrabold uppercase">
                  MODULE_06 &bull; AUTOMATION
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                Autonomous Flows
              </h3>
              <p className="font-sans text-xs text-[#94A3B8] leading-relaxed">
                Connect webhooks, configure PagerDuty alerts, and scale idling instances during traffic surges without writing code.
              </p>
            </div>

            {/* Interactive workflow visualizer */}
            <div className="bg-[#030712] border border-white/8 rounded-xl p-4.5 mb-6 shadow-inner flex flex-col gap-2 font-mono text-[8px]">
              {[
                { name: "INGEST_SURGE", label: "Surge Detected" },
                { name: "SHAMP_VPC", label: "Reroute subnets" },
                { name: "UP_REPLICAS", label: "Scale pod container" },
                { name: "ALERT_PAGER", label: "Dispatch PagerDuty" }
              ].map((step, idx) => {
                const isCurrent = activeWorkflowStep === idx;
                return (
                  <div 
                    key={idx}
                    className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md border transition-all duration-300 ${
                      isCurrent 
                        ? "bg-amber-500/15 border-amber-500/40 text-amber-300" 
                        : "bg-white/2 border-white/4 text-slate-500"
                    }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${isCurrent ? "bg-amber-400 animate-pulse" : "bg-slate-700"}`} />
                    <span>0{idx+1} &bull; {step.name}</span>
                    {isCurrent && <span className="ml-auto text-[7px] text-amber-400 font-bold">DISPATCHED</span>}
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>TRIGGERS: ACTIVE</span>
              <span className="text-amber-400 font-bold">Trigger Flow</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
