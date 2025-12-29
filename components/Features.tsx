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

const features = [
  {
    icon: Calendar,
    title: "Smart Timetable",
    description:
      "Daily and weekly views with color-coded subjects. Never miss a class again.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: BookOpen,
    title: "Homework Tracker",
    description:
      "Track assignments by priority and due date. Get reminders before deadlines.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Mic,
    title: "Audio Notes",
    description:
      "Record lectures and voice memos. Built-in player for easy review.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Sparkles,
    title: "AI Study Tools",
    description:
      "Auto-generate flashcards and summaries from your notes using AI.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: WifiOff,
    title: "Offline First",
    description:
      "Works without internet. Perfect for areas with limited connectivity.",
    color: "from-slate-500 to-zinc-500",
  },
  {
    icon: Globe,
    title: "Kreol Rodrige",
    description:
      "Full localization in English, French, and Kreol Rodrige.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description:
      "Customizable notifications for classes, deadlines, and study tips.",
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: Moon,
    title: "Dark Mode",
    description:
      "Easy on the eyes with full dark and light theme support.",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    description:
      "Backup your data and sync across devices when online.",
    color: "from-sky-500 to-blue-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="section-padding bg-cream-50">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
            Everything You Need to{" "}
            <span className="gradient-text">Succeed</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-muted">
            Built specifically for Rodriguan students with features that matter.
            From smart scheduling to AI-powered study tools.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
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
                {feature.title}
              </h3>
              <p className="text-text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
