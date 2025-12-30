import Image from "next/image";
import type { Locale } from "@/lib/translations";
import { translations } from "@/lib/translations";

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const t = translations[locale].footer;

  return (
    <footer className="border-t border-border-light bg-cream-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <Image
              src="/opr-logo.jpg"
              alt="OPR Logo"
              width={60}
              height={60}
              className="rounded-lg"
            />
            <div>
              <p className="font-semibold text-text-primary">
                {t.appName}
              </p>
              <p className="text-sm text-text-muted">{t.initiative}</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-text-muted">
            <a
              href="#features"
              className="transition-colors hover:text-primary-500"
            >
              {t.features}
            </a>
            <a
              href="mailto:contact@jakobs.studio"
              className="transition-colors hover:text-primary-500"
            >
              {t.contact}
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-text-muted">
            <span>{t.madeWith}</span>
          </div>
        </div>

        <div className="mt-8 border-t border-border-light pt-8 text-center text-sm text-text-muted">
          <p>
            &copy; {currentYear} {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
