"use client";

import { useState } from "react";
import { ArrowRight, Loader2, CheckCircle, Apple, Smartphone, Clock } from "lucide-react";
import type { Locale } from "@/lib/translations";
import { translations } from "@/lib/translations";

const APP_RELEASED = process.env.NEXT_PUBLIC_APP_RELEASED === "true";
const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL || "#";
const PLAY_STORE_URL = process.env.NEXT_PUBLIC_PLAY_STORE_URL || "#";

interface HeroProps {
  locale: Locale;
}

export default function Hero({ locale }: HeroProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const t = translations[locale].hero;

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("You're on the list! We'll notify you when the app launches.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  const handleDownload = (platform: "ios" | "android") => {
    const url = platform === "ios" ? APP_STORE_URL : PLAY_STORE_URL;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary-400/20 blur-3xl" />
        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-primary-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="animate-fade-in-down mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-400/40 bg-primary-500/15 px-4 py-2 text-sm font-medium text-primary-300 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-400"></span>
            </span>
            {APP_RELEASED ? t.badge.available : t.badge.comingSoon}
          </span>
        </div>

        {/* Main heading */}
        <h1 className="animate-fade-in-up mb-6 text-center text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">{t.title}</span>
          <span className="gradient-text block">{t.subtitle}</span>
        </h1>

        {/* Tagline */}
        <p className="animate-fade-in-up animation-delay-200 mb-4 max-w-2xl text-center text-xl text-primary-200 sm:text-2xl">
          {t.tagline}
        </p>

        {/* Description */}
        <p className="animate-fade-in-up animation-delay-400 mb-10 max-w-xl text-center text-gray-400">
          {t.description}
        </p>

        {/* CTA Section - Mutually Exclusive */}
        <div className="animate-fade-in-up animation-delay-600 w-full max-w-md">
          {APP_RELEASED ? (
            /* Download App Buttons - Separate iOS and Android */
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col gap-3 sm:flex-row">
                {/* <button
                  onClick={() => handleDownload("ios")}
                  className="btn-primary group"
                >
                  <Apple className="h-5 w-5" />
                  {t.download.ios}
                </button> */}
                <div className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 backdrop-blur-sm">
                  <Clock className="h-4 w-4 text-primary-400" />
                  <p className="text-sm font-medium text-primary-300">
                    {t.download.iosSoon}
                  </p>
                </div>

                <button
                  onClick={() => handleDownload("android")}
                  className="btn-primary group"
                >
                  <Smartphone className="h-5 w-5" />
                  {t.download.android}
                </button>
              </div>
              <p className="text-center text-sm text-gray-400">
                {t.download.free}
              </p>
            </div>
          ) : (
            /* Join Waitlist Form */
            <form onSubmit={handleWaitlistSubmit} className="space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder={t.waitlist.placeholder}
                  className="flex-1 rounded-full border border-charcoal-border bg-charcoal-light/50 px-6 py-4 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/50"
                  disabled={status === "loading" || status === "success"}
                />
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="btn-primary whitespace-nowrap"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      {t.waitlist.buttonLoading}
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      {t.waitlist.buttonSuccess}
                    </>
                  ) : (
                    <>
                      {t.waitlist.button}
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>
              </div>

              {/* Status message */}
              {message && (
                <p
                  className={`text-center text-sm ${
                    status === "success" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {message}
                </p>
              )}

              <p className="text-center text-sm text-gray-500">
                {t.waitlist.disclaimer}
              </p>
            </form>
          )}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-primary-400/50 p-1">
            <div className="h-2 w-1 rounded-full bg-primary-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
