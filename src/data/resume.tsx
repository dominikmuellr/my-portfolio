import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Dominik Mueller",
  initials: "DM",
  url: "https://github.com/dominikmuellr",
  location: "Albacete, Spain",
  locationLink: "https://www.google.com/maps/place/Albacete,+Spain",
  description:
    "From the kindergarten to the codebase. German Front-end Developer based in Spain, building privacy-first apps.",
  summary:
    "In late 2023, I traded my career as an Early Childhood Educator for code. I moved from Germany to Albacete to focus full-time on Front-End Development. I bring the patience and adaptability of a teacher into building intuitive, user-friendly software like Trudido.",
  avatarUrl: "/me.jpg",
  skills: [
    "HTML5",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "React.js",
    "Flutter",
    "Dart",
    "Docker",
    "Linux",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mailto:mllrdominik@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dominikmuellr",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/dominikmuellr",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,
        navbar: false,
      },
      Flickr: {
        name: "Flickr",
        url: "https://flickr.com/photos/dmllr/",
        icon: Icons.flickr,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:mllrdominik@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Federal City of Bonn",
      href: "https://www.bonn.de/",
      badges: [],
      location: "Bonn",
      title: "State-certified Educator (Early Childhood)",
      logoUrl: "/bonn.png",
      start: "May 2021",
      end: "Oct 2022",
      description: "Managed groups of children, handled documentation, and coordinated with parents and state agencies. Developed strong patience and crisis management skills.",
    },
  ],
  education: [
    {
      school: "IWK Koeln",
      href: "https://www.iwk.eu/",
      degree: "State Certified Educator",
      logoUrl: "/iwk.png",
      start: "xxxx",
      end: "xxxx",
    },
    {
      school: "Hochschule Bonn-Rhein-Sieg University of Applied Science",
      href: "https://www.h-brs.de/de",
      degree: "Technical Journalism (Incomplete)",
      logoUrl: "/hbrs.jpg",
      start: "xxxx",
      end: "xxxx",
    },
    {
      school: "Universitaet Siegen",
      href: "https://www.uni-siegen.de/",
      degree: "Business Informatics (Incomplete)",
      logoUrl: "/siegen.png",
      start: "xxxx",
      end: "xxxx",
    },
  ],
  projects: [
    {
      title: "Trudido",
      href: "https://github.com/dominikmuellr/trudido",
      dates: "September 2025 - Present",
      active: true,
      description:
        "[Trudido](https://github.com/dominikmuellr/trudido) is a privacy-first, minimalist to-do list app built with Flutter and Material You. Designed to respect user data with zero tracking and offline-first functionality",
      technologies: [
        "Dart",
        "Kotlin",
        "Material You",
        "Android",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/dominikmuellr/trudido",
          icon: "github",
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
} as const;
