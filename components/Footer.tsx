// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-echofy-dark-blue text-white">
      <div className="container mx-auto px-6 py-8 text-center">
        <p className="font-bold text-xl">Echofy</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#solutions" className="text-gray-300 hover:text-white transition-colors">Soluciones</a>
          <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">Proceso</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contacto</a>
        </div>
        <p className="mt-8 text-sm text-gray-400">
          © {new Date().getFullYear()} Echofy. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}