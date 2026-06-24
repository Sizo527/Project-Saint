import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Globe, ArrowUpRight, Menu, X, Sun, Moon } from "lucide-react";

export default function Header() {
  const [time, setTime] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
      }
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/Los_Angeles",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-cream/85 dark:bg-neutral-950/85 backdrop-blur-md border-b border-neutral-900/10 dark:border-white/10 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo / Name with Brand Treatment */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display tracking-tight hover:opacity-85 transition-opacity text-left cursor-pointer"
        >
          <span className="font-display italic font-light text-lg sm:text-xl text-neutral-900 dark:text-neutral-100">Project</span>
          <span className="font-display font-bold text-lg sm:text-xl text-gold ml-1.5 uppercase tracking-wide">Saint.</span>
        </button>

        {/* Live Status & Local Time - Desktop */}
        <div className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-neutral-900/60 dark:text-neutral-100/60">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold/75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            <span>STUDIO STATUS: ACTIVE</span>
          </div>
          <div className="h-4 w-[1px] bg-neutral-900/20 dark:bg-white/10"></div>
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 animate-spin-slow text-gold" />
            <span>LOS ANGELES — {time || "09:14"} (PST)</span>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {["Projects", "Services", "About", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="relative text-xs font-mono uppercase tracking-wider text-neutral-900/70 dark:text-neutral-100/70 hover:text-gold dark:hover:text-gold transition-colors py-1 group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}

          {/* Theme Toggle Button Desktop */}
          <button
            onClick={toggleTheme}
            className="p-2.5 border border-neutral-900/10 dark:border-white/10 rounded-full hover:bg-neutral-900/5 dark:hover:bg-white/5 transition-all text-neutral-900/70 dark:text-neutral-100/70 hover:text-gold dark:hover:text-gold flex items-center justify-center cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-2 bg-gold text-black text-xs font-bold font-mono uppercase px-5 py-2.5 rounded-none border border-gold hover:bg-transparent hover:text-neutral-900 dark:hover:text-gold transition-all duration-300 shadow-sm"
          >
            Start Project <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Status Dot for Mobile */}
          <span className="relative flex h-2 w-2 mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold/75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
          </span>

          {/* Theme Toggle Button Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 border border-neutral-900/10 dark:border-white/10 rounded-full text-neutral-900 dark:text-neutral-100 hover:text-gold dark:hover:text-gold transition-all duration-300 flex items-center justify-center cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 border border-neutral-900 dark:border-white rounded-none hover:bg-gold hover:border-gold hover:text-black text-neutral-900 dark:text-neutral-100 transition-all duration-300 flex items-center justify-center cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-cream dark:bg-neutral-950 border-b border-neutral-900 dark:border-white py-8 px-6 flex flex-col gap-6 shadow-xl md:hidden z-40"
          >
            <div className="flex flex-col gap-4">
              {["Projects", "Services", "About", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-2xl font-display font-medium uppercase tracking-tight py-2 text-neutral-900 dark:text-neutral-100 hover:text-gold dark:hover:text-gold hover:translate-x-2 transition-transform duration-200"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="border-t border-neutral-900/10 dark:border-white/10 pt-6 flex flex-col gap-3 font-mono text-xs uppercase tracking-wider text-neutral-900/60 dark:text-neutral-100/60">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 animate-spin-slow text-gold" />
                <span>PST TIME: {time || "09:14"}</span>
              </div>
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-2 flex items-center justify-center gap-2 bg-gold text-black text-xs font-bold uppercase py-4 rounded-none border border-gold hover:bg-transparent hover:text-neutral-900 dark:hover:text-gold transition-all duration-300 font-mono"
              >
                Let's Work Together <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
