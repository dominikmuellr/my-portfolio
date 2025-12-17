import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Dominik Mueller",
  initials: "DM",
  url: "http://localhost:8080",
  location: "Albacete, Castile-La Mancha, Spain",
  locationLink: "https://www.google.com/maps/place/Albacete",
  description:
    "Early State-certified Educator (Early Childhood) turned Front-end Developer. I love building things and helping people.",
  summary:
    "At the end of 2023, I quit my job as an Early Childhood Educator to go fulltime into learning everything about Front-End Developement.",
  avatarUrl: "/me.jpg",
  skills: ["HTML5", "CSS", "JavaScript", "Node.js", "React.js"],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mailto:mllrdominik@gmail.com",
    tel: "+123456789",
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
      description: "",
    },
  ],
  education: [
    {
      school: "IWK Koeln",
      href: "https://www.iwk.eu/",
      degree: "xxxxxxxxxxxxx",
      logoUrl: "/iwk.png",
      start: "xxxx",
      end: "xxxx",
    },
    {
      school: "Hochschule Bonn-Rhein-Sieg University of Applied Science",
      href: "https://www.h-brs.de/de",
      degree: "xxxxxxxxxxxx",
      logoUrl: "/hbrs.jpg",
      start: "xxxx",
      end: "xxxx",
    },
    {
      school: "Universitaet Siegen",
      href: "https://www.uni-siegen.de/",
      degree: "xxxxxxxxxxx",
      logoUrl: "/siegen.png",
      start: "xxxx",
      end: "xxxx",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: "globe",
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
} as const;
