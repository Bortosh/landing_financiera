import { Product } from '@/types/product'

export async function getProductById(id: string): Promise<Product | undefined> {
    const productsData = await import('@/data/mock-products.json')
    const products = productsData.default as Product[]
    return products.find((p) => p.id === id)
}
