import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["var(--font-outfit)"],
      },
      colors: {
        yellow: {
          500: "#FFC107",
          400: "#FFD54F",
        },
        zinc: {
          800: "#1A1A1A",
          900: "#0A0A0A",
          950: "#000000",
        },
      },
    },
  },
  plugins: [],
};
export default config;
