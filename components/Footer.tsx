import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
                OPR Youth App
              </p>
              <p className="text-sm text-text-muted">OPR Youth Initiative</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-text-muted">
            <a
              href="#features"
              className="transition-colors hover:text-primary-500"
            >
              Features
            </a>
            <a
              href="mailto:contact@opr.mu"
              className="transition-colors hover:text-primary-500"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-text-muted">
            <span>Made with</span>
            <Heart className="h-4 w-4 fill-accent-500 text-accent-500" />
            <span>for Rodrigues</span>
          </div>
        </div>

        <div className="mt-8 border-t border-border-light pt-8 text-center text-sm text-text-muted">
          <p>
            &copy; {currentYear} Organisation du Peuple Rodriguais. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
