export interface Product {
    id: string
    nombre: string
    tipo: string
    categoria: string
    tasaInteres?: string | null
    solicitado?: 'Bajo' | 'Medio' | 'Alto'
    descripcion: string
    beneficios?: string[]
    requisitos?: string[]
    imagen?: string
}