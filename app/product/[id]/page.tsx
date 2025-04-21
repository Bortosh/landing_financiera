import { notFound } from 'next/navigation'
import { Product } from '@/types/product'
import productsData from '@/data/mock-products.json'
import Link from 'next/link'

interface Params {
    params: { id: string }
}

export default function ProductDetail({ params }: Params) {
    const product = (productsData as Product[]).find(p => p.id === params.id)
    if (!product) return notFound()

    return (
        <div className="space-y-5 bg-white">
            <h2 className="text-3xl font-bold text-green-800">{product.nombre}</h2>
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <p className="text-gray-700">Tipo: {product.tipo}</p>
                    {product.tasaInteres && <p className="text-gray-700">Tasa de Interés: {product.tasaInteres}</p>}
                    {product.riesgo && <p className="text-gray-700">Riesgo: {product.riesgo}</p>}
                </div>
                <p className="text-gray-700 md:col-span-2">{product.descripcion}</p>
            </div>

            <Link href="/" className="inline-block mt-6 text-green-700 hover:underline">
                ← Volver al catálogo
            </Link>
        </div>
    )
}
