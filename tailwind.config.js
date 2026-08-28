/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F5F0",
        paper: "#FFFFFF",
        ink: "#1D1D1F",
        muted: "#777777",
        champagne: {
          DEFAULT: "#C9A468",
          light: "#E4CFA0",
          dark: "#9C7C46",
        },
        skyline: {
          DEFAULT: "#A9C0D9",
          light: "#DCE7F0",
        },
        lavender: {
          DEFAULT: "#C9C2DA",
          light: "#EDEAF4",
        },
        glass: "rgba(255,255,255,0.55)",
        hairline: "rgba(29,29,31,0.08)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        hero: ["clamp(2.8rem, 6vw, 6.5rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.2rem, 4vw, 3.6rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
      },
      boxShadow: {
        soft: "0 30px 80px -30px rgba(29,29,31,0.18)",
        card: "0 14px 40px -18px rgba(29,29,31,0.16)",
        glass: "0 8px 30px -10px rgba(29,29,31,0.12), inset 0 1px 0 rgba(255,255,255,0.6)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
