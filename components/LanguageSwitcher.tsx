"use client";

import { Globe } from "lucide-react";
import { useState } from "react";
import type { Locale } from "@/lib/translations";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

const languages = [
  { code: "en" as Locale, name: "English", flag: "🇬🇧" },
  { code: "fr" as Locale, name: "Français", flag: "🇫🇷" },
  { code: "rcr" as Locale, name: "Kreol Rodrige", flag: "🇲🇺" },
];

export default function LanguageSwitcher({
  currentLocale,
  onLocaleChange,
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = languages.find((l) => l.code === currentLocale);

  return (
    <div className="fixed right-4 top-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border border-border-light bg-white px-4 py-2 shadow-lg transition-all hover:shadow-xl"
      >
        <Globe className="h-4 w-4 text-primary-500" />
        <span className="text-sm font-medium text-text-primary">
          {currentLang?.flag} {currentLang?.name}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl border border-border-light bg-white shadow-xl">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onLocaleChange(lang.code);
                setIsOpen(false);
              }}
              className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors first:rounded-t-xl last:rounded-b-xl hover:bg-cream-50 ${
                currentLocale === lang.code ? "bg-cream-100" : ""
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="text-sm font-medium text-text-primary">
                {lang.name}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
