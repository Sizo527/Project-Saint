import { Project, Service, Stat, Testimonial } from "./types";

export const STATS: Stat[] = [
  {
    value: "45+",
    label: "Success Projects",
    description: "Premium digital solutions delivered worldwide."
  },
  {
    value: "18",
    label: "Award Mentions",
    description: "Features in CSSDA, Awwwards, and Behance."
  },
  {
    value: "9+",
    label: "Years Experience",
    description: "Crafting digital identities since 2017."
  }
];

export const SERVICES: Service[] = [
  {
    id: "01",
    number: "01",
    title: "UI/UX Design",
    description: "Designing thoughtful, user-centric interfaces that balance form, function, and brand storytelling.",
    deliverables: ["User Research", "Wireframing & Prototyping", "Design System Creation", "High-Fidelity UI Design"],
    avgDuration: "3-5 Weeks"
  },
  {
    id: "02",
    number: "02",
    title: "Web Design",
    description: "Creating highly bespoke, modern, and responsive desktop & mobile layouts that break the grid.",
    deliverables: ["Responsive Layouts", "Custom Grid Systems", "Typography Audits", "Creative Coding Concepts"],
    avgDuration: "2-4 Weeks"
  },
  {
    id: "03",
    number: "03",
    title: "Landing Page Design",
    description: "Crafting high-impact, conversion-optimized standalone web experiences with flawless animations.",
    deliverables: ["Sales Funnel Mapping", "Copywriting Collaboration", "A/B Test Mockups", "Interactive Animations"],
    avgDuration: "1-2 Weeks"
  },
  {
    id: "04",
    number: "04",
    title: "UI Design Figma",
    description: "Building production-ready, beautifully documented component libraries and interactive Figma prototypes.",
    deliverables: ["Auto-Layout Component Kits", "Variable-Driven Dark/Light Themes", "Interactive Overlays", "Developer Handoff Guides"],
    avgDuration: "2-3 Weeks"
  },
  {
    id: "05",
    number: "05",
    title: "Mobile App Design",
    description: "Designing tactile, gesture-driven iOS & Android applications optimized for thumb reach and fluid motion.",
    deliverables: ["Micro-interaction Specs", "Gesture Mapping", "Platform-Specific Adaptation", "Interactive Flow Prototypes"],
    avgDuration: "4-6 Weeks"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "aether-os",
    title: "Aether OS",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800&h=600&sat=-100",
    tags: ["Concept", "Spatial Computing", "Figma"],
    year: "2026",
    description: "Redefining digital workspace interfaces with an eye-strain-free, pure geometric design system.",
    details: {
      client: "Aether Labs (Internal Project)",
      role: "Lead Interface Designer",
      timeline: "4 Months",
      challenge: "Standard screen interfaces are cluttered with legacy desktop metaphors that distract and restrict deep focus.",
      solution: "Designed an entirely spatial, windowless system operating on a dynamic bento-grid snapping model with custom micro-interactions."
    }
  },
  {
    id: "kromah",
    title: "Kromah",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800&h=600&sat=-100",
    tags: ["React", "E-Commerce", "Headless CMS"],
    year: "2025",
    description: "A fluid, image-heavy digital storefront with ultra-smooth transitions and a high-contrast brutalist layout.",
    details: {
      client: "Kromah Apparel Co.",
      role: "Creative Director & Developer",
      timeline: "3 Months",
      challenge: "Fast-fashion websites feel uniform, spammy, and cheap, significantly devaluing high-end structural clothing.",
      solution: "Engineered a cinematic storefront where product discovery feels like flipping through a pristine print lookbook with smooth scroll effects."
    }
  },
  {
    id: "soma",
    title: "Soma",
    category: "Mobile App Design",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800&h=600&sat=-100",
    tags: ["iOS App", "BLE Control", "Hardware UX"],
    year: "2025",
    description: "An intuitive mobile application companion that bridges physical dial adjustments with instant digital presets.",
    details: {
      client: "Soma Labs Sweden",
      role: "UX Researcher & Product Designer",
      timeline: "6 Months",
      challenge: "Synthesizer menus are deep and complex, distracting musicians from their live flow during intense performances.",
      solution: "Designed a clean, single-screen tactile dashboard mapping physical hardware knobs directly to real-time vector graphs on mobile screens."
    }
  },
  {
    id: "atelier-neue",
    title: "Atelier Neue",
    category: "UI Design Figma",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800&h=600&sat=-100",
    tags: ["Branding", "Web Layout", "Design System"],
    year: "2024",
    description: "A responsive editorial platform featuring fluid typography, rigid typographic alignments, and deep-zoom imagery.",
    details: {
      client: "Atelier Neue Architects",
      role: "Brand Strategist & Interactive Designer",
      timeline: "2 Months",
      challenge: "Architectural firms usually have static, non-responsive portfolios that fail to convey spatial scale and depth.",
      solution: "Engineered a full-screen modular grid system that allows users to walk through physical structures using vertical scroll-linked transitions."
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
