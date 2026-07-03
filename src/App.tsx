/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientLogos from "./components/ClientLogos";
import Features from "./components/Features";
import InteractivePreview from "./components/InteractivePreview";
import Statistics from "./components/Statistics";
import ProcessTimeline from "./components/ProcessTimeline";
import WhyAcme from "./components/WhyAcme";
import Testimonials from "./components/Testimonials";
import CaseStudies from "./components/CaseStudies";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import BookDemoModal from "./components/BookDemoModal";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-100 overflow-x-hidden selection:bg-blue-600/30 selection:text-white grid-bg">
      {/* Global Tactile Noise Overlay */}
      <div className="noise-overlay" />

      {/* Global Background Glow Lines */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-blue-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[50%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />
      
      {/* Navbar Header */}
      <Navbar />

      {/* Core Landing Page Modules */}
      <main className="relative z-10">
        <Hero />
        <ClientLogos />
        <Features />
        <InteractivePreview />
        <Statistics />
        <ProcessTimeline />
        <WhyAcme />
        <Testimonials />
        <CaseStudies />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      {/* Global Book Demo Popup Wizard */}
      <BookDemoModal />

      {/* Global Footnotes */}
      <Footer />
    </div>
  );
}
