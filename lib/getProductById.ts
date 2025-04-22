import { Product } from '@/types/product'

export async function getProductById(id: string): Promise<Product | undefined> {
    const productsData = await import('@/data/mock-products.json')
    return (productsData.default as Product[]).find((p) => p.id === id)
}

