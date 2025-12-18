"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { DATA, Language } from '@/data/resume';

const LanguageContext = createContext<{
  lang: Language;
  setLang: (l: Language) => void;
} | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default to 'en' initially to match server-side rendering
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    // 1. Check if user already manually picked a language in this session
    const savedLang = localStorage.getItem('user-lang') as Language;
    
    if (savedLang && DATA[savedLang]) {
      setLang(savedLang);
    } else {
      // 2. Otherwise, detect from browser
      const browserLang = navigator.language.split('-')[0]; // Gets 'es' from 'es-ES'
      
      if (browserLang === 'de') setLang('de');
      else if (browserLang === 'es') setLang('es');
      else setLang('en');
    }
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('user-lang', newLang); // Remember choice
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};