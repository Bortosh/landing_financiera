'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-green-700">FintechPro</div>

            <nav className="space-x-4 text-sm font-medium hidden md:block">
                <a href="#productos" aria-label="Ir a sección productos" className="text-gray-700 hover:text-green-700">Productos</a>
                <a href="#nosotros" className="text-gray-700 hover:text-green-700">Nosotros</a>
                <a href="#noticias" className="text-gray-700 hover:text-green-700">Noticias</a>
                <a href="#contacto" className="text-gray-700 hover:text-green-700">Contacto</a>
                <a href="#" className="px-3 py-1 bg-gray-800 text-white rounded-full">Hazte Cliente</a>
                <a href="#" className="px-3 py-1 bg-green-700 text-white rounded-full">Banca en línea</a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden text-green-700">
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {open && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md border-t p-4 space-y-2 z-50 md:hidden">
                    <a href="#productos" aria-label="Ir a sección productos" className="block text-gray-700 hover:text-green-700">Productos</a>
                    <a href="#nosotros" className="block text-gray-700 hover:text-green-700">Nosotros</a>
                    <a href="#noticias" className="block text-gray-700 hover:text-green-700">Noticias</a>
                    <a href="#contacto" className="block text-gray-700 hover:text-green-700">Contacto</a>
                    <a href="#" className="block px-3 py-2 mt-2 bg-gray-800 text-white rounded-full text-center">Hazte Cliente</a>
                    <a href="#" className="block px-3 py-2 bg-green-700 text-white rounded-full text-center">Banca en línea</a>
                </div>
            )}
        </div>
    )
}
