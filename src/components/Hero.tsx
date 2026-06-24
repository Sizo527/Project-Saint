import React from "react";
import { motion } from "motion/react";
import { ArrowDown, CornerDownRight, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const handleScrollDown = () => {
    const nextSection = document.getElementById("projects");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 px-4 md:px-8 flex flex-col justify-between overflow-hidden bg-cream dark:bg-neutral-950 transition-colors duration-300">
      {/* Background grid accent with very light contrast */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#c5a8800a_1px,transparent_1px),linear-gradient(to_bottom,#c5a8800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex-grow flex flex-col justify-center my-auto">
        {/* Hard Grid Wrapper with deliberate borders */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-neutral-900/10 dark:border-white/10 bg-cream/30 dark:bg-neutral-950/30 backdrop-blur-sm divide-y lg:divide-y-0 lg:divide-x divide-neutral-900/10 dark:divide-white/10">
          
          {/* Main Title & Brand Statement Column (lg:col-span-8) */}
          <div className="lg:col-span-8 p-6 md:p-12 flex flex-col justify-between select-none">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Premium Sub-indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold/30 bg-gold/5 font-mono text-[10px] tracking-widest text-gold uppercase font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Saint. Digital Strategy // Vol. 04</span>
              </div>

              {/* Mixed Editorial Typography with Italic + Gold accents */}
              <h1 className="text-[10vw] sm:text-[8vw] lg:text-[5.5vw] font-display font-bold leading-[0.95] tracking-tight text-neutral-900 dark:text-neutral-100">
                We craft <span className="font-light italic text-neutral-500 dark:text-neutral-400">intelligent</span> digital artifacts with <span className="text-gold font-serif italic font-semibold">absolute</span> clarity.
              </h1>
            </motion.div>

            {/* Subtext info & Grid aligned actions */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-12 max-w-2xl border-t border-neutral-900/10 dark:border-white/10 pt-8"
            >
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-neutral-900/75 dark:text-neutral-100/75 font-semibold mb-3">
                <CornerDownRight className="w-4 h-4 text-gold" />
                <span>PROJECT SAINT EST. 2017 // DESIGN & ENGINEERING</span>
              </div>
              <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans font-light max-w-xl">
                A relentless pursuit of flawless grid systems, custom responsive interactions, and breathtaking typography pairings. We transform complex platforms into intuitive, high-status, conversion-driven brand experiences.
              </p>
              
              {/* Square / Hard border action triggers */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-6 py-3.5 bg-neutral-950 dark:bg-white text-cream dark:text-black font-semibold font-mono uppercase tracking-wider text-xs border border-neutral-950 dark:border-white hover:bg-transparent hover:text-neutral-950 dark:hover:bg-transparent dark:hover:text-white transition-all duration-300 rounded-none cursor-pointer flex items-center gap-2"
                >
                  View Case Studies <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-6 py-3.5 bg-transparent text-neutral-900 dark:text-white font-semibold font-mono uppercase tracking-wider text-xs border border-neutral-950/20 dark:border-white/20 hover:border-neutral-950 dark:hover:border-white transition-all duration-300 rounded-none cursor-pointer"
                >
                  Get in Touch
                </button>
              </div>
            </motion.div>
          </div>

          {/* Grayscale Media & Brand Logo Frame (lg:col-span-4) */}
          <div className="lg:col-span-4 p-6 md:p-8 flex flex-col justify-between bg-neutral-900/5 dark:bg-white/5 relative group">
            
            {/* Visual Accent Corner Highlights */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gold" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold" />

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full h-full flex flex-col justify-between gap-6"
            >
              {/* Hard bordered Image Frame */}
              <div className="overflow-hidden border border-neutral-900 dark:border-white bg-cream dark:bg-neutral-900 aspect-[4/5] relative">
                <div className="absolute inset-0 bg-neutral-950/10 z-10 pointer-events-none" />
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800&h=1000"
                  alt="Project Saint Workspace"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>

              {/* Side Metadata aligned in a hard-bordered frame */}
              <div className="border border-neutral-900/10 dark:border-white/10 p-4 bg-cream/40 dark:bg-neutral-950/40">
                <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                  <span>IDENTITY: PROJECT SAINT</span>
                  <span className="text-gold font-bold">VOL. 26</span>
                </div>
                <div className="mt-2 text-xs text-neutral-700 dark:text-neutral-300 leading-normal font-sans font-light">
                  A synthesis of raw European editorial minimalism and fluid, reactive digital experiences.
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Footer / Scroll hint of hero with sharp borders */}
      <div className="max-w-7xl mx-auto w-full relative z-10 pt-8 flex justify-between items-end border-t border-neutral-900/10 dark:border-white/10">
        <div className="flex gap-12 text-xs font-mono uppercase tracking-widest text-neutral-900/50 dark:text-neutral-100/50">
          <div>
            <p className="text-gold font-semibold mb-1">Focus // Specialization</p>
            <p className="text-neutral-800 dark:text-neutral-200">Creative Systems & Typography</p>
          </div>
          <div className="hidden sm:block">
            <p className="text-gold font-semibold mb-1">Location // Contact</p>
            <p className="text-neutral-800 dark:text-neutral-200">LA — Paris // remote</p>
          </div>
        </div>

        <button
          onClick={handleScrollDown}
          className="group flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-neutral-900/60 dark:text-neutral-100/60 hover:text-gold dark:hover:text-gold transition-colors cursor-pointer"
        >
          <span>Explore Artifacts</span>
          <div className="w-8 h-8 border border-neutral-900/20 dark:border-white/20 rounded-none flex items-center justify-center group-hover:translate-y-1 transition-transform bg-cream dark:bg-neutral-900 text-neutral-900 dark:text-white">
            <ArrowDown className="w-3.5 h-3.5 text-gold" />
          </div>
        </button>
      </div>
    </section>
  );
}
