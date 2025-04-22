export default function About() {
    return (
        <section id="nosotros" className="my-20">
            <div className="grid md:grid-cols-2 items-center gap-10">

                <div className="w-full h-full flex justify-center">
                    <img
                        src="/about.jpg"
                        alt="Equipo FintechPro"
                        className="rounded-xl object-cover w-full max-w-md h-auto md:h-[400px]"
                    />
                </div>

                <div className="flex flex-col justify-center h-full text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
                        Quiénes somos
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Somos una fintech colombiana enfocada en brindarte herramientas digitales para el manejo de tus finanzas, de forma rápida, segura y confiable.
                        <br />
                        <br />
                        Nuestro compromiso es ofrecer productos accesibles, transparentes y fáciles de usar.
                    </p>
                </div>
            </div>
        </section>
    )
}
