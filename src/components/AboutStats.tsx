import React from "react";
import { motion } from "motion/react";
import { STATS } from "../data";
import { Sparkles, Compass } from "lucide-react";

export default function AboutStats() {
  return (
    <section id="about" className="relative bg-cream dark:bg-neutral-950 border-t border-neutral-900/15 dark:border-white/10 transition-colors duration-300">
      
      {/* Editorial Statement Block with Deliberate Hard Grid Borders */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="border border-neutral-900/10 dark:border-white/10 bg-cream/30 dark:bg-neutral-950/30 grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-900/10 dark:divide-white/10">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 p-6 md:p-10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-gold block mb-4 font-bold">
                [ STUDIO PHILOSOPHY ]
              </span>
              <h2 className="text-4xl lg:text-5xl font-display font-bold leading-none tracking-tight text-neutral-900 dark:text-neutral-100">
                Design <br />
                <span className="font-light italic text-neutral-500 dark:text-neutral-400">that feels</span> <br />
                <span className="text-gold italic font-semibold font-serif">intelligent.</span>
              </h2>
            </div>
            
            <div className="mt-12 pt-6 border-t border-neutral-900/10 dark:border-white/10 text-xs font-mono uppercase tracking-widest text-neutral-500">
              GARED MATTHEW // CHIEF STRATEGIST
            </div>
          </div>

          {/* Right Column: Detailed copy */}
          <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-between space-y-6">
            <div className="text-neutral-800 dark:text-neutral-200 space-y-6 text-base sm:text-lg font-sans font-light leading-relaxed">
              <p>
                We believe great design is not about what you add, but what you have the courage to leave behind. In a world full of clutter, noise, and complex animations, high-contrast simplicity stands out with absolute clarity.
              </p>
              <p>
                Every element, layout grid, and typographic pairing is deliberately crafted to draw the eye to the content. We merge raw European minimalism with modern reactive animations, creating digital spaces that feel both classic and highly futuristic.
              </p>
            </div>
            
            <div className="pt-6 border-t border-neutral-900/10 dark:border-white/10 flex flex-wrap gap-8 text-[11px] font-mono uppercase tracking-widest text-neutral-800 dark:text-neutral-200">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold" />
                <span>Minimalist Rigor</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-gold" />
                <span>Grid-Restrained Layouts</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Grid Stats in a tight, structured hard-grid container */}
      <div className="border-t border-b border-neutral-900/15 dark:border-white/15 bg-cream/40 dark:bg-neutral-900/20 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 border border-neutral-900/10 dark:border-white/10 divide-y md:divide-y-0 md:divide-x divide-neutral-900/10 dark:divide-white/10 bg-cream/20 dark:bg-neutral-950/20 text-center">
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="px-6 py-12 group cursor-default"
              >
                {/* Numbers in Playfair Display with Gold tint */}
                <h3 className="text-6xl lg:text-7xl font-display font-extrabold text-gold group-hover:scale-102 transition-transform duration-500 tracking-tight">
                  {stat.value}
                </h3>
                <h4 className="uppercase text-xs tracking-widest mt-4 font-bold font-mono text-neutral-900 dark:text-neutral-100">
                  {stat.label}
                </h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans mt-3 max-w-[240px] mx-auto leading-relaxed font-light">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
