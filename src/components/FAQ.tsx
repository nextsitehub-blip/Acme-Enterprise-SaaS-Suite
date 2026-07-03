import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the average deployment duration of the Acme SDK?",
      answer: "The average integration takes less than ten minutes. The Acme SDK is distributed as a highly optimized lightweight package compatible with standard modern runtimes. It requires injecting just a few initialization lines to safely start telemetry pipelines without server reboots."
    },
    {
      question: "How does Acme maintain the guaranteed 99.99% active SLA?",
      answer: "We leverage an active-active global geo-routed database mesh. If an entire regional datacenter cluster (e.g., US-EAST-1) experiences severe latency spikes or down states, our DNS routing immediately shunts all queries to healthy sister replicas in near real-time, preventing request timeouts."
    },
    {
      question: "Is Acme fully accredited under SOC2 Type II security specifications?",
      answer: "Yes. Acme is fully accredited under SOC2 Type II and GDPR data protection acts. All transactional logs and telemetry aggregates are secured using cryptographical keys (AES-256) both in transit and at rest. We also host external security audit pipelines annually."
    },
    {
      question: "Can we configure custom Slack or PagerDuty alert thresholds?",
      answer: "Absolutely. Our trigger workflow engine allows you to define granular rules (e.g. alert if query latency averages >25ms for three continuous minutes). Alerts are dispatched instantly with full context parameters, stack traces, and affected subnets."
    },
    {
      question: "Does the enterprise plan support custom data-center sharding?",
      answer: "Yes. Our enterprise tier allows complete isolation of database shards. You can provision dedicated physical servers in specific geographic regions to satisfy local data storage laws, backed by active failovers and active replication."
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#020617] overflow-hidden z-10 grid-bg">
      <div className="absolute bottom-[10%] left-[-15%] w-[450px] h-[450px] rounded-full bg-blue-600/5 glowing-orb pointer-events-none blur-[100px]" />

      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block"></span>
            <span className="font-mono text-[9px] font-bold tracking-widest text-cyan-300 uppercase">
              RESOURCES & KNOWLEDGE
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-[#94A3B8] mt-3 leading-relaxed"
          >
            Quickly browse deep operational answers regarding compliance, multi-cloud setups, and SLA coverage scopes.
          </motion.p>
        </div>

        {/* FAQ Accordion Deck */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.05 }}
                key={index}
                className="rounded-2xl border border-white/5 bg-slate-900/10 hover:bg-slate-900/20 transition-all duration-300 overflow-hidden"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <HelpCircle className="w-5 h-5 text-blue-400 shrink-0" />
                    <span className="font-display text-sm sm:text-base font-bold text-slate-100 group-hover:text-white transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Animating icon wrapper */}
                  <motion.div 
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center shrink-0 text-slate-400 group-hover:text-white"
                  >
                    <Plus className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Expanding Content Panel with smooth slide */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 22 }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-white/4 text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Support Call-Out */}
        <div className="mt-12 text-center text-xs text-slate-400 font-sans">
          <span>Can&apos;t find what you&apos;re looking for? </span>
          <a href="#contact" className="text-blue-400 font-semibold hover:underline">
            Reach out to our global database consulting desk &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
