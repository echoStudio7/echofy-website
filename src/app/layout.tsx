import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Echofy - Dale una Voz a tu Organización",
  description: "Desarrollamos Skills de Alexa personalizadas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* Añadimos el Navbar aquí */}
        {children}
        {/* Aquí irá el Footer en el futuro */}
      </body>
    </html>
  );
}