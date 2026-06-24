import React from "react";
import { motion } from "motion/react";
import { STATS } from "../data";

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
              NKOSI SIBANDA // CREATIVE DIRECTOR
            </div>
          </div>

          {/* Right Column: Testimonial-Style Quote Block */}
          <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-center relative group overflow-hidden bg-neutral-900/5 dark:bg-white/5">
            {/* Giant typographic background quote mark */}
            <div className="absolute top-0 right-4 text-[14rem] font-display text-gold/10 dark:text-gold/10 leading-none select-none pointer-events-none group-hover:text-gold/20 transition-colors duration-700">
              ”
            </div>
            
            <div className="relative z-10 space-y-8 mt-8">
              {/* Proper smart quotes used here */}
              <blockquote className="text-xl md:text-2xl text-neutral-900 dark:text-neutral-100 leading-relaxed font-display font-light italic pr-12">
                “Great digital experiences are not about what you add, but what you have the courage to leave behind. I build platforms and capture visuals that cut through the noise with absolute clarity.”
              </blockquote>
              
              <div className="flex items-center gap-4 pt-8 border-t border-neutral-900/10 dark:border-white/10">
                {/* Monogram Badge */}
                <div className="w-12 h-12 rounded-none border border-gold/30 bg-gold/5 flex items-center justify-center text-gold font-serif italic font-bold text-xl">
                  S.
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-neutral-900 dark:text-neutral-100 font-bold">Nkosi Sibanda</div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-gold mt-1">Founder // Project Saint</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Grid Stats */}
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
