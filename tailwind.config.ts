import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Club palette: change these to restyle the whole site
      colors: {
        // Pulled from the logo
        sky: {
          DEFAULT: "#68a3bb", // logo background
          light: "#8dbccf",
          deep: "#2f6e88", // readable accent on light cards
        },
        ink: {
          DEFAULT: "#283a48", // logo linework
          soft: "#3a5566",
          dark: "#15212b", // long-form text like bios
        },
        card: "#f4f9fb",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-archivo-black)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
