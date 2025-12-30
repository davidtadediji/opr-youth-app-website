import Image from "next/image";
import { Sparkles } from "lucide-react";
import type { Locale } from "@/lib/translations";
import { translations } from "@/lib/translations";

interface GoldenAnniversaryProps {
  locale: Locale;
}

export default function GoldenAnniversary({ locale }: GoldenAnniversaryProps) {
  const t = translations[locale].anniversary;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 py-16 sm:py-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="absolute -left-4 top-0 h-72 w-72 rounded-full bg-primary-300/30 blur-3xl"></div>
      <div className="absolute -right-4 bottom-0 h-72 w-72 rounded-full bg-primary-600/30 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-4 animate-pulse rounded-full bg-white/20 blur-xl"></div>
              <Image
                src="/opr-logo.jpg"
                alt="OPR 50th Anniversary"
                width={200}
                height={200}
                className="relative rounded-2xl shadow-2xl ring-4 ring-white/50"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              <span>{t.badge}</span>
            </div>

            {/* Title */}
            <h2 className="mb-3 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {t.title}
            </h2>

            {/* Subtitle */}
            <p className="mb-4 text-2xl font-semibold text-white/90 sm:text-3xl">
              {t.subtitle}
            </p>

            {/* Description */}
            <p className="mb-6 max-w-2xl text-lg text-white/90 sm:text-xl">
              {t.description}
            </p>

            {/* Motto and Slogan */}
            <div className="space-y-2">
              <p className="text-xl font-bold text-white sm:text-2xl">
                {t.motto}
              </p>
              <p className="text-lg font-semibold italic text-white/90 sm:text-xl">
                {t.slogan}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
