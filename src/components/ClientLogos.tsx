import { motion } from "motion/react";

export default function ClientLogos() {
  const logos = [
    "Microsoft", "Amazon", "Google", "IBM", "Oracle", 
    "SAP", "Cisco", "Intel", "Adobe", "Salesforce"
  ];

  // Repeat twice for seamless scrolling
  const marqueeLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-12 border-y border-white/5 bg-[#020617] overflow-hidden relative z-10">
      {/* Absolute side gradient overlays for smooth mask fade */}
      <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-center font-mono text-[10px] tracking-widest text-[#94A3B8]/60 uppercase">
          PROVIDING HYPER-DENSITY INFRASTRUCTURE FOR GLOBALLY DISTRIBUTED LOGS
        </p>
      </div>

      <div className="flex w-full select-none">
        <div className="flex gap-16 md:gap-24 py-3 animate-marquee whitespace-nowrap">
          {marqueeLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center font-display text-base md:text-lg font-extrabold text-[#475569] hover:text-white transition-colors duration-300"
            >
              <span className="opacity-40 hover:opacity-100 cursor-pointer transition-opacity">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
