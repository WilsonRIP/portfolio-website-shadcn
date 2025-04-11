// Project data array
export interface ProjectData {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl?: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
  features?: string[];
  date: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Tailwind CSS.",
    longDescription: "This portfolio website showcases my skills and projects in a clean, responsive design. Built with Next.js 15 and styled with Tailwind CSS and shadcn/ui components, it features smooth animations, dark mode support, and responsive design for all devices. The site includes sections for skills, projects, and contact information.",
    imageUrl: "/images/projects/portfolio.jpg", // You'll need to add these images
    githubUrl: "https://github.com/WilsonRIP/portfolio-website",
    liveUrl: "https://wilsoniirip.com", // Replace with your actual URL
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Responsive design that works on all devices",
      "Dark mode support",
      "Animated page transitions and scroll effects",
      "Dynamic project pages",
      "GitHub integration for displaying projects",
      "Section highlighting in navigation"
    ],
    date: "September 2023"
  },
  {
    id: 2,
    slug: "streaming-dashboard",
    title: "Streaming Dashboard",
    description: "A customizable dashboard for streamers to manage their stream.",
    longDescription: "The Streaming Dashboard is a comprehensive tool designed to help content creators manage their streams more effectively. With real-time analytics, chat integration, and customizable widgets, it provides everything a streamer needs in one central location. The application is built with a React frontend and Node.js backend, with WebSocket support for real-time features.",
    imageUrl: "/images/projects/streaming.jpg",
    githubUrl: "https://github.com/WilsonRIP/streaming-dashboard",
    liveUrl: "https://streamdash.example.com",
    technologies: ["React", "Node.js", "WebSockets", "Express", "MongoDB"],
    features: [
      "Real-time viewer analytics",
      "Chat integration with moderation tools",
      "Customizable stream overlay widgets",
      "Alert management for subscribers and donations",
      "Stream scheduling and notification system"
    ],
    date: "June 2023"
  },
  {
    id: 3,
    slug: "photo-gallery-app",
    title: "Photo Gallery Application",
    description: "A responsive photo gallery with advanced filtering and search capabilities.",
    longDescription: "This photo gallery application provides photographers with a beautiful way to showcase their work. The gallery features a responsive grid layout, advanced filtering options, and image optimization for fast loading. It includes user authentication, allowing photographers to manage their portfolios securely, and visitors to create accounts to save their favorite photos.",
    imageUrl: "/images/projects/gallery.jpg",
    githubUrl: "https://github.com/WilsonRIP/photo-gallery",
    technologies: ["JavaScript", "CSS Grid", "Firebase", "Auth0"],
    features: [
      "Responsive masonry grid layout",
      "Image lazy loading and optimization",
      "Category-based filtering",
      "User authentication",
      "Favorites and collections system",
      "Advanced search with metadata support"
    ],
    date: "March 2023"
  }
];

// Function to get project by slug
export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData.find(project => project.slug === slug);
}

// Function to get all projects
export function getAllProjects(): ProjectData[] {
  return projectsData;
} 