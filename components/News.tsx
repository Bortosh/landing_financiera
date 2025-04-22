export default function News() {
    const noticias = [
        { titulo: 'Nueva alianza con Mastercard', resumen: 'Ahora nuestras tarjetas también tendrán respaldo internacional.', img: '/mastercard.jpg' },
        { titulo: 'Aumentamos nuestras tasas de ahorro', resumen: 'Más rentabilidad para tu dinero desde este mes.', img: '/ahorro.jpg' },
        { titulo: 'Lanzamos app móvil oficial', resumen: 'Disponible para Android y iOS con nuevas funcionalidades.', img: '/appMovil.jpg' }
    ]

    return (
        <section id="noticias" className="my-16">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-10 text-center">Últimas noticias</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {noticias.map((n, i) => (
                    <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                        <img src={n.img} alt={n.titulo} className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h3 className="text-green-700 font-semibold text-lg mb-2">{n.titulo}</h3>
                            <p className="text-gray-600 text-sm">{n.resumen}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}