// components/sections/ContactSection.tsx
"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl">¿Listo para Innovar?</h2>
        <p className="mt-4 text-lg text-echofy-text">
          Completa el formulario y uno de nuestros especialistas se pondrá en contacto para agendar una consulta gratuita y sin compromiso.
        </p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-12 bg-echofy-light-gray p-8 md:p-12 rounded-2xl border border-gray-200/90"
        >
          <form className="space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-echofy-dark-blue mb-2">Nombre Completo</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-echofy-blue focus:outline-none" placeholder="Tu nombre" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-echofy-dark-blue mb-2">Email Corporativo</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-echofy-blue focus:outline-none" placeholder="tu@empresa.com" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-echofy-dark-blue mb-2">Cuéntanos sobre tu proyecto</label>
              <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-echofy-blue focus:outline-none" placeholder="¿Qué te gustaría lograr con una skill de Alexa?"></textarea>
            </div>
            <div className="text-center pt-4">
              <button type="submit" className="bg-echofy-blue text-white font-bold py-4 px-12 rounded-lg shadow-lg hover:bg-opacity-90 transition-transform transform hover:scale-105">
                Enviar Solicitud
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}