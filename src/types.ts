export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  tags: string[];
  year: string;
  description: string;
  liveUrl?: string;
  details: {
    client: string;
    role: string;
    timeline: string;
    challenge: string;
    solution: string;
  };
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  avgDuration: string;
}

export interface Stat {
  value: string;
  label: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}
