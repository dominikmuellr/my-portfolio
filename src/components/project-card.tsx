"use client";

import { Badge } from "@/components/ui/badge";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { Icons } from "@/components/icons";
import { MagicCard } from "@/components/magicui/magic-card"; // Import MagicCard
import { useTheme } from "next-themes"; // Import useTheme for the glow effect

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: string;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const { theme } = useTheme();

  return (
    <MagicCard
  gradientFrom={theme === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"}
  gradientSize={350}
  gradientOpacity={0.5}
  className={cn(
    "border-none shadow-none",
    className
  )}
>
      <Link
        href={href || "#"}
        className="block cursor-pointer"
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>
      <CardHeader className="px-2 bg-transparent">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2 bg-transparent">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2 bg-transparent">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => {
              const IconComponent = Icons[link.icon as keyof typeof Icons];

              if (!IconComponent) {
                return null;
              }

              return (
                <Link href={link?.href} key={idx} target="_blank">
                  <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                    <IconComponent className="size-3" />
                    {link.type}
                  </Badge>
                </Link>
              );
            })}
          </div>
        )}
      </CardFooter>
    </MagicCard>
  );
}