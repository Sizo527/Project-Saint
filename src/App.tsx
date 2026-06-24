/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutStats from "./components/AboutStats";
import ProjectsShowcase from "./components/ProjectsShowcase";
import ServicesList from "./components/ServicesList";
import Testimonials from "./components/Testimonials";
import ContactFooter from "./components/ContactFooter";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Disable/enable scrolling based on loading state
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-cream dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans antialiased selection:bg-gold selection:text-black dark:selection:bg-gold dark:selection:text-black transition-colors duration-350">
      {/* High-Performance Custom Interactive Cursor */}
      <CustomCursor />

      {/* Loading Screen Overlay */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Sticky Header */}
      <Header />

      {/* Main Page Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About & Stats Grid Section */}
        <AboutStats />

        {/* Filterable Projects Showcase Section */}
        <ProjectsShowcase />

        {/* Interactive Services Section */}
        <ServicesList />

        {/* Elegant Testimonials Section */}
        <Testimonials />
      </main>

      {/* Contact Form & High Impact Footer */}
      <ContactFooter />
    </div>
  );
}
