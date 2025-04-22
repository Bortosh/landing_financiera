
import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'

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

        <Footer />
      </body>
    </html>
  )
}
