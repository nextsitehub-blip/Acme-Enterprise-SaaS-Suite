import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Quote, ChevronLeft, ChevronRight, User, Sparkles, 
  ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, Cpu, Timer
} from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: "cto",
      name: "Marcus Vance",
      role: "Chief Technology Officer",
      company: "Apex Dynamics",
      content: "Acme completely overhauled our telemetry pipelines. We scaled from 2M daily operations to over 15M without witnessing a single dropped event, maintaining 99.99% active cluster SLA.",
      metric: "x7.5 Stream Scaling",
      metricLabel: "Ingestion Capacity",
      icon: TrendingUp,
      ctaLabel: "Replicate Apex's Scale",
      avatarColor: "bg-blue-500/20 text-blue-400 border-blue-500/30"
    },
    {
      id: "ceo",
      name: "Elena Rostova",
      role: "Chief Executive Officer",
      company: "Novasphere",
      content: "The custom executive dashboards saved us hundreds of meeting hours. Real-time cost shunting insights allowed us to slash idle cloud buffer spend by 24% in our very first fiscal month.",
      metric: "Saved 24% Cloud Spend",
      metricLabel: "VPC Overhead Pruned",
      icon: Cpu,
      ctaLabel: "Prune Your VPC Spend",
      avatarColor: "bg-purple-500/20 text-purple-400 border-purple-500/30"
    },
    {
      id: "eng-dir",
      name: "Devon Carter",
      role: "Director of Engineering",
      company: "CloudGrid Inc.",
      content: "Integrating the SDK took less than five minutes. Our developers went from debugging connection bottlenecks to deploying features, backed by autonomous Gemini-powered scaling alerts.",
      metric: "<5 Mins Integration",
      metricLabel: "SDK Configuration",
      icon: Timer,
      ctaLabel: "Get Instant Integration",
      avatarColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-sliding interval
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden z-10 border-t border-white/5 bg-[#020617] grid-bg">
      <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] rounded-full bg-cyan-600/5 glowing-orb pointer-events-none blur-[100px]" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-blue-600/5 glowing-orb pointer-events-none blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block"></span>
              <span className="font-mono text-[9px] font-bold tracking-widest text-indigo-300 uppercase">
                EXECUTIVE CASE REVIEWS
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Verifiable Results from <br />
              Enterprise Engineers
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-4 leading-relaxed">
              Click on any high-impact metric below to view the verified testimony and audit details from the leadership team.
            </p>
          </div>

          {/* Nav Controls */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-xl border border-white/8 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-xl border border-white/8 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dynamic Metric Toggles Deck */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {testimonials.map((item, index) => {
            const isSelected = activeIndex === index;
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`text-left rounded-2xl p-5 border transition-all cursor-pointer relative overflow-hidden group/btn ${
                  isSelected 
                    ? "bg-slate-900/40 border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.1)]" 
                    : "bg-slate-950/20 border-white/5 hover:border-white/10 hover:bg-white/2"
                }`}
              >
                {/* Visual select indicator line */}
                {isSelected && (
                  <motion.div 
                    layoutId="activeTestimonialBar"
                    className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500"
                  />
                )}
                
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                    isSelected ? "bg-blue-600/10 border-blue-500/30 text-blue-400" : "bg-white/5 border-white/8 text-slate-400"
                  }`}>
                    <IconComponent className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono font-bold uppercase text-slate-500 tracking-wider">
                      {item.metricLabel}
                    </span>
                    <span className="block font-display text-base font-extrabold text-white mt-0.5">
                      {item.metric}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Testimonial Panel container */}
        <div className="relative min-h-[350px] md:min-h-[250px]">
          <AnimatePresence mode="wait">
            {testimonials.map((item, index) => {
              if (index !== activeIndex) return null;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="w-full"
                >
                  <div className="rounded-3xl border border-white/10 bg-slate-900/15 p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative flex flex-col md:flex-row justify-between gap-8 items-stretch">
                    
                    {/* Left Quote Section */}
                    <div className="flex-1 space-y-6 text-left flex flex-col justify-between">
                      <div className="space-y-4">
                        <Quote className="w-10 h-10 text-blue-500/40" />
                        <p className="font-sans text-base sm:text-lg lg:text-xl text-slate-100 italic leading-relaxed">
                          &ldquo;{item.content}&rdquo;
                        </p>
                      </div>

                      <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${item.avatarColor}`}>
                          <User className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="block font-display text-sm font-bold text-white">
                            {item.name}
                          </span>
                          <span className="block font-sans text-xs text-[#94A3B8]">
                            {item.role} &bull; <span className="text-blue-400 font-semibold">{item.company}</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right High-converting Conversion Block */}
                    <div className="w-full md:w-80 border-t md:border-t-0 md:border-l border-white/8 pt-6 md:pt-0 md:pl-8 flex flex-col justify-between text-left gap-6">
                      <div className="space-y-4">
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[9px] font-bold uppercase">
                          <CheckCircle2 className="w-3 h-3" /> VERIFIED CASE STUDY
                        </span>
                        
                        <h4 className="font-display text-base font-bold text-white">
                          Proven ROI for {item.company}
                        </h4>
                        
                        <div className="space-y-2 text-xs text-slate-300">
                          <p>
                            &bull; Immediate integration using the Acme SDK.
                          </p>
                          <p>
                            &bull; 100% data fidelity with zero query dropping.
                          </p>
                          <p>
                            &bull; Autonomous cost allocation enabled.
                          </p>
                        </div>
                      </div>

                      {/* Direct scheduling trigger */}
                      <button 
                        onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
                        className="w-full px-5 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)] cursor-pointer group"
                      >
                        <span>{item.ctaLabel}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Corporate Trust Badges Row */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center md:justify-between items-center gap-6 text-[#94A3B8] text-[11px] font-mono">
          <span className="text-slate-500 font-semibold">SECURITY ACCREDITATIONS:</span>
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-1.5 bg-slate-900/30 border border-white/5 px-2.5 py-1 rounded">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> SOC2 Type II Certified
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/30 border border-white/5 px-2.5 py-1 rounded">
              <ShieldCheck className="w-4 h-4 text-cyan-400" /> ISO 27001 Security
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/30 border border-white/5 px-2.5 py-1 rounded">
              <ShieldCheck className="w-4 h-4 text-purple-400" /> GDPR & Privacy Compliant
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/30 border border-white/5 px-2.5 py-1 rounded">
              <ShieldCheck className="w-4 h-4 text-blue-400" /> HIPAA Compliant Architecture
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
