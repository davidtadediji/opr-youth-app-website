"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/translations";
import { translations } from "@/lib/translations";
import LanguageSwitcher from "@/components/LanguageSwitcher";

interface HeaderProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export default function Header({ locale, onLocaleChange }: HeaderProps) {
  const t = translations[locale];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
        isScrolled
          ? "border-border-light bg-cream-50/85"
          : "border-white/10 bg-charcoal/50"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/opr-logo.jpg"
            alt="OPR Logo"
            width={44}
            height={44}
            className="rounded-lg"
            priority
          />
          <div className="leading-tight">
            <div
              className={`text-sm font-semibold sm:text-base ${
                isScrolled ? "text-text-primary" : "text-white"
              }`}
            >
              {t.footer.appName}
            </div>
            <div
              className={`text-xs sm:text-sm ${
                isScrolled ? "text-text-muted" : "text-white/70"
              }`}
            >
              {t.footer.initiative}
            </div>
          </div>
        </a>

        <nav
          className={`hidden items-center gap-6 text-sm font-medium sm:flex ${
            isScrolled ? "text-text-muted" : "text-white/75"
          }`}
        >
          <a
            href="#features"
            className={`transition-colors ${
              isScrolled ? "hover:text-primary-600" : "hover:text-primary-300"
            }`}
          >
            {t.nav.features}
          </a>
          <a
            href="#anniversary"
            className={`transition-colors ${
              isScrolled ? "hover:text-primary-600" : "hover:text-primary-300"
            }`}
          >
            {t.nav.anniversary}
          </a>
          <a
            href="mailto:contact@jakobs.studio"
            className={`transition-colors ${
              isScrolled ? "hover:text-primary-600" : "hover:text-primary-300"
            }`}
          >
            {t.nav.contact}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((v) => !v)}
            className={`inline-flex items-center justify-center rounded-full border px-3 py-2 shadow-sm transition-colors sm:hidden ${
              isScrolled
                ? "border-border-light bg-white text-text-primary hover:bg-cream-50"
                : "border-white/15 bg-white/10 text-white hover:bg-white/15"
            }`}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <LanguageSwitcher
            variant="inline"
            currentLocale={locale}
            onLocaleChange={onLocaleChange}
          />
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border-light bg-cream-50/95 backdrop-blur-xl sm:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-2 text-sm font-medium text-text-muted">
              <a
                href="#features"
                className="rounded-xl px-3 py-2 transition-colors hover:bg-cream-100 hover:text-text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.features}
              </a>
              <a
                href="#anniversary"
                className="rounded-xl px-3 py-2 transition-colors hover:bg-cream-100 hover:text-text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.anniversary}
              </a>
              <a
                href="mailto:contact@jakobs.studio"
                className="rounded-xl px-3 py-2 transition-colors hover:bg-cream-100 hover:text-text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.contact}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
