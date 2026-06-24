import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES } from "../data";
import { ArrowUpRight, Check, Timer } from "lucide-react";

export default function ServicesList() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0); // Default to first service open

  return (
    <section id="services" className="py-24 px-4 md:px-8 bg-cream dark:bg-neutral-950 border-b border-neutral-900/10 dark:border-white/10 scroll-mt-10 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="font-mono text-[10px] uppercase tracking-widest text-gold block mb-3 font-bold">
            [ CAPABILITIES & SERVICES ]
          </span>
          <h3 className="text-4xl lg:text-5xl font-display font-bold uppercase tracking-tight text-neutral-900 dark:text-neutral-100">
            Professional <span className="font-light italic text-neutral-500 dark:text-neutral-400">Services</span>
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 font-sans mt-4 max-w-lg mx-auto text-sm leading-relaxed font-light">
            Delivering pristine visual quality from foundational workshops to developer-ready systems. Fully customized packages built around your strategic targets.
          </p>
        </div>

        {/* Hard Grid Dynamic Numbered Accordion List */}
        <div className="border border-neutral-900/10 dark:border-white/10 divide-y divide-neutral-900/10 dark:divide-white/10 bg-cream/30 dark:bg-neutral-950/30">
          {SERVICES.map((service, index) => {
            const isHovered = hoveredIndex === index;
            const isOpen = activeAccordion === index;

            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveAccordion(isOpen ? null : index)}
                className={`group p-6 md:p-8 cursor-pointer transition-all duration-300 rounded-none relative overflow-hidden ${
                  isOpen
                    ? "bg-neutral-950 text-cream dark:bg-white dark:text-black"
                    : "bg-transparent text-neutral-900 dark:text-neutral-100 hover:bg-neutral-900/5 dark:hover:bg-white/5"
                }`}
                layout="position"
              >
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 md:gap-10">
                    {/* Index */}
                    <span className={`text-xs font-mono font-bold tracking-widest ${
                      isOpen ? "text-gold" : "text-neutral-400 dark:text-neutral-500"
                    }`}>
                      {service.number} //
                    </span>
                    {/* Title */}
                    <span className="text-xl md:text-2xl font-display font-semibold uppercase tracking-tight">
                      {service.title}
                    </span>
                  </div>

                  {/* Hard Grid Action indicator */}
                  <div className={`w-10 h-10 border rounded-none flex items-center justify-center transition-all duration-300 ${
                    isOpen
                      ? "border-gold bg-gold text-black"
                      : "border-neutral-900/20 dark:border-white/20 bg-transparent text-neutral-900 dark:text-neutral-100"
                  }`}>
                    <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`} />
                  </div>
                </div>

                {/* Smooth Expandable Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 mt-6 border-t border-neutral-900/10 dark:border-white/10 space-y-6">
                        {/* Description */}
                        <p className={`text-sm md:text-base leading-relaxed font-light ${
                          isOpen ? "text-neutral-300 dark:text-neutral-700" : "text-neutral-600 dark:text-neutral-400"
                        }`}>
                          {service.description}
                        </p>

                        {/* Deliverables & Duration info */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end pt-2">
                          <div className="md:col-span-8 space-y-3">
                            <span className="font-mono text-[9px] uppercase tracking-widest block font-bold text-gold">
                              [ ENGAGEMENT DELIVERABLES ]
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {service.deliverables.map((item, dIndex) => (
                                <div key={dIndex} className="flex items-center gap-2.5 text-xs">
                                  <div className={`w-4 h-4 rounded-none flex items-center justify-center border ${
                                    isOpen ? "bg-gold/10 border-gold/30 text-gold" : "bg-neutral-900/5 border-neutral-900/25 text-neutral-900"
                                  }`}>
                                    <Check className="w-2.5 h-2.5" />
                                  </div>
                                  <span className="font-sans font-light">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="md:col-span-4 flex items-center gap-2.5 font-mono text-[10px] tracking-wider text-gold md:justify-end">
                            <Timer className="w-3.5 h-3.5" />
                            <span>EST. TIMELINE: {service.avgDuration}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
