// components/Navbar.tsx
import Image from "next/image";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-echofy-text hover:text-echofy-blue transition-colors duration-300">
    {children}
  </a>
);

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200/80">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-extrabold text-2xl text-echofy-dark-blue">
          Echofy
          {/* <Image src="/logo.svg" alt="Echofy Logo" width={100} height={30} /> */}
        </a>

        {/* Navegación */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#solutions">Soluciones</NavLink>
          <NavLink href="#how-it-works">Cómo Funciona</NavLink>
          <NavLink href="#about">Nosotros</NavLink>
        </nav>

        {/* Call to Action */}
        <a 
          href="#contact"
          className="hidden md:inline-block bg-echofy-blue text-white font-medium py-2 px-5 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
        >
          Solicitar Consulta
        </a>
      </div>
    </header>
  );
}