"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import GoldenAnniversary from "@/components/GoldenAnniversary";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import type { Locale } from "@/lib/translations";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");

  return (
    <main className="min-h-screen">
      <LanguageSwitcher currentLocale={locale} onLocaleChange={setLocale} />
      <Hero locale={locale} />
      <GoldenAnniversary locale={locale} />
      <Features locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
