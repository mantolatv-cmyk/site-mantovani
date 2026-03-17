import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          500: "#EAB308", // Construction Yellow
          400: "#FACC15",
        },
        zinc: {
          900: "#18181B", // Industrial Black
          950: "#09090B",
        },
      },
    },
  },
  plugins: [],
};
export default config;
