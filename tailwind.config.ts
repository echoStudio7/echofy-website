// tailwind.config.ts (LA VERSIÓN CORREGIDA)

import type { Config } from "tailwindcss";

const config: Config = {
  // ATENCIÓN A ESTA SECCIÓN
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Correcto, la carpeta components está en la raíz.
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // CORREGIDO: Añadimos 'src/' para que encuentre la carpeta app.
  ],
  // El resto de la configuración se mantiene igual
  theme: {
    extend: {
      colors: {
        "echofy-light-gray": "#F5F7FA",
        "echofy-dark-blue": "#1D2B4A",
        "echofy-blue": "#2A43A5",
        "echofy-text": "#334155",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;