import { useState, FormEvent } from "react";
import { Command, Github, Twitter, Linkedin, Slack, ArrowRight, CheckCircle, Mail } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  const footerLinks = {
    products: [
      { name: "Parallel Ingestion", href: "#products" },
      { name: "Heuristics Board", href: "#solutions" },
      { name: "Zero-Trust Radar", href: "#products" },
      { name: "Edge Mesh", href: "#solutions" },
      { name: "FinOps Hub", href: "#products" }
    ],
    resources: [
      { name: "API Documentation", href: "#resources" },
      { name: "Security Whitepapers", href: "#about" },
      { name: "System Status", href: "#about" },
      { name: "SLA Benchmarks", href: "#solutions" },
      { name: "Developer Sandbox", href: "#pricing" }
    ],
    support: [
      { name: "Enterprise Desk", href: "#contact" },
      { name: "Database Consulting", href: "#contact" },
      { name: "Slack Guild", href: "#contact" },
      { name: "Cluster Migration", href: "#solutions" },
      { name: "Submit Ticket", href: "#contact" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "SOC2 Compliance", href: "#" },
      { name: "DPA Agreement", href: "#" },
      { name: "GDPR Standards", href: "#" }
    ]
  };

  return (
    <footer className="relative bg-[#020617] border-t border-white/5 py-16 md:py-20 z-10 overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-600/5 glowing-orb pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Brand Col - 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1px] shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <div className="w-full h-full bg-[#030712] rounded-[7px] flex items-center justify-center">
                  <Command className="w-4 h-4 text-blue-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-sm tracking-tight text-white">
                  ACME
                </span>
                <span className="font-mono text-[8px] tracking-widest text-[#94A3B8] -mt-1 uppercase">
                  Technologies
                </span>
              </div>
            </a>
            
            <p className="font-sans text-xs text-[#94A3B8] leading-relaxed max-w-sm">
              Engineered to provide high-density analytical boards and active multi-cloud database sharding for modern enterprises. Zero middleware latency.
            </p>

            {/* Newsletter Subscription */}
            <div className="space-y-3">
              <span className="block text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                SUBSCRIBE TO THE TELEMETRY BULLETIN
              </span>
              
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                <div className="relative flex-1">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="operator@acme.com"
                    className="w-full bg-slate-900/60 border border-white/8 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <Mail className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white p-2.5 rounded-xl flex items-center justify-center transition-colors cursor-pointer shrink-0"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {isSubscribed && (
                <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[10px] font-bold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>SUBSCRIPTION COMPLETE</span>
                </div>
              )}
            </div>
          </div>

          {/* Links Columns - 8 columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Column Products */}
            <div className="space-y-4">
              <h4 className="font-display text-xs font-bold tracking-wider text-white uppercase">
                Products
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="font-sans text-xs text-[#94A3B8] hover:text-white transition-colors duration-200">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column Resources */}
            <div className="space-y-4">
              <h4 className="font-display text-xs font-bold tracking-wider text-white uppercase">
                Resources
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="font-sans text-xs text-[#94A3B8] hover:text-white transition-colors duration-200">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column Support */}
            <div className="space-y-4">
              <h4 className="font-display text-xs font-bold tracking-wider text-white uppercase">
                Support
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="font-sans text-xs text-[#94A3B8] hover:text-white transition-colors duration-200">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column Legal */}
            <div className="space-y-4">
              <h4 className="font-display text-xs font-bold tracking-wider text-white uppercase">
                Legal
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="font-sans text-xs text-[#94A3B8] hover:text-white transition-colors duration-200">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom copyright & Social row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="font-sans text-[11px] text-[#94A3B8]/60 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Acme Technologies, Inc. All rights reserved. SOC2 Certified Type II.
          </span>

          {/* Social Icons */}
          <div className="flex gap-5">
            {[
              { icon: Twitter, href: "#" },
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Slack, href: "#" }
            ].map((soc, idx) => {
              const Icon = soc.icon;
              return (
                <a
                  key={idx}
                  href={soc.href}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 hover:bg-white/10 hover:border-white/12 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </footer>
  );
}
