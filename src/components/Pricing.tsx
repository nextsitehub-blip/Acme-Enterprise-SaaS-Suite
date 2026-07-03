import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight, Sparkles, AlertCircle } from "lucide-react";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  const plans = [
    {
      name: "Developer Core",
      price: billingCycle === "annual" ? "$0" : "$0",
      description: "Ideal for initial cluster audits and telemetry sandbox prototyping.",
      features: [
        "Up to 1.2M daily logs",
        "Analytics board overview",
        "Single VPC telemetry agent",
        "Standard latency: <25ms",
        "Email developer support"
      ],
      ctaText: "Start Free Prototyping",
      isPopular: false,
      isEnterprise: false,
      border: "border-white/5",
      accent: "text-slate-400"
    },
    {
      name: "Growth Scale",
      price: billingCycle === "annual" ? "$129" : "$149",
      description: "Best for fast-growing SaaS startups demanding real-time operational alerts.",
      features: [
        "Up to 120M daily logs",
        "100% Interactive consoles",
        "VPC Tunnel telemetry mapping",
        "API Response latency: <5ms",
        "Autonomous Gemini recommendations",
        "Slack & PagerDuty integrations",
        "SAML SSO access profiles"
      ],
      ctaText: "Deploy Growth Agent",
      isPopular: true,
      isEnterprise: false,
      border: "border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.15)]",
      accent: "text-blue-400"
    },
    {
      name: "Enterprise Grid",
      price: "Custom",
      description: "Dedicated infrastructure sharding tailored for Fortune 500 parallel logs.",
      features: [
        "Infinite logging streams",
        "Multi-cloud Active replication",
        "Isolated DB shard servers",
        "Guaranteed SLA: 99.99%",
        "Dedicated technical lead account",
        "Custom compliance reports",
        "Custom WAF firewalls",
        "Annual security audits SOC2"
      ],
      ctaText: "Contact Enterprise Sales",
      isPopular: false,
      isEnterprise: true,
      border: "border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.2)]",
      accent: "text-purple-400"
    }
  ];

  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-[#020617] border-y border-white/5 overflow-hidden z-10 grid-bg">
      {/* Glow */}
      <div className="absolute top-[30%] right-[-10%] w-[450px] h-[450px] rounded-full bg-purple-600/5 glowing-orb pointer-events-none blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block"></span>
            <span className="font-mono text-[9px] font-bold tracking-widest text-blue-300 uppercase">
              PREMIUM PLANS
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
          >
            Transparent Pricing Structured <br />
            For Complete Operations
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-[#94A3B8] mt-4 leading-relaxed"
          >
            Acme supports clusters of all scales. Switch from sandbox free prototyping to active global deployment pipelines instantly.
          </motion.p>

          {/* Billing Cycle Switcher with Slide Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-4 mt-10"
          >
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`text-xs font-bold transition-colors cursor-pointer ${
                billingCycle === "monthly" ? "text-white" : "text-slate-500 hover:text-slate-300"
              }`}
            >
              Monthly billing
            </button>
            
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
              className="w-12 h-6 rounded-full bg-slate-900 border border-white/10 relative flex items-center p-1 cursor-pointer"
            >
              <motion.div 
                className="w-4 h-4 rounded-full bg-blue-500"
                animate={{ x: billingCycle === "annual" ? 22 : 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
            </button>
            
            <button
              onClick={() => setBillingCycle("annual")}
              className={`text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer ${
                billingCycle === "annual" ? "text-white" : "text-slate-500 hover:text-slate-300"
              }`}
            >
              Annually billing 
              <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[9px] font-bold px-2 py-0.5 rounded-md uppercase">
                Save 15%
              </span>
            </button>
          </motion.div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 80, damping: 15, delay: index * 0.1 }}
              key={plan.name}
              whileHover={{ 
                y: -6, 
                scale: 1.015,
                borderColor: plan.isPopular ? "rgba(59, 130, 246, 0.4)" : plan.isEnterprise ? "rgba(168, 85, 247, 0.4)" : "rgba(255, 255, 255, 0.12)"
              }}
              className={`relative rounded-3xl border bg-slate-900/10 p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 group ${plan.border}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Highlight Overlay on popular and enterprise plans */}
              {plan.isPopular && (
                <div className="absolute top-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 w-full" />
              )}
              {plan.isEnterprise && (
                <div className="absolute top-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 w-full" />
              )}

              {/* Card Core Info */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-lg font-bold text-white">
                    {plan.name}
                  </h3>
                  
                  {/* Badges */}
                  {plan.isPopular && (
                    <span className="inline-flex items-center gap-1 bg-blue-500/15 border border-blue-500/30 text-blue-400 font-mono text-[9px] font-bold px-2.5 py-0.5 rounded-md uppercase animate-pulse">
                      <Sparkles className="w-3 h-3 text-blue-400" />
                      Most Popular
                    </span>
                  )}
                  {plan.isEnterprise && (
                    <span className="inline-flex items-center gap-1 bg-purple-500/15 border border-purple-500/30 text-purple-400 font-mono text-[9px] font-bold px-2.5 py-0.5 rounded-md uppercase">
                      Recommended
                    </span>
                  )}
                </div>

                <p className="font-sans text-xs text-[#94A3B8] leading-relaxed mb-6">
                  {plan.description}
                </p>

                {/* Price Display with AnimatePresence for smooth swap */}
                <div className="flex items-baseline gap-1.5 mb-8 h-14 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={plan.price}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="font-display text-4xl lg:text-5xl font-extrabold text-white block"
                    >
                      {plan.price}
                    </motion.span>
                  </AnimatePresence>
                  {plan.price !== "Custom" && (
                    <span className="font-mono text-xs text-[#94A3B8]">
                      / month
                    </span>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-3.5 pt-6 border-t border-white/5">
                  <span className="block text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase mb-4">
                    PLAN INCLUSIONS
                  </span>
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5 bg-blue-500/10 rounded-full p-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Action button with hover light beam effect */}
              <div className="mt-10">
                <motion.button
                  onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: plan.isPopular 
                      ? "0 0 30px rgba(59, 130, 246, 0.4)" 
                      : plan.isEnterprise 
                      ? "0 0 30px rgba(168, 85, 247, 0.4)" 
                      : "0 0 20px rgba(255, 255, 255, 0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer overflow-hidden relative group/btn ${
                    plan.isPopular 
                      ? "bg-blue-600 text-white hover:bg-blue-500" 
                      : plan.isEnterprise 
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                      : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-out" />
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
