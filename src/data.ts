import { Project, Service, Stat, Testimonial } from "./types";

export const STATS: Stat[] = [
  {
    value: "10+",
    label: "Years Experience",
    description: "Honing my technical and creative craft across multiple mediums since 2016."
  },
  {
    value: "3",
    label: "Core Disciplines",
    description: "Seamlessly blending modern web development, cinematic videography, and photography."
  },
  {
    value: "100%",
    label: "Bespoke Delivery",
    description: "Every digital artifact is built and captured from the ground up—no generic templates."
  }
];

export const SERVICES: Service[] = [
  {
    id: "01",
    number: "01",
    title: "Web Design & Development",
    description: "Creating highly bespoke, modern, and responsive layouts tailored to your brand, built with React and robust modern frameworks.",
    deliverables: ["Responsive Layouts", "Custom Development", "Performance Optimization", "Headless CMS Integration"],
    avgDuration: "2-4 Weeks"
  },
  {
    id: "02",
    number: "02",
    title: "Landing Page Design",
    description: "Crafting high-impact, conversion-optimized standalone web experiences with flawless animations.",
    deliverables: ["Sales Funnel Mapping", "Copywriting Collaboration", "A/B Test Mockups", "Interactive Animations"],
    avgDuration: "1-2 Weeks"
  },
  {
    id: "03",
    number: "03",
    title: "Videography",
    description: "Capturing cinematic visuals and compelling stories through high-quality video production and meticulous post-production editing.",
    deliverables: ["Commercial Video", "Event Coverage", "Cinematic Storytelling", "Color Grading"],
    avgDuration: "1-3 Weeks"
  },
  {
    id: "04",
    number: "04",
    title: "Professional Photography",
    description: "Delivering pristine, high-resolution photography spanning professional portraits, events, and commercial products.",
    deliverables: ["Portrait Sessions", "Event Photography", "Product & Brand Shoots", "Retouching"],
    avgDuration: "1-2 Weeks"
  },
  {
    id: "05",
    number: "05",
    title: "Graphic Design",
    description: "Designing thoughtful, high-impact visual identities and marketing materials that balance aesthetic form and brand storytelling.",
    deliverables: ["Logo Design", "Brand Guidelines", "Social Media Assets", "Print & Digital Layouts"],
    avgDuration: "1-3 Weeks"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "mtshabezi-portal",
    title: "Mtshabezi High School",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800&h=600&sat=-100",
    tags: ["React", "TypeScript", "Headless CMS"],
    year: "2026",
    liveUrl: "https://mtshabezi-website-concept.vercel.app/",
    description: "A digital portal concept designed to modernize school workflows, featuring a headless CMS for effortless, real-time content updates by administrative staff.",
    details: {
      client: "Mtshabezi High School (Concept)",
      role: "Lead Developer & UX Designer",
      timeline: "3 Weeks",
      challenge: "Legacy school systems suffer from fragmented communication, making it difficult for staff to easily update students and parents.",
      solution: "Engineered a responsive web portal using React, integrated with a headless CMS to allow non-technical administrators full control."
    }
  },
  {
    id: "cinematic-reel",
    title: "Cinematic Videography",
    category: "Video Production",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800&h=600&sat=-100",
    tags: ["Sony Alpha", "Motion Graphics", "Color Grading"],
    year: "2025-2026",
    liveUrl: "https://vimeo.com/channels/staffpicks",
    description: "A curated collection of commercial, event, and creative video projects focusing on storytelling and high-fidelity visuals.",
    details: {
      client: "Various Freelance Clients",
      role: "Director of Photography & Editor",
      timeline: "Ongoing",
      challenge: "Delivering dynamic visual narratives that capture attention and align with specific brand identities.",
      solution: "Utilized the Sony mirrorless ecosystem and advanced post-production techniques to deliver crisp, color-graded motion assets."
    }
  },
  {
    id: "portrait-commercial-photo",
    title: "Portrait & Commercial Photography",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800&h=600&sat=-100",
    tags: ["Portraits", "Retouching", "Event Coverage"],
    year: "2025-2026",
    description: "High-resolution photography spanning professional portraits, event coverage, and creative brand shoots.",
    details: {
      client: "Various Freelance Clients",
      role: "Lead Photographer",
      timeline: "Ongoing",
      challenge: "Capturing authentic moments while maintaining a pristine, editorial aesthetic.",
      solution: "Combined natural lighting techniques with meticulous color grading to produce a cohesive visual portfolio."
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Project Saint has a rare talent for turning absolute minimalism into high-impact visual design. They didn't just build our website; they elevated our entire brand identity.",
    author: "Elena Rostov",
    role: "Founder",
    company: "Kromah Apparel",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150&sat=-100"
  },
  {
    quote: "The spatial UI concept they designed for Aether was incredibly complex, but Saint simplified it into something absolutely intuitive. Our developers had zero issues during handoff.",
    author: "Markus Vane",
    role: "VP of Product",
    company: "Aether Labs",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150&sat=-100"
  }
];
