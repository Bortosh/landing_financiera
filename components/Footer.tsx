import { Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
                <div>
                    <h4 className="text-white font-semibold mb-3">Nuestro Banco</h4>
                    <ul className="space-y-1 text-sm">
                        <li>Información Corporativa</li>
                        <li>Información a clientes</li>
                        <li>Tasas y Tarifas</li>
                        <li>Trabaja con Nosotros</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-3">Servicio al Cliente</h4>
                    <ul className="space-y-1 text-sm">
                        <li>Solicitudes y Reclamos</li>
                        <li>Disponibilidad de servicios</li>
                        <li>Políticas de Datos</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-3">Contacto</h4>
                    <ul className="space-y-1 text-sm">
                        <li>WhatsApp: +57 1 5878000</li>
                        <li>Banca Telefónica: (601) 587 8000</li>
                        <li>Email: contacto@fintechpro.com</li>
                        <li className="flex gap-3 mt-3 text-white">
                            <a href="#"><Facebook className="w-6 h-6 hover:text-green-400" /></a>
                            <a href="#"><Twitter className="w-6 h-6 hover:text-green-400" /></a>
                            <a href="#"><Instagram className="w-6 h-6 hover:text-green-400" /></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-10 flex justify-center">
                <img
                    src="/fintech_logo.png"
                    alt="Logo FintechPro"
                    className="h-24 md:h-28 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
            </div>
        </footer>
    )
}

export default Footer;