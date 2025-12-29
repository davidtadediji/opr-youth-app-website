import { Heart } from "lucide-react";
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
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 font-bold text-charcoal">
              OPR
            </div>
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
              href="mailto:contact@opr.mu"
              className="transition-colors hover:text-primary-500"
            >
              {t.contact}
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-text-muted">
            <span>{t.madeWith}</span>
            <Heart className="h-4 w-4 fill-accent-500 text-accent-500" />
            <span>{t.forRodrigues}</span>
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
