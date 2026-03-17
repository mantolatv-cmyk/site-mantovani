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
          500: "#FFC107", // Amarelo mais forte/vibrante
          400: "#FFD54F",
        },
        zinc: {
          800: "#1A1A1A", // Bordas sutis no preto
          900: "#0A0A0A", // Preto bem escuro
          950: "#000000", // Preto puro
        },
      },
    },
  },
  plugins: [],
};
export default config;
