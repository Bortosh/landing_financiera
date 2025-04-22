'use client'

import styled from 'styled-components'
import { Product } from '@/types/product'
import Link from 'next/link'

interface Props {
    product: Product
}

const Card = styled.div`
@apply bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md flex flex-col justify-between h-full;
`

export default function ProductCard({ product }: Props) {
    return (
        <Card className="ring-1 ring-gray-200 hover:ring-green-600 transition-all duration-500">
            <div>
                <h3 className="text-lg font-bold text-green-800 mb-2">{product.nombre}</h3>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                    <li><strong>Tipo:</strong> {product.tipo}</li>
                    {product.tasaInteres && <li><strong>Interés:</strong> {product.tasaInteres}</li>}
                    {product.solicitado && <li><strong>Solicitado:</strong> {product.solicitado}</li>}
                </ul>
                <p className="text-sm text-gray-600 mb-4">{product.descripcion}</p>
            </div>

            <Link
                href={`/product/${product.id}`}
                className="text-green-700 hover:underline font-medium text-sm"
            >
                Ver detalles →
            </Link>
        </Card>
    )
}
