import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // OPR Youth App Brand Colors - Warm, study-friendly palette
        primary: {
          50: "#fef7ed",
          100: "#fdecd3",
          200: "#f9d5a5",
          300: "#f5b86d",
          400: "#F5C542", // Main accent - warm gold
          500: "#F59E0B", // Amber/gold
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
          950: "#451A03",
        },
        accent: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444", // Rich red/burgundy accent
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
        },
        // Light theme backgrounds
        cream: {
          DEFAULT: "#FDFCF5",
          50: "#FDFCF5", // Main background - soft cream
          100: "#FAF8F0",
          200: "#F5F3E8",
        },
        // Dark theme backgrounds
        charcoal: {
          DEFAULT: "#1A1A1A", // Main dark background
          light: "#2A1F1F", // Card background in dark mode
          border: "#3D2B2B", // Border in dark mode
        },
        // Semantic colors
        surface: {
          light: "#FFFFFF",
          dark: "#2A1F1F",
        },
        border: {
          light: "#E5E7EB",
          dark: "#3D2B2B",
        },
        text: {
          primary: "#1F2937",
          muted: "#6B7280",
          light: "#FFFFFF",
        },
        success: "#10B981",
        error: "#EF4444",
        notification: "#F59E0B",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-down": "fadeInDown 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, #1A1A1A 0%, #2A1F1F 50%, #3D2B2B 100%)",
        "hero-gradient-warm":
          "linear-gradient(135deg, #F5C542 0%, #F59E0B 50%, #D97706 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
