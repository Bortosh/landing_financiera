export default function About() {
    return (
        <section id="nosotros" className="my-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <img src="/nosotros.jpg" alt="Nosotros" className="rounded-xl w-full h-auto object-cover" />
                </div>
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Quiénes somos</h2>
                    <p className="text-gray-700 text-lg">
                        Somos una fintech colombiana enfocada en brindarte herramientas digitales para el manejo de tus finanzas, de forma rápida, segura y confiable.
                        Nuestro compromiso es ofrecer productos accesibles, transparentes y fáciles de usar.
                    </p>
                </div>
            </div>
        </section>
    )
}