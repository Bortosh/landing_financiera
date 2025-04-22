'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import productsData from '@/data/mock-products.json'
import ProductCard from './ProductCard'
import { Product } from '@/types/product'

const categorias = ['Todos', 'Ahorro', 'Crédito', 'Inversión', 'Seguros', 'Financiamiento']

export default function ProductToggle() {
    const [mostrarProductos, setMostrarProductos] = useState(false)
    const [categoriaActiva, setCategoriaActiva] = useState('Todos')

    const productosFiltrados = (productsData as Product[]).filter((p) =>
        categoriaActiva === 'Todos' ? true : p.categoria === categoriaActiva
    )

    return (
        <section id="productos" className="my-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
                {mostrarProductos ? 'Nuestros productos' : 'Descubre lo que tenemos para ti'}
            </h2>

            <button
                onClick={() => setMostrarProductos(!mostrarProductos)}
                aria-label={mostrarProductos ? 'Ocultar productos' : 'Ver productos financieros'}
                className={`mb-6 px-6 py-3 rounded-full font-semibold transition-all cursor-pointer ${mostrarProductos
                        ? 'bg-gray-200 text-green-700 hover:bg-gray-300'
                        : 'bg-green-700 text-white hover:bg-green-800'
                    }`}
            >
                {mostrarProductos ? 'Ocultar productos ▲' : 'Ver productos financieros ▼'}
            </button>

            <AnimatePresence>
                {mostrarProductos && (
                    <motion.div
                        key="catalogo"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="mt-4"
                    >
                        <div className="flex flex-wrap gap-2 justify-center mb-6">
                            {categorias.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setCategoriaActiva(cat)}
                                    aria-label={`Filtrar productos por categoría ${cat}`}
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${categoriaActiva === cat
                                            ? 'bg-green-700 text-white border-green-700'
                                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {productosFiltrados.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
