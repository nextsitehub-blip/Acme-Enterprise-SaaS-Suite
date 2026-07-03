import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, Calendar, Clock, Check, ArrowRight, ArrowLeft, 
  Sparkles, ShieldCheck, Mail, Globe, Server, User, 
  ChevronRight, Compass, Info, Building, Database, ArrowUpRight
} from "lucide-react";

export default function BookDemoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  
  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    cloudPlatform: "AWS",
    cloudSpend: "$10k - $50k",
    focusAreas: [] as string[]
  });

  // Calendar states
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const cloudPlatforms = ["AWS", "Google Cloud", "Microsoft Azure", "Hybrid Cloud", "On-Premises"];
  const spendTiers = ["<$10k / mo", "$10k - $50k / mo", "$50k - $200k / mo", "$200k+ / mo"];
  const availableFocusAreas = [
    { id: "ingestion", label: "Sub-millisecond Log Ingestion", desc: "For scaling cluster streams" },
    { id: "cost", label: "FinOps Spend Optimization", desc: "Prune idle virtual container pools" },
    { id: "security", label: "Zero-Trust Edge Layer Security", desc: "Accredited SOC2 monitoring rules" },
    { id: "scaling", label: "Autonomous Scaling Agents", desc: "Dynamic cluster load replication" }
  ];

  // Dynamic next 5 business days generator
  const getNextBusinessDays = () => {
    const days = [];
    const date = new Date();
    let count = 0;
    while (count < 5) {
      date.setDate(date.getDate() + 1);
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        days.push({
          dateString: date.toISOString().split("T")[0],
          dayName: date.toLocaleDateString("en-US", { weekday: "short" }),
          dayNum: date.getDate(),
          monthName: date.toLocaleDateString("en-US", { month: "short" })
        });
        count++;
      }
    }
    return days;
  };

  const businessDays = getNextBusinessDays();
  const timeSlots = ["09:00 AM EST", "10:30 AM EST", "01:00 PM EST", "02:30 PM EST", "04:00 PM EST"];

  useEffect(() => {
    const handleOpenModal = () => {
      setIsOpen(true);
      setStep(1);
    };

    window.addEventListener("open-demo-modal", handleOpenModal);
    return () => window.removeEventListener("open-demo-modal", handleOpenModal);
  }, []);

  // Handle ESC key close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleFocusAreaToggle = (areaId: string) => {
    setFormData(prev => {
      const active = prev.focusAreas.includes(areaId);
      return {
        ...prev,
        focusAreas: active 
          ? prev.focusAreas.filter(id => id !== areaId)
          : [...prev.focusAreas, areaId]
      };
    });
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.company) {
        alert("Please fill in your name, email, and company first.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!selectedDate || !selectedTime) {
        alert("Please select a date and time slot first.");
        return;
      }
      setStep(3);
    }
  };

  const handlePrevStep = () => {
    setStep(prev => Math.max(1, prev - 1));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Blur Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-[#020617]/85 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-slate-900/40 p-6 md:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.8)] overflow-hidden z-10"
          >
            {/* Corner glowing overlays */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header section */}
            <div className="flex justify-between items-start mb-6 pb-4 border-b border-white/5 relative z-10">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-blue-400 font-mono font-bold tracking-widest uppercase mb-1">
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                  <span>Enterprise Consult</span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-extrabold text-white">
                  Schedule Your Sandbox Review
                </h3>
              </div>
              
              <button
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-xl border border-white/8 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Step Progress Tracker */}
            <div className="flex items-center justify-between gap-2 mb-8 relative z-10">
              {[
                { num: 1, label: "Core Profile" },
                { num: 2, label: "Select Slot" },
                { num: 3, label: "AI Agenda" }
              ].map((s) => {
                const isActive = step === s.num;
                const isCompleted = step > s.num;
                return (
                  <div key={s.num} className="flex-1 flex items-center gap-2">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-all ${
                      isActive 
                        ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                        : isCompleted
                        ? "bg-emerald-500/20 border border-emerald-500/30 text-emerald-400"
                        : "bg-white/5 border border-white/5 text-slate-500"
                    }`}>
                      {isCompleted ? <Check className="w-4 h-4" /> : s.num}
                    </div>
                    <span className={`text-[11px] font-medium hidden sm:inline ${
                      isActive ? "text-white font-bold" : "text-slate-500"
                    }`}>
                      {s.label}
                    </span>
                    {s.num < 3 && <div className="h-[2px] flex-1 bg-white/5" />}
                  </div>
                );
              })}
            </div>

            {/* Steps Container */}
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                
                {/* STEP 1: Core Profile */}
                {step === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase block">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                          <input
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            className="w-full bg-slate-950/60 border border-white/8 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase block">
                          Corporate Email
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                          <input
                            type="email"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            className="w-full bg-slate-950/60 border border-white/8 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase block">
                          Company Name
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                          <input
                            type="text"
                            placeholder="Stripe Inc."
                            value={formData.company}
                            onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                            className="w-full bg-slate-950/60 border border-white/8 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase block">
                          Current Monthly Spend
                        </label>
                        <select
                          value={formData.cloudSpend}
                          onChange={(e) => setFormData(prev => ({ ...prev, cloudSpend: e.target.value }))}
                          className="w-full bg-slate-950/60 border border-white/8 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
                        >
                          {spendTiers.map(tier => (
                            <option key={tier} value={tier} className="bg-slate-950 text-white">
                              {tier}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Infrastructure Selection */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase block">
                        Primary Infrastructure Architecture
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {cloudPlatforms.map(platform => {
                          const isSel = formData.cloudPlatform === platform;
                          return (
                            <button
                              key={platform}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, cloudPlatform: platform }))}
                              className={`px-3 py-2 rounded-xl text-[11px] font-semibold transition-all border cursor-pointer ${
                                isSel
                                  ? "bg-blue-600/15 border-blue-500/40 text-blue-400"
                                  : "border-white/5 bg-white/3 hover:bg-white/8 text-slate-300"
                              }`}
                            >
                              {platform}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Focus Areas Checklist */}
                    <div className="space-y-2 pt-2">
                      <label className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase block">
                        Select Inefficiencies to Target (Focus Areas)
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {availableFocusAreas.map(area => {
                          const isSel = formData.focusAreas.includes(area.id);
                          return (
                            <div
                              key={area.id}
                              onClick={() => handleFocusAreaToggle(area.id)}
                              className={`rounded-2xl border p-3 cursor-pointer transition-all flex items-start gap-3 ${
                                isSel 
                                  ? "bg-blue-500/[0.03] border-blue-500/25 shadow-[0_0_15px_rgba(59,130,246,0.05)]" 
                                  : "bg-slate-950/20 border-white/5 hover:border-white/10"
                              }`}
                            >
                              <div className={`w-4 h-4 rounded-md border mt-0.5 flex items-center justify-center transition-all ${
                                isSel ? "bg-blue-600 border-blue-600 text-white" : "border-white/15"
                              }`}>
                                {isSel && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                              <div>
                                <span className="block font-semibold text-[11px] text-white">
                                  {area.label}
                                </span>
                                <span className="block text-[9px] text-[#94A3B8] mt-0.5">
                                  {area.desc}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Select Calendar Slot */}
                {step === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    {/* Day Selection */}
                    <div className="space-y-3">
                      <label className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase block">
                        Select a Day
                      </label>
                      <div className="grid grid-cols-5 gap-2.5">
                        {businessDays.map((day) => {
                          const isSel = selectedDate === day.dateString;
                          return (
                            <button
                              key={day.dateString}
                              type="button"
                              onClick={() => setSelectedDate(day.dateString)}
                              className={`rounded-2xl p-3 border flex flex-col items-center justify-center transition-all cursor-pointer ${
                                isSel
                                  ? "bg-blue-600/15 border-blue-500/40 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                                  : "border-white/5 bg-slate-950/20 hover:bg-white/5 text-slate-400"
                              }`}
                            >
                              <span className="text-[10px] font-mono uppercase tracking-wider block">
                                {day.dayName}
                              </span>
                              <span className="text-xl font-display font-extrabold text-white block mt-1">
                                {day.dayNum}
                              </span>
                              <span className="text-[8px] font-mono uppercase text-slate-500 block mt-0.5">
                                {day.monthName}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time Slot Selection */}
                    <div className="space-y-3 pt-2">
                      <label className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase block">
                        Available Time Slots (Operational Architects Calendar)
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {timeSlots.map((slot) => {
                          const isSel = selectedTime === slot;
                          return (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setSelectedTime(slot)}
                              className={`rounded-2xl px-4 py-3.5 border flex items-center justify-between text-left transition-all cursor-pointer ${
                                isSel
                                  ? "bg-blue-600/15 border-blue-500/40 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                                  : "border-white/5 bg-slate-950/20 hover:bg-white/5 text-slate-400"
                              }`}
                            >
                              <div className="flex items-center gap-2.5">
                                <Clock className="w-4 h-4 text-blue-400/80" />
                                <span className="font-mono text-xs font-bold text-white">
                                  {slot}
                                </span>
                              </div>
                              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                isSel ? "bg-blue-600 border-blue-600 text-white" : "border-white/10"
                              }`}>
                                {isSel && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Expert Assignee Card */}
                    <div className="bg-slate-950/40 border border-white/5 rounded-2xl p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                        <Building className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <span className="block text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                          Assigned Operations Architect
                        </span>
                        <span className="block font-display text-sm font-bold text-slate-200">
                          Dr. Alistair Webb
                        </span>
                        <span className="block text-xs text-[#94A3B8]">
                          Principal Cloud Infrastructure Specialist at Acme Technologies
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Agenda Confirmed & Calendar Invite */}
                {step === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5 text-left"
                  >
                    <div className="text-center py-4">
                      <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-3">
                        <Check className="w-6 h-6 text-emerald-400 stroke-[3]" />
                      </div>
                      <h4 className="font-display text-lg font-bold text-white">
                        Demo Booking Request Confirmed!
                      </h4>
                      <p className="text-xs text-[#94A3B8] mt-1 max-w-sm mx-auto">
                        A calendar invite containing Google Meet access links has been dispatched to <span className="text-blue-400 font-bold">{formData.email}</span>.
                      </p>
                    </div>

                    {/* Customized Session Ticket */}
                    <div className="rounded-2xl border border-white/8 bg-slate-950/60 overflow-hidden relative">
                      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400" />
                      
                      <div className="p-4 md:p-5 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
                          <div>
                            <span className="block text-[8px] font-mono text-slate-500 uppercase">CLIENT SESSION</span>
                            <span className="block text-xs font-bold text-white">
                              {formData.company} &bull; Sandbox Assessment
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="block text-[8px] font-mono text-slate-500 uppercase">ARCHITECT</span>
                            <span className="block text-xs font-bold text-blue-400">
                              Dr. Alistair Webb
                            </span>
                          </div>
                        </div>

                        {/* Calendar Details */}
                        <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                          <div>
                            <span className="block text-[8px] text-slate-500 uppercase">Selected Date</span>
                            <span className="block text-[11px] font-bold text-white mt-1">
                              {new Date(selectedDate).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
                            </span>
                          </div>
                          <div>
                            <span className="block text-[8px] text-slate-500 uppercase">Time & Location</span>
                            <span className="block text-[11px] font-bold text-white mt-1 flex items-center gap-1">
                              <Clock className="w-3 h-3 text-cyan-400" />
                              {selectedTime}
                            </span>
                          </div>
                        </div>

                        {/* Customized Dynamic AI Agenda */}
                        <div className="border-t border-white/5 pt-3.5 space-y-2.5">
                          <div className="flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                              Tailored Session Agenda
                            </span>
                          </div>

                          <div className="space-y-2 text-[11px] text-slate-300 font-sans">
                            <div className="flex items-start gap-2">
                              <span className="text-blue-500 font-bold font-mono">01.</span>
                              <span>
                                Ingress Mapping for <strong>{formData.cloudPlatform}</strong> clusters loaded at <strong>{formData.cloudSpend}</strong> throughput benchmarks.
                              </span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-blue-500 font-bold font-mono">02.</span>
                              <span>
                                In-depth preview of requested focus pipelines:{" "}
                                <span className="text-blue-400 font-semibold">
                                  {formData.focusAreas.length > 0 
                                    ? formData.focusAreas.map(id => availableFocusAreas.find(a => a.id === id)?.label).join(", ")
                                    : "Parallel Stream Processing, Cloud Cost Pruning"}
                                </span>.
                              </span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-blue-500 font-bold font-mono">03.</span>
                              <span>
                                Custom setup criteria & ROI calculation report to prove <strong>&gt;24% compute overhead shunting</strong> within 30 days.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* Footer Buttons */}
            {step < 3 && (
              <div className="flex justify-between items-center mt-8 pt-4 border-t border-white/5 relative z-10">
                {step > 1 ? (
                  <button
                    onClick={handlePrevStep}
                    className="px-4 py-3.5 rounded-xl border border-white/8 bg-white/3 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/8 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div className="w-1" />
                )}

                <button
                  onClick={handleNextStep}
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white flex items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all cursor-pointer group"
                >
                  <span>{step === 2 ? "Finalize Booking" : "Next Step"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="mt-8 pt-4 border-t border-white/5 relative z-10 text-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-3.5 rounded-xl border border-white/8 bg-white/3 hover:bg-white/8 text-xs font-bold text-white transition-all cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>Dismiss</span>
                </button>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
