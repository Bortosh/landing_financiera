'use client'

import styled from 'styled-components'
import { Product } from '@/types/product'
import Link from 'next/link'

interface Props {
    product: Product
}

const Card = styled.div`
  @apply bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-all;
`

export default function ProductCard({ product }: Props) {
    return (
        <Card className="h-full flex flex-col justify-between">
            <div>
                <h3 className="text-lg font-semibold text-green-700 mb-1">{product.nombre}</h3>
                <p className="text-sm text-gray-600">Tipo: {product.tipo}</p>
                {product.tasaInteres && <p className="text-sm text-gray-600">Interés: {product.tasaInteres}</p>}
                {product.riesgo && <p className="text-sm text-gray-600">Riesgo: {product.riesgo}</p>}
                <p className="text-sm text-gray-700 mt-2 line-clamp-3">{product.descripcion}</p>
            </div>
            <Link
                href={`/product/${product.id}`}
                className="text-sm text-green-700 hover:underline mt-4"
            >
                Ver detalles →
            </Link>
        </Card>
    )
}
