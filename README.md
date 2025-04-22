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

## 📬 Contacto
Desarrollado por **Rogelio Ramírez Carmona** – Frontend Developer.

📧 rogelios-1992@hotmail.com

---

> Proyecto profesional enfocado en experiencia de usuario, estructura limpia, diseño claro y rendimiento accesible.
