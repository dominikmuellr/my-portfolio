"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA, Language } from "@/data/resume";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

// 🗣️ UI Translations for Section Headers
const UI_TEXT = {
  en: {
    about: "About",
    work: "Work Experience",
    education: "Education",
    skills: "Skills",
    projects: "My Projects",
    projectsTitle: "Check out my latest work",
    projectsDesc: "I've worked on a variety of projects. Here are a few of my favorites.",
    contact: "Contact",
    contactTitle: "Get in Touch",
    contactText1: "Want to get in contact? Just mail me",
    contactLink: "here",
    contactText2: "and I'll respond whenever possible."
  },
  de: {
    about: "Über mich",
    work: "Berufserfahrung",
    education: "Ausbildung",
    skills: "Fähigkeiten",
    projects: "Meine Projekte",
    projectsTitle: "Meine neuesten Arbeiten",
    projectsDesc: "Ich habe an verschiedenen Projekten gearbeitet. Hier sind einige meiner Favoriten.",
    contact: "Kontakt",
    contactTitle: "Kontakt aufnehmen",
    contactText1: "Möchten Sie Kontakt aufnehmen? Schreiben Sie mir einfach",
    contactLink: "hier",
    contactText2: "und ich antworte so schnell wie möglich."
  },
  es: {
    about: "Sobre mí",
    work: "Experiencia Laboral",
    education: "Educación",
    skills: "Habilidades",
    projects: "Mis Proyectos",
    projectsTitle: "Mis últimos trabajos",
    projectsDesc: "He trabajado en una variedad de proyectos. Aquí están algunos de mis favoritos.",
    contact: "Contacto",
    contactTitle: "Ponte en Contacto",
    contactText1: "¿Quieres ponerte en contacto? Envíame un correo",
    contactLink: "aquí",
    contactText2: "y responderé lo antes posible."
  }
};

export default function Page() {
  const { lang } = useLanguage();
  
  // 1. Get the dynamic resume content (Jobs, Schools, Summary)
  const content = DATA[lang as Language];

  // 2. Get the static UI labels (Headers, Buttons)
  const ui = UI_TEXT[lang as Language];

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      
      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative flex flex-col items-center justify-center overflow-hidden py-20" >
        <div className="mx-auto w-full max-w-2xl space-y-8 z-10">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5 text-center sm:text-left">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${content.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={content.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <Link
                  href={content.locationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {content.location}
                </Link>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-32 rounded-full border overflow">
                <AvatarImage
                  alt={content.name}
                  src={content.avatarUrl}
                  className="object-cover w-full h-full"
                />
                <AvatarFallback>{content.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          {/* Dynamic Label */}
          <h2 className="text-xl font-bold">{ui.about}</h2> 
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {content.summary}
          </Markdown>
        </BlurFade>
      </section>

      {/* --- WORK SECTION --- */}
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            {/* Dynamic Label */}
            <h2 className="text-xl font-bold">{ui.work}</h2>
          </BlurFade>
          {content.work.map((work, id: number) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* --- EDUCATION SECTION --- */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
             {/* Dynamic Label */}
            <h2 className="text-xl font-bold">{ui.education}</h2>
          </BlurFade>
          {content.education.map((education, id: number) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
             {/* Dynamic Label */}
            <h2 className="text-xl font-bold">{ui.skills}</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {content.skills.map((skill: string, id: number) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  {ui.projects}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {ui.projectsTitle}
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {ui.projectsDesc}
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {content.projects.map((project, id: number) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                {ui.contact}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {ui.contactTitle}
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {ui.contactText1}{" "}
                <Link href={content.contact.email} className="text-blue-500 hover:underline">
                  {ui.contactLink}
                </Link>{" "}
                {ui.contactText2}
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}