// components/sections/HeroSection.tsx
"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-6 pt-32 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      >
        {/* Columna de Texto */}
        <div className="text-left">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl !leading-tight">
            Transforma datos en conversaciones productivas
          </h1>
          <p className="mt-6 text-lg text-echofy-text max-w-xl">
            Diseñamos skills de Alexa a medida que conectan a tu equipo y clientes con la información que necesitan, usando solo la voz.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-block bg-echofy-blue text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-opacity-90 transition-transform transform hover:scale-105"
          >
            Solicitar Consulta Gratuita
          </a>
        </div>

        {/* Columna de Gráfico 3D */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          className="w-full h-80 md:h-96 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl flex items-center justify-center"
        >
          <div className="w-48 h-48 bg-white/50 rounded-full backdrop-blur-lg flex items-center justify-center">
            <p className="text-echofy-blue font-semibold">[Gráfico 3D]</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}