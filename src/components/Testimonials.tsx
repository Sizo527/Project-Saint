import React from "react";
import { motion } from "motion/react";
import { TESTIMONIALS } from "../data";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 px-4 md:px-8 bg-cream/60 dark:bg-neutral-900/20 border-b border-neutral-900/10 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-16 text-center md:text-left border-b border-neutral-900/10 dark:border-white/10 pb-8">
          <span className="font-mono text-[10px] uppercase tracking-widest text-gold block mb-3 font-bold">
            [ TRUSTED PARTNERSHIPS ]
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold uppercase tracking-tight text-neutral-900 dark:text-neutral-100">
            Client <span className="font-light italic text-neutral-500 dark:text-neutral-400">Collaborations</span>
          </h2>
        </div>

        {/* Hard Grid Testimonials Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-8 md:p-10 border border-neutral-900/15 dark:border-white/10 bg-cream/30 dark:bg-neutral-950/30 rounded-none flex flex-col justify-between group hover:border-gold dark:hover:border-gold transition-colors duration-300"
            >
              {/* Subtle Quote Icon in Gold */}
              <div className="absolute top-6 right-8 text-gold/20 dark:text-gold/10 pointer-events-none">
                <Quote className="w-12 h-12 stroke-[1]" />
              </div>

              {/* Editorial Playfair Quote */}
              <div className="space-y-6 relative z-10">
                <p className="text-xl md:text-2xl text-neutral-900 dark:text-neutral-100 leading-relaxed font-display font-light italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author info with Square gold-bordered avatars */}
              <div className="flex items-center gap-4 pt-8 mt-10 border-t border-neutral-900/10 dark:border-white/10 relative z-10">
                <div className="w-14 h-14 rounded-none overflow-hidden border border-gold bg-neutral-100 dark:bg-neutral-900 shrink-0">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm uppercase text-neutral-900 dark:text-neutral-100 tracking-wide">
                    {t.author}
                  </h4>
                  <p className="text-[10px] text-neutral-500 dark:text-neutral-400 font-mono uppercase tracking-widest mt-1">
                    {t.role} // <span className="text-gold font-bold">{t.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
