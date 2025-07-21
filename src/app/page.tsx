// app/page.tsx
import HeroSection from "@/components/sections/HeroSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
// AboutSection no fue detallado, puedes añadirlo aquí cuando lo crees
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <HowItWorksSection />
      <ContactSection />
    </>
  );
}