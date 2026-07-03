import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  TrendingUp, Cpu, Server, ShieldCheck, Zap, Bell, 
  Terminal, Globe, HardDrive, RefreshCw, Layers, Database,
  ArrowUpRight, AlertCircle, Play, Activity, Sparkles, Network, CircleCheck
} from "lucide-react";

interface LiveDashboardProps {
  activeTab?: string; // Optional external tab override
}

export default function LiveDashboard({ activeTab: externalTab }: LiveDashboardProps) {
  const [activeTab, setActiveTab] = useState("Analytics");
  const [logs, setLogs] = useState<string[]>([]);
  const [latency, setLatency] = useState(12);
  const [cpuLoad, setCpuLoad] = useState(42);
  const [memoryLoad, setMemoryLoad] = useState(68);
  const [activeUsers, setActiveUsers] = useState(1483);
  const [hourlyRequests, setHourlyRequests] = useState([24, 35, 45, 32, 64, 78, 92, 85, 110, 130, 115, 125]);
  const [selectedPoint, setSelectedPoint] = useState<{ x: number; y: number; val: number; index: number } | null>(null);

  // Sync external tab if provided
  useEffect(() => {
    if (externalTab) {
      setActiveTab(externalTab);
    }
  }, [externalTab]);

  // Handle active logs generator
  useEffect(() => {
    const logPool = [
      "DB Query returned in 1.4ms from cache (Cluster-US)",
      "SSL Handshake completed successfully for secure.acme.com",
      "VPC-Route configured: Route Table subnet-081af updated",
      "K8s pod replicated: dev-auth-pod-6f89b scaled x3",
      "Auth token verified for client #841",
      "Backup database synced with secondary replica (EU-WEST-1)",
      "WAF Rule #109 block trigger: block malicious user agent IP",
      "Garbage collector freed 142MB memory in server-3",
      "DNS replication complete across global edge gateways",
      "Threat Intel Feed synced: 14 new suspicious IPs blacklisted"
    ];

    const initialLogs = Array.from({ length: 6 }, () => logPool[Math.floor(Math.random() * logPool.length)]);
    setLogs(initialLogs);

    const interval = setInterval(() => {
      const newLog = logPool[Math.floor(Math.random() * logPool.length)];
      setLogs(prev => [newLog, ...prev.slice(0, 5)]);
      
      // Mutate telemetry slightly
      setLatency(prev => Math.max(8, Math.min(25, prev + Math.floor(Math.random() * 5) - 2)));
      setCpuLoad(prev => Math.max(30, Math.min(85, prev + Math.floor(Math.random() * 11) - 5)));
      setMemoryLoad(prev => Math.max(60, Math.min(90, prev + Math.floor(Math.random() * 5) - 2)));
      setActiveUsers(prev => prev + Math.floor(Math.random() * 7) - 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // SVG Chart Dimensions & math
  const width = 500;
  const height = 180;
  const padding = 20;
  const maxVal = Math.max(...hourlyRequests);
  const points = hourlyRequests.map((val, idx) => {
    const x = padding + (idx * (width - padding * 2)) / (hourlyRequests.length - 1);
    const y = height - padding - (val * (height - padding * 2)) / maxVal;
    return { x, y, val, idx };
  });

  const pathD = `M ${points[0].x} ${points[0].y} ` + points.slice(1).map(p => `L ${p.x} ${p.y}`).join(" ");
  const areaD = `${pathD} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`;

  // Mini heatmaps
  const heatmapRows = 5;
  const heatmapCols = 24;

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-slate-950/65 backdrop-blur-2xl overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.6)]">
      {/* Header bar of the dashboard mockup */}
      <div className="border-b border-white/8 bg-slate-900/40 px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[10px] text-emerald-400 font-semibold tracking-wider uppercase">
              ALL SYSTEMS OPERATIONAL
            </span>
          </div>
          <span className="text-white/20">|</span>
          <span className="font-mono text-[#94A3B8]">
            CLUSTER: <span className="text-blue-400 font-bold">ACME-CORE-GRID</span>
          </span>
        </div>

        {/* Console Action Bar */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1.5 bg-slate-900/60 border border-white/5 rounded-md px-2.5 py-1 text-slate-400 font-mono text-[10px]">
            <Server className="w-3 h-3 text-blue-400" />
            <span>US-EAST-1</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 font-mono text-[10px]">
            <RefreshCw className="w-3 h-3 animate-spin text-slate-500" />
            <span>SYNCED 2s AGO</span>
          </div>
        </div>
      </div>

      {/* Internal Panel Layout */}
      <div className="flex flex-col lg:flex-row h-full">
        {/* Mock Internal Sidebar */}
        <div className="w-full lg:w-48 bg-slate-950/40 border-r border-b lg:border-b-0 border-white/8 p-4 flex lg:flex-col gap-1.5 overflow-x-auto no-scrollbar">
          {[
            { id: "Analytics", label: "Analytics Board", icon: TrendingUp },
            { id: "Operations", label: "Cloud Operations", icon: Cpu },
            { id: "Security", label: "Security Radar", icon: ShieldCheck },
            { id: "Cloud", label: "Server Clusters", icon: Globe },
            { id: "Finance", label: "FinOps Hub", icon: Database }
          ].map(tab => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-all duration-200 shrink-0 ${
                  isSelected 
                    ? "bg-blue-600/15 border border-blue-500/30 text-white shadow-[0_0_15px_rgba(59,130,246,0.15)]" 
                    : "border border-transparent text-[#94A3B8] hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-blue-400" : "text-slate-400"}`} />
                <span className="font-sans text-xs font-semibold">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dashboard Panels */}
        <div className="flex-1 p-5 md:p-6 bg-slate-950/20 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Active Tab Header */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="font-display text-lg font-bold text-white flex items-center gap-2">
                    {activeTab === "Analytics" && "Executive Analytics Overview"}
                    {activeTab === "Operations" && "Cloud Infrastructure Operations"}
                    {activeTab === "Security" && "Zero-Trust Security Radar"}
                    {activeTab === "Cloud" && "Multi-Cluster Global Grid"}
                    {activeTab === "Finance" && "Enterprise Cost Optimization"}
                    <Sparkles className="w-4.5 h-4.5 text-blue-400 animate-pulse" />
                  </h4>
                  <p className="text-xs text-[#94A3B8]">
                    {activeTab === "Analytics" && "Real-time query ingestion and throughput metrics."}
                    {activeTab === "Operations" && "Virtual instances, load balancing, and performance clusters."}
                    {activeTab === "Security" && "Intrusion protection, continuous SSL checks, and token telemetry."}
                    {activeTab === "Cloud" && "Active regions, geo-routing and replication node health."}
                    {activeTab === "Finance" && "Cost allocation, savings projections, and resource limits."}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-mono px-2 py-1 rounded">
                    LIVE STREAM
                  </span>
                </div>
              </div>

              {/* Dynamic State Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="border border-white/5 bg-slate-900/30 rounded-xl p-3.5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full blur-xl group-hover:bg-blue-500/10 transition-colors" />
                  <span className="text-[10px] font-mono text-slate-400 tracking-wider block uppercase mb-1">
                    Throughput
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-display font-extrabold text-white">
                      {activeUsers.toLocaleString()}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold flex items-center">
                      <ArrowUpRight className="w-3 h-3" /> +14.2%
                    </span>
                  </div>
                  <span className="text-[9px] text-[#94A3B8] block mt-1">Queries / second</span>
                </div>

                <div className="border border-white/5 bg-slate-900/30 rounded-xl p-3.5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/5 rounded-full blur-xl group-hover:bg-purple-500/10 transition-colors" />
                  <span className="text-[10px] font-mono text-slate-400 tracking-wider block uppercase mb-1">
                    API Latency
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-display font-extrabold text-white">
                      {latency}ms
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold flex items-center">
                      -2ms
                    </span>
                  </div>
                  <span className="text-[9px] text-[#94A3B8] block mt-1">Global average response</span>
                </div>

                <div className="border border-white/5 bg-slate-900/30 rounded-xl p-3.5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/10 transition-colors" />
                  <span className="text-[10px] font-mono text-slate-400 tracking-wider block uppercase mb-1">
                    CPU Load
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-display font-extrabold text-white">
                      {cpuLoad.toFixed(1)}%
                    </span>
                    <span className="text-[10px] font-mono text-orange-400 font-bold">
                      MODERATE
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 h-1 rounded-full mt-2 overflow-hidden">
                    <motion.div 
                      className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full"
                      style={{ width: `${cpuLoad}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                <div className="border border-white/5 bg-slate-900/30 rounded-xl p-3.5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-full blur-xl group-hover:bg-emerald-500/10 transition-colors" />
                  <span className="text-[10px] font-mono text-slate-400 tracking-wider block uppercase mb-1">
                    Memory Usage
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-display font-extrabold text-white">
                      {memoryLoad}%
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">
                      OPTIMAL
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 h-1 rounded-full mt-2 overflow-hidden">
                    <motion.div 
                      className="bg-gradient-to-r from-indigo-500 to-purple-400 h-full rounded-full"
                      style={{ width: `${memoryLoad}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>

              {/* Tab-specific custom modules */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                {/* Visual Chart - 7 Columns */}
                <div className="lg:col-span-7 border border-white/5 bg-slate-950/40 rounded-xl p-5 relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-blue-400" />
                      <span className="font-sans text-xs font-semibold text-white">
                        {activeTab === "Finance" ? "Resource Spend Distribution (24h)" : "Live Operations Ingestion Rate"}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 border border-white/5 rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block animate-pulse"></span>
                      <span>12 INTERVALS</span>
                    </div>
                  </div>

                  {/* CUSTOM SVG CHART WITH INTERACTIVE CROSSHAIR */}
                  <div className="relative">
                    <svg className="w-full h-[180px] overflow-visible" viewBox={`0 0 ${width} ${height}`}>
                      <defs>
                        {/* Area Gradient */}
                        <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                        </linearGradient>
                        {/* Line Stroke Gradient */}
                        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="50%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>

                      {/* Grid Lines */}
                      {Array.from({ length: 4 }).map((_, i) => {
                        const yVal = padding + (i * (height - padding * 2)) / 3;
                        return (
                          <line
                            key={i}
                            x1={padding}
                            y1={yVal}
                            x2={width - padding}
                            y2={yVal}
                            stroke="rgba(255,255,255,0.04)"
                            strokeDasharray="4 4"
                          />
                        );
                      })}

                      {/* Area Path */}
                      <motion.path
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        d={areaD}
                        fill="url(#chartGlow)"
                      />

                      {/* Stroke Path */}
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        d={pathD}
                        fill="none"
                        stroke="url(#lineGrad)"
                        strokeWidth="2.5"
                      />

                      {/* Interactive Datapoints */}
                      {points.map((p) => {
                        const isHovered = selectedPoint?.index === p.idx;
                        return (
                          <g key={p.idx}>
                            <circle
                              cx={p.x}
                              cy={p.y}
                              r={isHovered ? 6 : 3.5}
                              className="fill-slate-950 stroke-blue-400 cursor-pointer transition-all duration-150"
                              strokeWidth={isHovered ? 2.5 : 1.5}
                              onMouseEnter={() => setSelectedPoint({ x: p.x, y: p.y, val: p.val, index: p.idx })}
                              onMouseLeave={() => setSelectedPoint(null)}
                            />
                            {isHovered && (
                              <line
                                x1={p.x}
                                y1={padding}
                                x2={p.x}
                                y2={height - padding}
                                stroke="rgba(59, 130, 246, 0.25)"
                                strokeWidth="1"
                                strokeDasharray="3 3"
                              />
                            )}
                          </g>
                        );
                      })}
                    </svg>

                    {/* SVG Tooltip Portal */}
                    <AnimatePresence>
                      {selectedPoint && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: 5 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, y: 5 }}
                          className="absolute bg-slate-950/95 border border-white/10 rounded-lg p-2.5 shadow-xl text-left z-20 pointer-events-none"
                          style={{
                            left: `${(selectedPoint.x / width) * 100}%`,
                            top: `${(selectedPoint.y / height) * 100 - 45}%`,
                            transform: "translateX(-50%)",
                          }}
                        >
                          <span className="block text-[8px] font-mono text-slate-400 uppercase tracking-widest">
                            METRIC RECORD
                          </span>
                          <span className="block font-sans text-xs font-extrabold text-white">
                            {selectedPoint.val * (activeTab === "Finance" ? 8.5 : 124)} units
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Right Visual Panel - 5 Columns */}
                <div className="lg:col-span-5 border border-white/5 bg-slate-950/40 rounded-xl p-5 flex flex-col justify-between">
                  {activeTab === "Analytics" && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Sparkles className="w-4.5 h-4.5 text-yellow-400" />
                        <span className="font-sans text-xs font-semibold text-white">
                          AI Autonomous Insights
                        </span>
                      </div>
                      <div className="bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-blue-500/10 border border-indigo-500/20 rounded-lg p-3 text-xs space-y-2">
                        <div className="flex items-center justify-between text-[10px] font-mono text-indigo-400">
                          <span>RECOMMENDATION ACME-102</span>
                          <span className="bg-indigo-500/25 px-1.5 py-0.2 rounded font-bold">
                            98% CONFIDENCE
                          </span>
                        </div>
                        <p className="text-slate-300 font-sans leading-relaxed">
                          Query peak load detected at 10:15 UTC. We recommend scale-out rules on subnet <code className="bg-slate-950 px-1 py-0.5 rounded text-yellow-400 font-mono text-[10px]">ap-north-1a</code> to prevent request queue queuing spikes.
                        </p>
                        <button className="flex items-center gap-1.5 text-xs text-indigo-300 hover:text-white font-semibold pt-1 transition-colors">
                          <span>Apply Autoscale Patch</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* System Health Heatmap Grid */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-mono text-slate-400 block">
                          CLUSTER THREAD HEATMAP (24h)
                        </span>
                        <div className="grid grid-cols-12 gap-1 bg-slate-950/50 p-2 rounded-lg border border-white/5">
                          {Array.from({ length: 24 }).map((_, i) => {
                            const colors = [
                              "bg-emerald-500/20 border-emerald-500/30",
                              "bg-emerald-500/40 border-emerald-500/65",
                              "bg-cyan-500/40 border-cyan-500/60",
                              "bg-blue-500/30 border-blue-500/50",
                              "bg-indigo-500/20 border-indigo-500/35"
                            ];
                            const randomColor = colors[Math.floor(Math.sin(i * 1.5) * 2 + 2)];
                            return (
                              <div
                                key={i}
                                className={`w-full aspect-square rounded-sm border ${randomColor} cursor-pointer hover:scale-110 transition-transform`}
                                title={`Thread ${i + 1} Status`}
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "Operations" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-white">System Logs Terminal</span>
                        <span className="text-[9px] font-mono text-slate-500">Ctrl + L to clear</span>
                      </div>
                      <div className="bg-black/85 border border-white/5 rounded-lg p-3.5 h-44 font-mono text-[9.5px] text-emerald-400/90 overflow-y-auto space-y-1.5 no-scrollbar">
                        <div className="text-slate-500 font-sans border-b border-white/5 pb-1 mb-1">
                          Terminal logs (Real-time edge event feed)
                        </div>
                        {logs.map((log, index) => (
                          <div key={index} className="flex gap-2 leading-relaxed">
                            <span className="text-blue-500 font-bold select-none">[ACME]</span>
                            <span className="text-slate-300 break-all">{log}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "Security" && (
                    <div className="space-y-3.5 text-xs">
                      <span className="font-semibold text-white block">Intrusion Protection Engine</span>
                      <div className="space-y-2">
                        {[
                          { node: "WAF Firewalls", status: "Secure", detail: "2.4B Rulesets Inbound" },
                          { node: "SSL Certificates", status: "Active", detail: "Auto-renew in 14d" },
                          { node: "Threat Radar", status: "0 Alerts", detail: "Scanned 14m ago" }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between p-2.5 bg-slate-900/40 border border-white/5 rounded-lg">
                            <div className="flex items-center gap-2">
                              <ShieldCheck className="w-4 h-4 text-emerald-400" />
                              <div>
                                <span className="block font-medium text-slate-200">{item.node}</span>
                                <span className="block text-[10px] text-[#94A3B8]">{item.detail}</span>
                              </div>
                            </div>
                            <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full uppercase font-extrabold">
                              {item.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "Cloud" && (
                    <div className="space-y-3">
                      <span className="text-xs font-semibold text-white block">Active Deployment Pipeline</span>
                      <div className="bg-slate-900/30 border border-white/5 rounded-lg p-3 space-y-3 font-mono text-[10px]">
                        <div className="flex items-center justify-between">
                          <span className="text-blue-400 font-bold">RELEASE V4.14.2</span>
                          <span className="text-slate-500">100% HEALTH</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#94A3B8]">
                          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                          <span>Rolling release: deploy ap-southeast-1</span>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-white/5 p-[1px]">
                          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 h-full rounded-full w-[84%]"></div>
                        </div>
                        <div className="flex justify-between text-[9px] text-slate-400">
                          <span>DOCKER BUILD: SUCCESS</span>
                          <span>94 / 112 INSTANCES</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "Finance" && (
                    <div className="space-y-3">
                      <span className="text-xs font-semibold text-white block">FinOps Resource Efficiency</span>
                      <div className="bg-slate-900/40 border border-white/5 rounded-lg p-3 space-y-2">
                        <div className="flex justify-between text-xs text-slate-300">
                          <span>Active Spend Limit</span>
                          <span className="font-bold text-white">$14,500.00 / mo</span>
                        </div>
                        <div className="flex justify-between text-xs text-slate-300">
                          <span>Unallocated Overhead</span>
                          <span className="text-emerald-400 font-semibold">Saved $2,481.20</span>
                        </div>
                        <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden relative">
                          <div className="bg-blue-600 h-full rounded-full w-[72%]"></div>
                        </div>
                        <div className="flex justify-between text-[9px] text-slate-500 uppercase tracking-wider font-mono">
                          <span>Over-provisioned: 0%</span>
                          <span>Target: 80% utilization</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Footer card action */}
                  <div className="mt-4 pt-3.5 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-[#94A3B8] font-mono text-[10px]">OPERATOR ID: ACME_ADM_01</span>
                    <button className="flex items-center gap-1 text-blue-400 hover:text-white font-semibold transition-colors duration-150">
                      <span>Full Screen Radar</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
