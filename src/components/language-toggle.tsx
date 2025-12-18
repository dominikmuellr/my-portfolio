"use client";

import * as React from "react";
import { Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/data/resume";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  const labels: Record<Language, string> = {
    en: "English",
    de: "Deutsch",
    es: "Español",
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        {/* Added shrink-0 to prevent the button from squishing in the flex dock */}
        <Button variant="ghost" size="icon" className="size-12 shrink-0 relative">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch Language</span>
        </Button>
      </DropdownMenuTrigger>
      {/* side="top" + align="center" ensures it floats ABOVE the dock 
          without shifting the navbar layout 
      */}
          <DropdownMenuContent
              side="top"
              align="center"
              sideOffset={20}
              onCloseAutoFocus={(e) => e.preventDefault()}
              className="z-[9999] min-w-[120px] bg-background/95 backdrop-blur-md shadow-2xl border border-border"
>
        {(["en", "de", "es"] as const).map((l) => (
          <DropdownMenuItem 
            key={l} 
            onClick={() => setLang(l)}
            className={lang === l ? "bg-accent font-bold" : "cursor-pointer"}
          >
            {labels[l]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}