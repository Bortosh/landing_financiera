'use client'

export default function Hero() {
    return (
        <section className="grid md:grid-cols-2 gap-6 items-center mb-16">
            <div className="bg-green-700 text-white p-10 rounded-xl h-full flex flex-col justify-center">
                <div>
                    <h1 className="text-4xl font-bold mb-4">Bienvenid@ a FintechPro</h1>
                    <p className="text-lg mb-6">Queremos liberarte de procesos complicados para que puedas disfrutar tu vida intensamente</p>
                    <a href="#" className="bg-white text-green-700 font-semibold px-6 py-2 rounded-full inline-block">
                        Abrir mi cuenta
                    </a>
                </div>
            </div>
            <div className="rounded-xl overflow-hidden h-full flex items-center justify-center">
                <img
                    src="/familia_hero_financiera.jpg"
                    alt="Hero"
                    className="w-full h-auto object-cover rounded-xl max-h-[400px]"
                />
            </div>
        </section>
    )
}