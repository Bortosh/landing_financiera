# FintechPro – Tu Banca Digital

Landing page para una fintech moderna, confiable y centrada en el usuario. Presenta productos financieros digitales con filtros interactivos, animaciones suaves, navegación mobile-first y estructura modular. Perfecta para empresas de tecnología financiera, banca digital o como demostración profesional de habilidades frontend.

---

## 🚀 Tecnologías utilizadas (más relevantes)

- **Next.js 15 App Router** – Routing moderno y estructura optimizada
- **React 19** – Última versión con soporte para server components
- **TypeScript** – Tipado estricto y componentes seguros
- **TailwindCSS v4** – Utilidades para un diseño rápido y responsivo
- **Framer Motion** – Animaciones suaves y accesibles
- **Styled Components** – Componentes estilizados reutilizables
- **Lucide React** – Íconos modernos y minimalistas

---

## 📁 Estructura del proyecto

```
landing-financiera/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── product/[id]/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── ProductCard.tsx
│   ├── ProductToggle.tsx
│   └── (otros por secciones como Hero, Nosotros, etc.)
├── data/
│   └── mock-products-sin-riesgo.json
├── public/
│   └── (imagenes de productos y logo)
├── types/
│   └── product.ts
├── README.md
└── package.json
```

---

## 🧠 Funcionalidades destacadas

- Diseño 100% responsivo y accesible
- Filtros por categoría con botones dinámicos
- Página de detalle individual por producto
- JSON mockeado con +12 productos financieros
- Componente toggle animado para mostrar/ocultar productos
- Indicador visual de tasa de interés
- Navbar colapsable con menú móvil

---

## 🧪 Accesibilidad (a11y)

- `aria-label` en botones e íconos sin texto
- Navegación por teclado (`tabindex` respetado por semántica HTML)
- Imágenes con `alt` descriptivos

---

## 🔍 Cómo correr el proyecto localmente

```bash
npm install
npm run dev
```

Visita: `http://localhost:3000`

---

## 📦 Datos mockeados

Se encuentran en:
```bash
/data/mock-products-sin-riesgo.json
```
Incluyen:
- `nombre`
- `tipo`
- `tasaInteres`
- `beneficios`
- `requisitos`
- `imagen`
- `categoria`
- `solicitado`
- `descripcion`

---

## 🧩 Preguntas complementarias

**1. ¿Qué criterios seguiste para diseñar la UI de productos financieros?**

Me enfoqué en un diseño claro, moderno y confiable, usando una paleta de colores que transmitiera seguridad (verde, blanco, gris) y priorizando la legibilidad. La estructura está inspirada en modelos reales de banca digital, con un enfoque en mobile-first y experiencia de usuario fluida.

**2. ¿Cómo decidiste cuándo usar Tailwind y cuándo Styled Components?**

Tailwind fue ideal para estilos rápidos y utilitarios en layout general, espaciados, colores, tamaños, etc. Usé Styled Components cuando necesitaba encapsular estilos en componentes reutilizables como `ProductCard`, permitiendo una mayor cohesión y mantenimiento de estilos a largo plazo.

**3. ¿Qué harías para escalar este proyecto en una aplicación real de banca digital?**

- Implementaría consumo desde una API real (REST o GraphQL)
- Autenticación con OAuth o JWT
- Dashboard para usuarios logueados
- Tests unitarios e integración (Jest + RTL)
- Módulo de administración de productos
- Persistencia de estado global (Zustand o Redux)

**4. ¿Qué herramientas usarías para mejorar el rendimiento y monitoreo en producción?**

- **Vercel Analytics** para tráfico y métricas
- **Lighthouse** y **Core Web Vitals** para performance
- **Sentry** para monitoreo de errores en frontend
- **LogRocket** o **Clarity** para comportamiento de usuario
- **Bundle Analyzer** para analizar peso del build


---

## 🟢 Deployment

El proyecto está desplegado y disponible en línea en:

🔗 [https://www.fintechramirez.xyz](https://www.fintechramirez.xyz)

Puedes acceder y probar la experiencia completa de navegación, visualización de productos y estructura responsive directamente desde tu navegador.

---

## 📬 Contacto
Desarrollado por **Rogelio Ramírez Carmona** – Frontend Developer.

📧 rogelios-1992@hotmail.com

---

> Proyecto profesional enfocado en experiencia de usuario, estructura limpia, diseño claro y rendimiento accesible.
