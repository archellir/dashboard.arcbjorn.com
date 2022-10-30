/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      "2xs": "325px",
      xs: "475px",
      ...defaultTheme.screens,
    },

    extend: {
      fontFamily: {
        "plex-mono": ["IBMPlexMono", "Courier New", "Courier", "monospace"],
        "plex-sans": ["IBMPlexSans", "sans-serif", "sans"],
      },

      animation: {
        appear: "fadeIn 1s ease-in-out",
      },

      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      }),
    },
  },
  plugins: [],
};
