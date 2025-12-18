import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

// 1. Everything that stays the same regardless of language
const SHARED_DATA = {
  name: "Dominik Mueller",
  initials: "DM",
  url: "https://github.com/dominikmuellr",
  location: "Albacete, Spain",
  locationLink: "https://www.google.com/maps/place/Albacete",
  avatarUrl: "/me.jpg",
  skills: [
    "HTML5", "CSS", "JavaScript", "TypeScript", "Node.js", 
    "React.js", "Flutter", "Dart", "Docker", "Linux",
  ],
  contact: {
    email: "mailto:mllrdominik@gmail.com",
    social: {
      GitHub: { name: "GitHub", url: "https://github.com/dominikmuellr", icon: Icons.github, navbar: true },
      LinkedIn: { name: "LinkedIn", url: "https://linkedin.com/in/dominikmuellr", icon: Icons.linkedin, navbar: true },
      Flickr: { name: "Flickr", url: "https://flickr.com/photos/dmllr/", icon: Icons.flickr, navbar: true },
      Email: { name: "Send Email", url: "mailto:mllrdominik@gmail.com", icon: Icons.email, navbar: true },
    },
  },
} as const;

// 2. The translated content
export const DATA = {
  en: {
    ...SHARED_DATA,
    description: "From the kindergarten to the codebase. German Front-end Developer based in Spain, building privacy-first apps.",
    summary: "In late 2023, I traded my career as an Early Childhood Educator for code. I moved from Germany to Albacete to focus full-time on Front-End Development. I bring the patience and adaptability of a teacher into building intuitive, user-friendly software like Trudido.",
    navbar: [
      { href: "/", icon: HomeIcon, label: "Home" },
      { href: "/blog", icon: NotebookIcon, label: "Blog" },
    ],
    work: [
      {
        company: "Federal City of Bonn",
        href: "https://www.bonn.de/",
        title: "State-certified Educator (Early Childhood)",
        start: "May 2021",
        end: "Oct 2022",
        description: "Managed groups of children, handled documentation, and coordinated with parents and state agencies. Developed strong patience and crisis management skills.",
        logoUrl: "/bonn.png",
      },
    ],
    education: [
      { school: "IWK Koeln", degree: "State Certified Educator", start: "2018", end: "2021", logoUrl: "/iwk.png", href: "https://www.iwk.eu/" },
      { school: "H-BRS", degree: "Technical Journalism (Incomplete)", start: "2016", end: "2018", logoUrl: "/hbrs.jpg", href: "https://www.h-brs.de/de" },
      { school: "University of Siegen", degree: "Business Informatics (Incomplete)", start: "2014", end: "2016", logoUrl: "/siegen.png", href: "https://www.uni-siegen.de/" },
    ],
    projects: [
      {
        title: "Trudido",
        href: "https://github.com/dominikmuellr/trudido",
        dates: "Sept 2025 - Present",
        description: "Privacy-first, minimalist to-do list app built with Flutter. Zero tracking and offline-first.",
        technologies: ["Dart", "Kotlin", "Material You", "Android"],
        links: [{ type: "Source", href: "https://github.com/dominikmuellr/trudido", icon: "github" }],
        video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
      }
    ]
  },
  de: {
    ...SHARED_DATA,
    description: "Vom Kindergarten zur Codebase. Deutscher Front-End-Entwickler in Spanien, spezialisiert auf Privacy-First Apps.",
    summary: "Ende 2023 tauschte ich meinen Beruf als staatlich anerkannter Erzieher gegen das Programmieren ein. Ich zog von Deutschland nach Albacete, um mich voll auf die Front-End-Entwicklung zu konzentrieren. Die Geduld und Anpassungsfähigkeit eines Erziehers bringe ich nun in intuitive Software wie Trudido ein.",
    navbar: [
      { href: "/", icon: HomeIcon, label: "Home" },
      { href: "/blog", icon: NotebookIcon, label: "Blog" },
    ],
    work: [
      {
        company: "Bundesstadt Bonn",
        href: "https://www.bonn.de/",
        title: "Staatlich anerkannter Erzieher",
        start: "Mai 2021",
        end: "Okt 2022",
        description: "Leitung von Kindergruppen, Dokumentation und Koordination mit Eltern und Ämtern. Ausgeprägte Geduld und Krisenmanagement.",
        logoUrl: "/bonn.png",
      },
    ],
    education: [
      { school: "IWK Köln", degree: "Staatlich anerkannter Erzieher", start: "2018", end: "2021", logoUrl: "/iwk.png", href: "https://www.iwk.eu/" },
      { school: "H-BRS", degree: "Technikjournalismus (Abgebrochen)", start: "2016", end: "2018", logoUrl: "/hbrs.jpg", href: "https://www.h-brs.de/de" },
      { school: "Universität Siegen", degree: "Wirtschaftsinformatik (Abgebrochen)", start: "2014", end: "2016", logoUrl: "/siegen.png", href: "https://www.uni-siegen.de/" },
    ],
    projects: [
      {
        title: "Trudido",
        href: "https://github.com/dominikmuellr/trudido",
        dates: "Sept 2025 - Heute",
        description: "Privacy-first, minimalistische To-Do-App mit Flutter. Ohne Tracking und Offline-First Funktionalität.",
        technologies: ["Dart", "Kotlin", "Material You", "Android"],
        links: [{ type: "Source", href: "https://github.com/dominikmuellr/trudido", icon: "github" }],
        video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
      }
    ]
  },
  es: {
    ...SHARED_DATA,
    description: "Del jardín de infancia al código. Desarrollador Front-end alemán en España, creando apps que respetan la privacidad.",
    summary: "A finales de 2023, cambié mi carrera de educador infantil por la programación. Me mudé de Alemania a Albacete para centrarme totalmente en el desarrollo Front-End. Aporto la paciencia y adaptabilidad de un profesor al desarrollo de software intuitivo como Trudido.",
    navbar: [
      { href: "/", icon: HomeIcon, label: "Inicio" },
      { href: "/blog", icon: NotebookIcon, label: "Blog" },
    ],
    work: [
      {
        company: "Ciudad Federal de Bonn",
        href: "https://www.bonn.de/",
        title: "Educador infantil titulado",
        start: "Mayo 2021",
        end: "Oct 2022",
        description: "Gestión de grupos infantiles, documentación técnica y coordinación con padres y agencias estatales. Gran capacidad de paciencia y gestión de crisis.",
        logoUrl: "/bonn.png",
      },
    ],
    education: [
      { school: "IWK Koeln", degree: "Educador titulado", start: "2018", end: "2021", logoUrl: "/iwk.png", href: "https://www.iwk.eu/" },
      { school: "H-BRS", degree: "Periodismo técnico (Incompleto)", start: "2016", end: "2018", logoUrl: "/hbrs.jpg", href: "https://www.h-brs.de/de" },
      { school: "Universidad de Siegen", degree: "Informática empresarial (Incompleto)", start: "2014", end: "2016", logoUrl: "/siegen.png", href: "https://www.uni-siegen.de/" },
    ],
    projects: [
      {
        title: "Trudido",
        href: "https://github.com/dominikmuellr/trudido",
        dates: "Septiembre 2025 - Actualidad",
        description: "App de lista de tareas minimalista y privada hecha con Flutter. Sin rastreo y funcional sin conexión.",
        technologies: ["Dart", "Kotlin", "Material You", "Android"],
        links: [{ type: "Source", href: "https://github.com/dominikmuellr/trudido", icon: "github" }],
        video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
      }
    ]
  }
} as const;

export type Language = keyof typeof DATA;