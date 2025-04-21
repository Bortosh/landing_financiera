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
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-green-700">FintechPro</div>
            <nav className="space-x-4 text-sm font-medium hidden md:block">
              <a href="#productos" className="text-gray-700 hover:text-green-700">Productos</a>
              <a href="#nosotros" className="text-gray-700 hover:text-green-700">Nosotros</a>
              <a href="#noticias" className="text-gray-700 hover:text-green-700">Noticias</a>
              <a href="#contacto" className="text-gray-700 hover:text-green-700">Contacto</a>
              <a href="#" className="px-3 py-1 bg-gray-800 text-white rounded-full">Hazte Cliente</a>
              <a href="#" className="px-3 py-1 bg-green-700 text-white rounded-full">Banca en línea</a>
            </nav>
          </div>
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
                <li className="flex gap-3 mt-3">
                  <span className="bg-gray-700 rounded-full w-6 h-6"></span>
                  <span className="bg-gray-700 rounded-full w-6 h-6"></span>
                  <span className="bg-gray-700 rounded-full w-6 h-6"></span>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
