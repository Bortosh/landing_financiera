import { notFound } from 'next/navigation'
import { Product } from '@/types/product'
import productsData from '@/data/mock-products.json'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
    params: {
        id: string
    }
}

export default function ProductDetail({ params }: Props) {
    const product = (productsData as Product[]).find(p => p.id === params.id)

    if (!product) return notFound()

    return (
        <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6 items-start">
                <Image
                    src={product.imagen || '/default.jpg'}
                    alt={product.nombre}
                    width={600}
                    height={400}
                    className="rounded-lg w-full object-cover border border-gray-200"
                />

                <div>
                    <h2 className="text-3xl font-bold text-green-800 mb-2">{product.nombre}</h2>
                    <p className="text-gray-600 mb-1"><strong>Tipo:</strong> {product.tipo}</p>
                    {product.tasaInteres && <p className="text-gray-600 mb-1"><strong>Tasa de Interés:</strong> {product.tasaInteres}</p>}
                    {product.solicitado && <p className="text-gray-600 mb-4"><strong>Solicitado:</strong> {product.solicitado}</p>}
                    <p className="text-gray-700 mb-6">{product.descripcion}</p>

                    {Array.isArray(product.beneficios) && product.beneficios.length > 0 && (
                        <div className="mb-6">
                            <h4 className="text-xl font-semibold text-green-700 mb-2">Beneficios</h4>
                            <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                {product.beneficios?.map((beneficio, i) => <li key={i}>{beneficio}</li>)}
                            </ul>
                        </div>
                    )}

                    {Array.isArray(product.requisitos) && product.requisitos.length > 0 && (
                        <div>
                            <h4 className="text-xl font-semibold text-green-700 mb-2">Requisitos</h4>
                            <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                {product.requisitos?.map((requisito, i) => <li key={i}>{requisito}</li>)}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <Link
                href="/#productos"
                className="inline-block text-green-700 hover:underline text-sm"
            >
                ← Volver al catálogo
            </Link>
        </div>
    )
}