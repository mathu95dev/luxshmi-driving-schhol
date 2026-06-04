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
        navy: {
          50: "#eef2ff",
          100: "#e0e8ff",
          600: "#1a2e5e",
          700: "#142452",
          800: "#0f1b3d",
          900: "#0a1228",
        },
        gold: {
          300: "#fcd34d",
          400: "#f9c217",
          500: "#f0b500",
          600: "#d9a200",
        },
        charcoal: "#1c2333",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
