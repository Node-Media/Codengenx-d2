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
        background: "#080808", // Almost black
        surface: "#121212", // Dark Gray
        foreground: "#ededed", // Off-white text
        primary: {
            DEFAULT: "#3b82f6", // Blue
            foreground: "#ffffff",
        },
        accent: {
            DEFAULT: "#f59e0b", // Amber
            foreground: "#000000",
        },
        border: "#262626", // Neutral 800
        // Mappings for compatibility
        muted: { DEFAULT: "#262626", foreground: "#a3a3a3" },
        secondary: { DEFAULT: "#ffffff", foreground: "#000000" },
        cream: "#080808",
        noir: "#ffffff",
        rust: "#3b82f6",
        olive: "#f59e0b",
        sand: "#121212",
        slate: "#a3a3a3",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
