export default function Features() {
    const beneficios = [
        { icon: '💳', title: 'Sin cuota de manejo', desc: 'Aprovecha nuestros productos sin costos ocultos.' },
        { icon: '⚡', title: 'Transferencias instantáneas', desc: 'Envía dinero al instante, sin comisiones.' },
        { icon: '📱', title: '100% digital', desc: 'Abre, maneja y consulta desde tu celular o PC.' },
        { icon: '⏰', title: 'Disponible 24/7', desc: 'Tu banco donde y cuando lo necesites.' },
    ]

    return (
        <section className="my-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-10">¿Por qué elegir FintechPro?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {beneficios.map((b, i) => (
                    <div key={i} className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                        <div className="text-4xl mb-4">{b.icon}</div>
                        <h3 className="text-lg font-semibold mb-2 text-green-700">{b.title}</h3>
                        <p className="text-sm text-gray-600">{b.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}