// src/app/layout.tsx

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// ESTA LÍNEA ES LA MÁS IMPORTANTE AHORA MISMO
import './globals.css' 
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '800'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Echofy | Skills de Alexa Personalizadas',
  description: 'Diseñamos e implementamos skills de Amazon Alexa para hacer la información de tu institución o empresa accesible por voz.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {/* El padding-top es una clase de Tailwind. Si no funciona, es por el CSS. */}
        <main className="pt-20"> 
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}