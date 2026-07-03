import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, Play, Server, Shield, CheckCircle, Cpu, 
  Layers, Globe, Activity, Sparkles, Database, Network, Zap, TrendingUp, Terminal 
} from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax tracking states
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [activeMetric, setActiveMetric] = useState("traffic");

  // Real-time server status states
  const [globalInflow, setGlobalInflow] = useState(849.2);
  const [latency, setLatency] = useState(14.2);
  const [cpuIdle, setCpuIdle] = useState(34.8);
  const [activeNodes, setActiveNodes] = useState(128);
  const [savedCost, setSavedCost] = useState(4821.40);

  // AI Insights dynamic text simulator
  const aiInsights = [
    { text: "AI downscaled 4 idling replicas in eu-west-1", cost: "$142.10 saved", code: "ACME-OPT-09" },
    { text: "Rerouted VPC transit ingress through cloud-flare edge", cost: "Latency -12ms", code: "ACME-ROUTE-42" },
    { text: "Compacted primary database logs & enabled serverless cache", cost: "$340.50 saved", code: "ACME-CACHE-77" },
    { text: "Auto-tuned cluster pool-size based on traffic prediction", cost: "Cost -15%", code: "ACME-SCALE-03" }
  ];
  const [currentInsightIdx, setCurrentInsightIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIdx, setCharIdx] = useState(0);

  // Interval timers for live metrics simulation
  useEffect(() => {
    const metricInterval = setInterval(() => {
      setGlobalInflow(prev => Math.max(800, Math.min(950, Number((prev + (Math.random() * 10 - 5)).toFixed(1)))));
      setLatency(prev => Math.max(10, Math.min(22, Number((prev + (Math.random() * 2 - 1)).toFixed(1)))));
      setCpuIdle(prev => Math.max(25, Math.min(55, Number((prev + (Math.random() * 4 - 2)).toFixed(1)))));
      setActiveNodes(prev => prev + (Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0));
      setSavedCost(prev => Number((prev + Math.random() * 0.15).toFixed(2)));
    }, 2000);

    return () => clearInterval(metricInterval);
  }, []);

  // typewriter effect for AI Insights
  useEffect(() => {
    const fullText = aiInsights[currentInsightIdx].text;
    if (charIdx < fullText.length) {
      const typingTimer = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[charIdx]);
        setCharIdx(prev => prev + 1);
      }, 40);
      return () => clearTimeout(typingTimer);
    } else {
      // Pause, then cycle to next insight
      const cycleTimer = setTimeout(() => {
        setCharIdx(0);
        setDisplayedText("");
        setCurrentInsightIdx(prev => (prev + 1) % aiInsights.length);
      }, 4000);
      return () => clearTimeout(cycleTimer);
    }
  }, [charIdx, currentInsightIdx]);

  // Handle Mouse Move for Parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Normalize coordinates from -0.5 to 0.5
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  // SVG Chart Data Generator
  const points = [
    { x: 0, y: 120 }, { x: 50, y: 100 }, { x: 100, y: 140 }, 
    { x: 150, y: 80 }, { x: 200, y: 110 }, { x: 250, y: 50 }, 
    { x: 300, y: 90 }, { x: 350, y: 40 }, { x: 400, y: 60 }
  ];
  const chartPath = points.map(p => `${p.x},${p.y}`).join(" ");
  const fillPath = `0,180 ${chartPath} 400,180 Z`;

  return (
    <section 
      id="hero" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-32 pb-24 md:pt-40 md:pb-36 flex flex-col items-center justify-center overflow-hidden bg-[#020617] grid-bg"
    >
      {/* Styles for custom keyframe animations */}
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { opacity: 0.3; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        @keyframes flow-line {
          0% { stroke-dashoffset: 80; }
          100% { stroke-dashoffset: 0; }
        }
        .glowing-pulse-ring {
          animation: pulse-ring 2.5s cubic-bezier(0.215, 0.610, 0.355, 1) infinite;
        }
        .animate-flow-dash {
          stroke-dasharray: 10, 20;
          animation: flow-line 4s linear infinite;
        }
        .text-glow-hover:hover {
          text-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
        }
      `}</style>

      {/* Cinematic Lighting Glares */}
      <div className="absolute top-[5%] left-[10%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-blue-600/10 to-indigo-600/5 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[10%] w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-purple-600/10 to-cyan-500/5 blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-blue-500/5 blur-[180px] pointer-events-none z-0" />

      {/* Cosmic Horizon Glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent pointer-events-none z-10" />

      <div className="relative max-w-7xl w-full mx-auto px-6 md:px-12 z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT COLUMN: Deeply Polished Copy & Premium Call-To-Action */}
        <div className="lg:col-span-5 flex flex-col text-left">
          
          {/* Micro-Capsule Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/20 backdrop-blur-xl w-fit mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 glowing-pulse-ring"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="font-mono text-[10px] font-extrabold tracking-widest text-blue-300 uppercase">
              V4.0 PLATFORM IS ACTIVE
            </span>
            <span className="w-px h-3 bg-white/10" />
            <span className="font-mono text-[10px] text-slate-400 font-semibold">
              {latency}ms Avg Ingestion
            </span>
          </motion.div>

          {/* Headline with metallic shine gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-white"
          >
            Unified Cloud <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-cyan-400 drop-shadow-[0_2px_10px_rgba(59,130,246,0.15)]">
              Operations
            </span> <br />
            at Infinite Scale.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="font-sans text-base sm:text-lg text-slate-400 mt-6 leading-relaxed max-w-lg"
          >
            Combine high-density server telemetry, dynamic edge ingestion, and predictive AI insights into a secure, zero-overhead cloud workspace designed for high-velocity teams.
          </motion.p>

          {/* Premium CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mt-8"
          >
            <motion.button
              onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 0 35px rgba(59, 130, 246, 0.4)",
                borderColor: "rgba(255,255,255,0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              className="px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 font-semibold text-white text-sm flex items-center gap-2.5 shadow-[0_4px_30px_rgba(59,130,246,0.25)] border border-white/5 transition-all cursor-pointer relative overflow-hidden group"
            >
              {/* Button light sweep effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              Book Enterprise Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>

            <motion.button
              onClick={() => document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.98 }}
              className="px-7 py-4 rounded-xl border border-white/10 bg-white/5 font-semibold text-[#f8fafc] text-sm flex items-center gap-2.5 transition-all cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-white text-white" />
              Watch Live Tour
            </motion.button>
          </motion.div>

          {/* Multi-Trust badges below CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 border-t border-white/5 mt-12 pt-8 text-xs text-slate-500"
          >
            <div>
              <span className="block text-[10px] font-mono tracking-wider text-slate-600 uppercase">SECURITY STATUS</span>
              <span className="font-semibold text-slate-300 flex items-center gap-1.5 mt-1">
                <Shield className="w-3.5 h-3.5 text-blue-500" /> SOC2 Type II Certified
              </span>
            </div>
            <div>
              <span className="block text-[10px] font-mono tracking-wider text-slate-600 uppercase">UPTIME GUARANTEE</span>
              <span className="font-semibold text-slate-300 flex items-center gap-1.5 mt-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> 99.99% Enterprise SLA
              </span>
            </div>
            <div>
              <span className="block text-[10px] font-mono tracking-wider text-slate-600 uppercase">ORCHESTRATION</span>
              <span className="font-semibold text-slate-300 flex items-center gap-1.5 mt-1">
                <Server className="w-3.5 h-3.5 text-cyan-400" /> Multi-Cloud Active
              </span>
            </div>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: Layered Floating Glass Dashboard Workspace */}
        <div className="lg:col-span-7 relative h-[560px] md:h-[620px] flex items-center justify-center w-full">
          
          {/* Main Layout Rotator with Mouse Parallax */}
          <div 
            className="relative w-full h-full flex items-center justify-center transition-all duration-300 ease-out"
            style={{
              perspective: 1200,
              transformStyle: "preserve-3d"
            }}
          >
            {/* BACKGROUND LAYER (Deepest): Dynamic Network Topology */}
            <div 
              className="absolute w-[110%] h-[110%] opacity-40 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(${mousePosition.x * -12}px) translateY(${mousePosition.y * -12}px) translateZ(-50px)`,
                transformStyle: "preserve-3d"
              }}
            >
              {/* Complex topology map */}
              <svg viewBox="0 0 800 600" className="w-full h-full text-blue-500/20 fill-none">
                <defs>
                  <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Grid Connection Paths */}
                <path d="M100 150 Q 250 100 400 150 T 700 200" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1.5" />
                <path d="M150 450 Q 350 500 500 350 T 750 250" stroke="rgba(147, 51, 234, 0.12)" strokeWidth="1.5" />
                <path d="M100 150 L 150 450" stroke="rgba(6, 182, 212, 0.1)" strokeWidth="1" />
                <path d="M400 150 L 500 350" stroke="rgba(147, 51, 234, 0.15)" strokeWidth="1" />
                
                {/* Moving Signal Pulse Lines */}
                <path d="M100 150 Q 250 100 400 150 T 700 200" stroke="#3b82f6" strokeWidth="2" className="animate-flow-dash opacity-60" />
                <path d="M150 450 Q 350 500 500 350 T 750 250" stroke="#a855f7" strokeWidth="2" className="animate-flow-dash opacity-40" />

                {/* Server Intersections */}
                <circle cx="100" cy="150" r="14" fill="url(#nodeGlow)" />
                <circle cx="100" cy="150" r="5" fill="#3b82f6" />
                <circle cx="400" cy="150" r="18" fill="url(#nodeGlow)" />
                <circle cx="400" cy="150" r="6" fill="#60a5fa" />
                <circle cx="700" cy="200" r="14" fill="url(#nodeGlow)" />
                <circle cx="700" cy="200" r="5" fill="#3b82f6" />

                <circle cx="150" cy="450" r="16" fill="url(#nodeGlow)" />
                <circle cx="150" cy="450" r="5" fill="#a855f7" />
                <circle cx="500" cy="350" r="22" fill="url(#nodeGlow)" />
                <circle cx="500" cy="350" r="7" fill="#c084fc" />
                <circle cx="750" cy="250" r="14" fill="url(#nodeGlow)" />
                <circle cx="750" cy="250" r="5" fill="#22c55e" />
              </svg>
            </div>

            {/* MAIN DASHBOARD GLASS PANEL: Centerpiece Operational Terminal */}
            <div 
              className="absolute w-[95%] md:w-[540px] h-[360px] glass rounded-2xl border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.8)] overflow-hidden transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(${mousePosition.x * -25}px) translateY(${mousePosition.y * -25}px) rotateY(${mousePosition.x * 8}deg) rotateX(${mousePosition.y * -8}deg) translateZ(0px)`,
                transformStyle: "preserve-3d"
              }}
            >
              {/* OS Browser Bar */}
              <div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                </div>
                <div className="h-5 w-44 bg-white/5 rounded-full border border-white/5 flex items-center justify-center">
                  <Globe className="w-3 h-3 text-slate-500 mr-1.5" />
                  <span className="text-[9px] font-mono text-slate-400">console.acme.cloud</span>
                </div>
                <div className="w-6" />
              </div>

              {/* Inside Dashboard Layout */}
              <div className="p-5 grid grid-cols-12 gap-4 h-[calc(100%-40px)]">
                
                {/* Real-time telemetry chart - spanning top */}
                <div className="col-span-12 h-36 relative rounded-xl border border-blue-500/10 bg-blue-500/[0.02] p-3 flex flex-col justify-between overflow-hidden">
                  
                  {/* Subtle watermarked code */}
                  <span className="absolute top-2 right-3 font-mono text-[8px] text-blue-500/20">GRID_ROUTE_MAP</span>
                  
                  <div className="flex justify-between items-start z-10">
                    <div>
                      <span className="text-[10px] font-mono tracking-wider text-blue-400 uppercase font-semibold">
                        INFLOW STREAM RATE
                      </span>
                      <h4 className="text-2xl font-bold font-mono tracking-tight text-white mt-1">
                        {globalInflow} <span className="text-xs text-slate-400">Gb/s</span>
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold border border-emerald-500/20">
                        <Activity className="w-3 h-3 animate-pulse" /> Live Feed
                      </span>
                    </div>
                  </div>

                  {/* Gradient Area Chart */}
                  <div className="absolute inset-x-0 bottom-0 h-20 w-full opacity-60">
                    <svg className="w-full h-full" viewBox="0 0 400 180" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d={fillPath} fill="url(#chartGrad)" />
                      <polyline fill="none" stroke="#60a5fa" strokeWidth="2.5" points={chartPath} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Left Telemetry Card */}
                <div className="col-span-6 rounded-xl border border-white/5 bg-white/[0.02] p-3 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono tracking-wider text-slate-500 uppercase font-bold block">
                      TOTAL NODES
                    </span>
                    <span className="text-lg font-bold font-mono text-slate-200 mt-1 block">
                      {activeNodes}
                    </span>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Server className="w-4 h-4 text-blue-400" />
                  </div>
                </div>

                {/* Right Telemetry Card */}
                <div className="col-span-6 rounded-xl border border-white/5 bg-white/[0.02] p-3 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono tracking-wider text-slate-500 uppercase font-bold block">
                      CPU METRIC (IDLE)
                    </span>
                    <span className="text-lg font-bold font-mono text-emerald-400 mt-1 block">
                      {cpuIdle}%
                    </span>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>

              </div>
            </div>

            {/* FOREGROUND LAYER (Left): Mini-Metric KPI Cluster */}
            <div 
              className="absolute top-20 -left-6 w-48 h-44 glass rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] p-4 flex flex-col justify-between hidden md:flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(${mousePosition.x * -35}px) translateY(${mousePosition.y * -35}px) rotateY(${mousePosition.x * 12}deg) rotateX(${mousePosition.y * -12}deg) translateZ(40px)`,
                transformStyle: "preserve-3d"
              }}
            >
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono tracking-wider text-slate-400 font-bold">
                  COST EFFICIENCY
                </span>
                <span className="status-dot pulse-green" />
              </div>
              <div>
                <span className="text-3xl font-extrabold text-blue-400 font-mono tracking-tight">88%</span>
                <span className="text-[10px] text-slate-500 block mt-1">Multi-Cloud Optimizations</span>
              </div>
              <div className="border-t border-white/5 pt-3 mt-2">
                <div className="flex justify-between text-[9px] font-mono text-slate-400">
                  <span>SAVED TODAY</span>
                  <span className="text-emerald-400 font-bold">${savedCost.toFixed(2)}</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full w-[88%] rounded-full" />
                </div>
              </div>
            </div>

            {/* FOREGROUND LAYER (Right): Interactive AI Insights Copilot */}
            <div 
              className="absolute bottom-16 -right-12 w-80 glass rounded-2xl border border-indigo-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.8)] p-4 hidden md:flex flex-col gap-3 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(${mousePosition.x * -40}px) translateY(${mousePosition.y * -40}px) rotateY(${mousePosition.x * 16}deg) rotateX(${mousePosition.y * -16}deg) translateZ(70px)`,
                transformStyle: "preserve-3d"
              }}
            >
              <div className="flex items-center justify-between border-b border-indigo-500/10 pb-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
                  </div>
                  <span className="text-xs font-bold text-slate-100">AI Predictive Optimizer</span>
                </div>
                <span className="font-mono text-[9px] text-indigo-400 font-bold tracking-wider">
                  {aiInsights[currentInsightIdx].code}
                </span>
              </div>

              {/* simulated output */}
              <div className="min-h-12 flex flex-col justify-center">
                <p className="text-xs text-slate-300 font-sans leading-relaxed flex items-start gap-1.5">
                  <span className="text-indigo-400 font-mono mt-0.5">{">"}</span>
                  <span>{displayedText}</span>
                  <span className="w-1.5 h-4 bg-indigo-500 animate-pulse inline-block self-center ml-0.5" />
                </p>
              </div>

              {/* telemetry highlight */}
              <div className="flex justify-between items-center bg-indigo-500/5 border border-indigo-500/10 rounded-lg px-2.5 py-1.5 text-[10px] font-mono">
                <span className="text-indigo-300">ESTIMATED IMPACT:</span>
                <span className="text-emerald-400 font-bold">{aiInsights[currentInsightIdx].cost}</span>
              </div>
            </div>

            {/* FLOATING LIGHT RING: Focus Beam following layout */}
            <div 
              className="absolute inset-0 pointer-events-none border border-blue-500/10 rounded-3xl -m-6 transition-all duration-300 opacity-60"
              style={{
                transform: `translateX(${mousePosition.x * -10}px) translateY(${mousePosition.y * -10}px) scale(0.98)`,
                filter: isHovered ? "blur(4px)" : "none"
              }}
            />

          </div>
        </div>

      </div>

      {/* Brand logo bar at the bottom of the section */}
      <div className="absolute bottom-0 inset-x-0 h-16 border-t border-white/5 bg-[#020617]/50 flex items-center justify-center z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
            POWERING BILLION DOLLAR SYSTEMS GLOBAL:
          </span>
          <div className="flex items-center gap-8 text-[11px] font-mono font-black text-slate-600 tracking-tighter">
            <span className="text-glow-hover hover:text-slate-400 transition-colors cursor-default">AWS-INGRESS</span>
            <span className="text-glow-hover hover:text-slate-400 transition-colors cursor-default">GCP-VERTEX</span>
            <span className="text-glow-hover hover:text-slate-400 transition-colors cursor-default">AZURE-K8S</span>
          </div>
        </div>
      </div>
    </section>
  );
}
