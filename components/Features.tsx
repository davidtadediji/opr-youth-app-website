"use client";

import {
  Calendar,
  BookOpen,
  Mic,
  Sparkles,
  WifiOff,
  Globe,
  Bell,
  Moon,
  Cloud,
} from "lucide-react";
import type { Locale } from "@/lib/translations";
import { translations } from "@/lib/translations";

const featureDefs = [
  {
    key: "timetable" as const,
    icon: Calendar,
    color: "from-blue-500 to-cyan-500",
  },
  {
    key: "schoolwork" as const,
    icon: BookOpen,
    color: "from-purple-500 to-pink-500",
  },
  {
    key: "audio" as const,
    icon: Mic,
    color: "from-orange-500 to-red-500",
  },
  {
    key: "ai" as const,
    icon: Sparkles,
    color: "from-green-500 to-emerald-500",
  },
  {
    key: "offline" as const,
    icon: WifiOff,
    color: "from-slate-500 to-zinc-500",
  },
  {
    key: "languages" as const,
    icon: Globe,
    color: "from-teal-500 to-cyan-500",
  },
  {
    key: "reminders" as const,
    icon: Bell,
    color: "from-amber-500 to-yellow-500",
  },
  {
    key: "darkMode" as const,
    icon: Moon,
    color: "from-indigo-500 to-violet-500",
  },
  {
    key: "cloudSync" as const,
    icon: Cloud,
    color: "from-sky-500 to-blue-500",
  },
];

interface FeaturesProps {
  locale: Locale;
}

export default function Features({ locale }: FeaturesProps) {
  const t = translations[locale].features;

  return (
    <section id="features" className="section-padding bg-cream-50">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
            {t.title}{" "}
            <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-muted">
            {t.subtitle}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featureDefs.map((feature, index) => {
            const content = t.items[feature.key];
            return (
            <div
              key={feature.key}
              className="group relative overflow-hidden rounded-2xl border border-border-light bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
              />

              {/* Icon */}
              <div
                className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${feature.color} p-3 text-white shadow-lg`}
              >
                <feature.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-xl font-semibold text-text-primary">
                {content.title}
              </h3>
              <p className="text-text-muted">{content.description}</p>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
}
