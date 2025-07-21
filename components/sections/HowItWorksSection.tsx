// components/sections/HowItWorksSection.tsx
"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consulta y Estrategia",
    description: "Analizamos tus necesidades y definimos los casos de uso clave para tu skill de Alexa."
  },
  {
    number: "02",
    title: "Diseño y Desarrollo",
    description: "Creamos una experiencia de voz intuitiva y programamos la skill con tecnología de punta."
  },
  {
    number: "03",
    title: "Implementación y Soporte",
    description: "Desplegamos la skill en tu cuenta de Amazon y ofrecemos soporte continuo para asegurar su éxito."
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-echofy-light-gray">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Columna de Texto */}
        <div>
          <h2 className="text-4xl">Un Proceso Claro, un Resultado Poderoso</h2>
          <p className="mt-4 text-lg text-echofy-text">De la idea al lanzamiento, te guiamos en cada paso del camino para asegurar una solución robusta y útil.</p>
          <div className="mt-12 space-y-8">
            {steps.map((step, index) => (
               <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-start gap-6"
               >
                <div className="text-3xl font-extrabold text-echofy-blue/30">{step.number}</div>
                <div>
                  <h3 className="text-2xl mb-1">{step.title}</h3>
                  <p className="text-echofy-text">{step.description}</p>
                </div>
               </motion.div>
            ))}
          </div>
        </div>
        {/* Columna de Gráfico */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full h-80 md:h-96 bg-white rounded-2xl flex items-center justify-center"
        >
           <div className="w-48 h-48 border-4 border-dashed border-blue-200 rounded-full flex items-center justify-center">
            <p className="text-gray-400 font-semibold">[Visual del Proceso]</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}