'use client'

import productsData from '@/data/mock-products.json'
import ProductCard from './ProductCard'
import { Product } from '@/types/product'
import { useState } from 'react'

const categorias = ['Todos', 'Ahorro', 'Crédito', 'Inversión', 'Seguros', 'Financiamiento']

export default function ProductSection() {
    const [categoriaActiva, setCategoriaActiva] = useState('Todos')
    
    const productosFiltrados = (productsData as Product[]).filter((p) =>
        categoriaActiva === 'Todos' ? true : p.categoria === categoriaActiva
    )

    return (
        <section id="productos" className="my-16">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">Nuestros productos</h2>
            <div className="flex flex-wrap gap-2 mb-6">
                {categorias.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategoriaActiva(cat)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${categoriaActiva === cat ? 'bg-green-700 text-white border-green-700' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
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
        </section>
    )
}
