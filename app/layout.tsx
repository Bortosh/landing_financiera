import { Facebook, Twitter, Instagram } from 'lucide-react'
import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FintechPro – Tu Banca Digital',
  description: 'Landing institucional para una fintech con productos financieros digitales',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900 font-sans">
        <header className="bg-white shadow-md py-4 sticky top-0 z-50">
          <header className="bg-white shadow-md py-4 sticky top-0 z-50">
            <Navbar />
          </header>

        </header>

        <main className="max-w-7xl mx-auto px-4 py-10 bg-white">{children}</main>

        <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-3">Nuestro Banco</h4>
              <ul className="space-y-1 text-sm">
                <li>Información Corporativa</li>
                <li>Información a clientes</li>
                <li>Tasas y Tarifas</li>
                <li>Trabaja con Nosotros</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Servicio al Cliente</h4>
              <ul className="space-y-1 text-sm">
                <li>Solicitudes y Reclamos</li>
                <li>Disponibilidad de servicios</li>
                <li>Políticas de Datos</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Contacto</h4>
              <ul className="space-y-1 text-sm">
                <li>WhatsApp: +57 1 5878000</li>
                <li>Banca Telefónica: (601) 587 8000</li>
                <li>Email: contacto@fintechpro.com</li>
                <li className="flex gap-3 mt-3 text-white">
                  <a href="#"><Facebook className="w-6 h-6 hover:text-green-400" /></a>
                  <a href="#"><Twitter className="w-6 h-6 hover:text-green-400" /></a>
                  <a href="#"><Instagram className="w-6 h-6 hover:text-green-400" /></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <img
              src="/fintech_logo.png"
              alt="Logo FintechPro"
              className="h-24 md:h-28 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </footer>
      </body>
    </html>
  )
}
