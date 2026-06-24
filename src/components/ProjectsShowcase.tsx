import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { ArrowUpRight, X, Briefcase, Calendar, User, Eye } from "lucide-react";

export default function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Web Design", "Video Production", "Photography"];

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-4 md:px-8 bg-cream dark:bg-neutral-950 border-b border-neutral-900/10 dark:border-white/10 scroll-mt-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-neutral-900/10 dark:border-white/10 pb-10">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold block mb-3 font-bold">
              [ PORTFOLIO SHOWCASE ]
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-extrabold uppercase tracking-tight text-neutral-900 dark:text-neutral-100">
              Featured <span className="font-light italic text-neutral-500 dark:text-neutral-400">Projects</span>
            </h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 font-sans max-w-sm text-sm leading-relaxed font-light">
            A curated selection of commercial and experimental designs, built with a strict emphasis on raw minimalism, absolute grid alignment, and fluid transitions.
          </p>
        </div>

        {/* Categories Tabs in a Hard Grid Ribbon */}
        <div className="flex flex-wrap border border-neutral-900/10 dark:border-white/10 mb-12 bg-cream/20 dark:bg-neutral-950/20">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-4 font-mono text-[11px] uppercase tracking-widest transition-all duration-300 cursor-pointer border-r border-b sm:border-b-0 border-neutral-900/10 dark:border-white/10 relative ${
                  isActive 
                    ? "bg-neutral-950 text-cream dark:bg-white dark:text-black font-bold" 
                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-900/5 dark:hover:bg-white/5 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Bento/Grid Projects List */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer flex flex-col justify-between border border-neutral-900/10 dark:border-white/10 p-6 bg-cream/15 dark:bg-neutral-900/5 hover:border-gold dark:hover:border-gold transition-colors duration-300"
                onClick={() => setSelectedProject(project)}
              >
                {/* Visual Cover Wrapper */}
                <div className="relative overflow-hidden border border-neutral-950 dark:border-neutral-100 aspect-[4/3] bg-neutral-100 dark:bg-neutral-900 mb-6 rounded-none">
                  <div className="absolute inset-0 bg-neutral-950/15 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  
                  {/* Subtle Year Indicator Badge */}
                  <span className="absolute top-4 right-4 z-20 bg-neutral-950 text-cream dark:bg-cream dark:text-black border border-neutral-950 px-3 py-1 font-mono text-[10px] tracking-widest uppercase">
                    {project.year}
                  </span>

                  {/* Hover Actions Trigger Overlay */}
                  <div className="absolute inset-0 bg-neutral-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center">
                    <span className="flex items-center gap-2 bg-gold text-black font-mono text-xs uppercase tracking-widest px-6 py-3 rounded-none font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      View Details <Eye className="w-4 h-4" />
                    </span>
                  </div>

                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-102 transition-all duration-750 ease-out"
                  />
                </div>

                {/* Typography metadata */}
                <div className="flex justify-between items-start pt-2 border-t border-neutral-900/10 dark:border-white/10 mt-2">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gold mb-1 block font-bold">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-display font-bold uppercase tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-gold transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Hard Grid Action Indicator */}
                  <div className="w-10 h-10 border border-neutral-900/20 dark:border-white/20 rounded-none flex items-center justify-center group-hover:bg-gold group-hover:border-gold group-hover:text-black text-neutral-900 dark:text-neutral-100 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>

                {/* Technical Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-neutral-900/5 dark:border-white/5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-neutral-900/5 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 font-mono text-[9px] tracking-widest uppercase border border-neutral-900/10 dark:border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state if nothing matches */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-24 border border-dashed border-neutral-900/15 dark:border-white/15">
            <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
              No matching projects launched in this category yet.
            </p>
          </div>
        )}
      </div>

      {/* Project Detail Drawer / Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-end text-neutral-900 dark:text-neutral-100">
            {/* Backdrop layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm"
            />

            {/* Slide-out drawer container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="relative w-full max-w-2xl h-full bg-cream dark:bg-neutral-950 shadow-2xl overflow-y-auto flex flex-col border-l border-neutral-900/20 dark:border-white/10 z-10"
            >
              {/* Drawer Sticky Header */}
              <div className="sticky top-0 bg-cream/95 dark:bg-neutral-950/95 backdrop-blur border-b border-neutral-900/10 dark:border-white/10 px-8 py-6 flex items-center justify-between z-30">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold">
                    PROJECT FILE // {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-display font-extrabold uppercase tracking-tight text-neutral-900 dark:text-neutral-100 mt-1">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-3 border border-neutral-900 dark:border-white rounded-none hover:bg-gold hover:border-gold hover:text-black text-neutral-900 dark:text-neutral-100 transition-all duration-300 cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Drawer Scroll Body */}
              <div className="p-8 space-y-8 flex-grow">
                {/* Large high resolution project cover photo */}
                <div className="overflow-hidden border border-neutral-950 dark:border-white aspect-[16/10] bg-neutral-100 dark:bg-neutral-900 shadow-sm rounded-none">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-95"
                  />
                </div>

                {/* High level overview metadata grid */}
                <div className="grid grid-cols-3 gap-4 border-t border-b border-neutral-900/10 dark:border-white/10 py-6">
                  <div>
                    <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-gold font-bold mb-1">
                      <User className="w-3.5 h-3.5" /> CLIENT
                    </span>
                    <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 leading-tight uppercase font-sans">
                      {selectedProject.details.client}
                    </p>
                  </div>
                  <div>
                    <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-gold font-bold mb-1">
                      <Briefcase className="w-3.5 h-3.5" /> ROLE
                    </span>
                    <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 leading-tight uppercase font-sans">
                      {selectedProject.details.role}
                    </p>
                  </div>
                  <div>
                    <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-gold font-bold mb-1">
                      <Calendar className="w-3.5 h-3.5" /> TIMELINE
                    </span>
                    <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 leading-tight uppercase font-sans">
                      {selectedProject.details.timeline}
                    </p>
                  </div>
                </div>

                {/* Description and tags */}
                <div className="space-y-4">
                  <h4 className="font-display font-bold text-lg uppercase text-neutral-900 dark:text-neutral-100">
                    Project Overview
                  </h4>
                  <p className="text-neutral-700 dark:text-neutral-300 text-base leading-relaxed font-light">
                    {selectedProject.description}
                  </p>
                  {selectedProject.liveUrl && (
                    <div className="pt-2">
                      <a 
                        href={selectedProject.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono font-semibold tracking-wider uppercase transition-all duration-300 border bg-neutral-950 text-cream dark:bg-white dark:text-black border-neutral-950 dark:border-white hover:bg-transparent hover:text-neutral-950 dark:hover:bg-transparent dark:hover:text-white"
                      >
                        View Live Site <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Detailed Challenge & Solution breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="p-5 border border-red-500/20 bg-red-500/5 dark:bg-red-950/5 rounded-none">
                    <h5 className="font-mono text-[10px] uppercase tracking-widest text-red-600 dark:text-red-400 font-bold mb-2">
                      [ The Challenge ]
                    </h5>
                    <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                      {selectedProject.details.challenge}
                    </p>
                  </div>
                  <div className="p-5 border border-gold/30 bg-gold/5 rounded-none">
                    <h5 className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold mb-2">
                      [ The Solution ]
                    </h5>
                    <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                      {selectedProject.details.solution}
                    </p>
                  </div>
                </div>

                {/* Technology list tags */}
                <div className="pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 block mb-2 font-bold">
                    LAUNCHED TECHNOLOGY / STACK
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 bg-neutral-950 dark:bg-white text-cream dark:text-black font-mono text-xs tracking-wider uppercase border border-neutral-950 dark:border-white rounded-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Drawer Footer CTA */}
              <div className="sticky bottom-0 bg-cream/95 dark:bg-neutral-950/95 border-t border-neutral-900/10 dark:border-white/10 px-8 py-6 flex items-center justify-between z-30">
                <span className="text-xs font-mono text-neutral-500 uppercase">
                  Interested in similar setups?
                </span>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center gap-2 bg-gold text-black text-xs font-bold uppercase px-5 py-3 rounded-none border border-gold hover:bg-transparent hover:text-neutral-900 dark:hover:text-gold transition-all duration-300 font-mono cursor-pointer"
                >
                  Inquire Project <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
