import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  // Animate progress percentage from 0 to 100
  useEffect(() => {
    const duration = 1600; // 1.6 seconds loading time
    const intervalTime = 16; // ~60fps
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          // Let it sit at 100% for a brief moment before triggering complete
          setTimeout(onComplete, 250);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Splitting text for staggered character reveal
  const title1 = "Project";
  const title2 = "Saint";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const charVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom ultra-smooth easeOutExpo
      },
    },
  };

  const subtitleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      id="portfolio-loader"
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%",
        transition: { 
          duration: 0.85, 
          ease: [0.76, 0, 0.24, 1] // Luxurious curtain slide-up
        } 
      }}
      className="fixed inset-0 z-[9999] bg-neutral-950 text-white flex flex-col justify-between p-8 md:p-16 select-none border-b border-gold/20"
    >
      {/* Top Metadata */}
      <div className="flex justify-between items-center w-full border-b border-white/10 pb-6">
        <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
          PROJECT SAINT // DIGITAL STUDIO
        </span>
        <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
          EST. 2026 // PARIS — LA
        </span>
      </div>

      {/* Center Text Reveal */}
      <div className="flex flex-col items-center justify-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-display leading-[0.95] tracking-tight text-6xl sm:text-7xl md:text-8xl lg:text-[7.5vw] flex flex-wrap gap-x-6 justify-center overflow-hidden py-2"
        >
          {/* Word 1 - Playfair Italic Serif */}
          <span className="flex overflow-hidden py-1 italic font-light text-neutral-100">
            {title1.split("").map((char, index) => (
              <motion.span
                key={`word1-char-${index}`}
                variants={charVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>

          {/* Word 2 - Playfair Bold Serif Gold */}
          <span className="flex overflow-hidden py-1 font-bold text-gold">
            {title2.split("").map((char, index) => (
              <motion.span
                key={`word2-char-${index}`}
                variants={charVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
        </motion.div>

        {/* Subtitle Reveal */}
        <motion.p
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 text-sm sm:text-base text-neutral-400 max-w-md font-sans tracking-wide leading-relaxed font-light"
        >
          Crafting pristine, high-contrast digital experiences with a strict, grid-based editorial aesthetic.
        </motion.p>
      </div>

      {/* Bottom Progress Tracker */}
      <div className="flex flex-col w-full gap-4 border-t border-white/5 pt-6">
        {/* Progress Numbers */}
        <div className="flex justify-between items-end font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
          <span>INITIALIZING CORE ARCHITECTURE</span>
          <span className="text-gold text-base font-bold">
            {Math.min(Math.round(progress), 100).toString().padStart(3, "0")}%
          </span>
        </div>

        {/* Linear Progress Bar */}
        <div className="w-full h-[1px] bg-neutral-900 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gold origin-left"
            style={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
