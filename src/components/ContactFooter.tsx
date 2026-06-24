import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Send, CheckCircle2, Heart } from "lucide-react";

export default function ContactFooter() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    setIsSubmitting(true);
    // Simulate API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");
      setSubject("");
      setMessage("");
      
      // Auto dismiss success prompt after 4s
      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    }, 1200);
  };

  const socialLinks = [
    { label: "Instagram", href: "https://instagram.com/just.sizo" },
    { label: "WhatsApp", href: "https://wa.me/263782581863" },
    { label: "Email Me", href: "mailto:sizosibanda14@gmail.com" }
  ];

  return (
    <footer id="contact" className="bg-neutral-950 text-white py-24 px-4 md:px-8 border-t-2 border-gold relative overflow-hidden rounded-none">
      {/* Dynamic line vector accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Giant typographic headline with Playfair serif italic & gold accent */}
        <div className="text-center mb-16 select-none border-b border-white/10 pb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[10vw] sm:text-[8vw] font-display font-bold uppercase leading-none tracking-tight text-neutral-100"
          >
            Let's <span className="font-light italic text-neutral-400 font-serif">Collaborate</span> on <span className="text-gold italic font-semibold font-serif">Saint.</span>
          </motion.h2>
          <p className="text-gold font-mono text-[10px] uppercase tracking-widest mt-6 font-bold">
            AVAILABLE FOR BESPOKE PROJECTS, FULL SYSTEMS, & BRAND CONSULTATION
          </p>
        </div>

        {/* Dynamic Form + Links Layout aligned to a hard grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start border-b border-white/10 pb-16">
          
          {/* Quick info & Social handlers column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-gold block mb-3 font-bold">
                [ STUDIO COLLABORATIONS ]
              </span>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-sm font-sans font-light">
                Have a vision, complex platform requirement, or want to challenge our system? Submit an inquiry and our digital studio will respond within 24 hours.
              </p>
            </div>

            {/* Quick stats / contacts */}
            <div className="space-y-3 font-mono text-[11px] uppercase tracking-wider text-neutral-400 border-l border-gold pl-4">
              <p>EMAIL: <a href="mailto:sizosibanda14@gmail.com" className="text-white hover:text-gold transition-colors font-bold">sizosibanda14@gmail.com</a></p>
              <p>DIRECT LINE (WA): <a href="https://wa.me/263782581863" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors font-bold">+263 78 258 1863</a></p>
              <p>REPRESENTATION: BULAWAYO // GLOBAL REMOTE</p>
            </div>

            {/* Social handles list in a hard grid array */}
            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-gold block font-bold">
                [ NETWORK REFS ]
              </span>
              <div className="grid grid-cols-2 gap-2 max-w-sm">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 border border-white/10 hover:border-gold hover:bg-white/5 transition-all uppercase tracking-widest text-[9px] font-mono font-bold flex items-center justify-between"
                  >
                    {link.label} 
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold group-hover:rotate-45 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Clean minimal Contact Form Column with Square Corners */}
          <div className="lg:col-span-7 bg-neutral-950 p-8 md:p-10 border border-white/10 shadow-2xl relative rounded-none">
            
            {/* Visual Corner Highlights */}
            <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-gold" />
            <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-gold" />
            <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-gold" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-gold" />

            <span className="font-mono text-[10px] uppercase tracking-widest text-gold block mb-6 font-bold">
              [ TRANSMIT DIGITAL FILE INQUIRY ]
            </span>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email field */}
                <div className="space-y-2">
                  <label htmlFor="form-email" className="block text-[9px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
                    Your Registered Email *
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-neutral-900/50 border border-white/10 rounded-none px-4 py-3.5 text-sm text-white focus:outline-none focus:border-gold transition-colors placeholder:text-neutral-600 font-sans font-light"
                  />
                </div>

                {/* Subject field */}
                <div className="space-y-2">
                  <label htmlFor="form-subject" className="block text-[9px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
                    Objective / Budget
                  </label>
                  <input
                    id="form-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Design System Snapping"
                    className="w-full bg-neutral-900/50 border border-white/10 rounded-none px-4 py-3.5 text-sm text-white focus:outline-none focus:border-gold transition-colors placeholder:text-neutral-600 font-sans font-light"
                  />
                </div>
              </div>

              {/* Message text area */}
              <div className="space-y-2">
                <label htmlFor="form-message" className="block text-[9px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
                  Detailed Project Scope / Directives *
                </label>
                <textarea
                  id="form-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your design specifications, visual alignments, and functional needs..."
                  className="w-full bg-neutral-900/50 border border-white/10 rounded-none px-4 py-3.5 text-sm text-white focus:outline-none focus:border-gold transition-colors placeholder:text-neutral-600 resize-none font-sans font-light"
                />
              </div>

              {/* Submit Button & Notification Prompt */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="flex items-center justify-center gap-2 bg-gold text-black font-bold font-mono uppercase tracking-widest text-[11px] px-8 py-4 rounded-none hover:bg-white hover:text-black hover:border-white transition-all cursor-pointer border border-gold"
                >
                  {isSubmitting ? (
                    "TRANSMITTING FILE..."
                  ) : (
                    <>
                      TRANSMIT MESSAGE <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-gold font-mono text-[9px] uppercase tracking-widest bg-gold/10 border border-gold/30 px-4 py-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-gold" />
                      <span>Transmitted successfully to Saint!</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Sub-row details */}
        <div className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          <p>© {new Date().getFullYear()} PROJECT SAINT STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-2">
            <span>PIXEL PERFECT MINIMAL GRID SYNERGY</span>
            <Heart className="w-3 h-3 text-gold fill-gold animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
}
