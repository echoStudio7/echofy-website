// components/sections/SolutionsSection.tsx
"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react"; // Iconos más acordes
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const expertiseData = [
  {
    icon: <GraduationCap size={40} className="text-primary" />,
    title: "Educational Skills for Schools",
    description: "Engage students with interactive learning experiences. We develop custom Alexa skills that support curriculum, enhance accessibility, and make education fun.",
  },
  {
    icon: <Briefcase size={40} className="text-primary" />,
    title: "Custom Solutions for Businesses",
    description: "Streamline operations, improve customer service, and innovate with voice. Our tailored Alexa skills provide unique solutions for your business needs.",
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Título de la sección */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
        >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Expertise in Alexa Skill Development</h2>
        </motion.div>
        
        {/* 2. GRID DE 2 COLUMNAS para las tarjetas */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {/* 3. ESTRUCTURA INTERNA DE LA TARJETA REFACTORIZADA */}
              <Card className="h-full p-8 flex flex-col items-center text-center bg-card/50 backdrop-blur-sm border-border/20">
                {/* Icono */}
                <div className="mb-6">
                  {item.icon}
                </div>
                {/* Título */}
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                {/* Descripción */}
                <p className="text-muted-foreground mb-6">
                  {item.description}
                </p>
                {/* Botón */}
                <Button variant="secondary" className="mt-auto">
                  Learn More
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}