const path = require("path");

const socials = (emailLabel) => [
  {
    name: "LinkedIn",
    icon: "fa-brands fa-linkedin",
    href: "https://www.linkedin.com/in/paula-gomez-en",
  },
  {
    name: "GitHub",
    icon: "fa-brands fa-github",
    href: "https://github.com/menteMaesta",
  },
  {
    name: emailLabel,
    icon: "fa-solid fa-envelope",
    href: "mailto:paulagomenr@gmail.com",
  },
];

const tools = [
  { name: "TypeScript", src: "ts" },
  { name: "React", icon: "fa-brands fa-react" },
  { name: "Remix", icon: "fa-solid fa-r" },
  { name: "Node", icon: "fa-brands fa-node-js" },
  { name: "PostgreSQL", icon: "fa-solid fa-database" },
  { name: "Prisma", icon: "fa-solid fa-cube" },
  { name: "AWS", icon: "fa-brands fa-aws" },
  { name: "Playwright", icon: "fa-solid fa-masks-theater" },
];

module.exports = {
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/hat.svg" }],
    [
      "script",
      {
        src: "https://kit.fontawesome.com/d29163bad1.js",
        crossorigin: "anonymous",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
    ],
  ],
  themeConfig: {
    search: false,
  },
  locales: {
    "/": {
      lang: "en-US",
      title: "Paula Gomez",
      description:
        "Paula Gomez — Full-stack software engineer (ex-Google). React, TypeScript, Node.js.",
      hero: {
        status: "Open to full-stack roles · Remote Mexico",
        headline:
          "I build fast, accessible web products end to end.",
        pitch:
          "Full-stack engineer with 6+ years across Google and venture-backed startups. I like turning messy problems into reliable systems: cutting API traffic in half, shipping AI search, and building design systems teams actually reuse.",
        resume: "Résumé (PDF)",
      },
      projects: {
        title: "Selected work",
        labels: { problem: "Problem", built: "What I built", result: "Result" },
        items: [
          {
            name: "Animated SVG icons",
            href: "https://mentemaesta.github.io/animated-loaders",
            image: "animatedIconsPic",
            alt: "Storybook catalog of animated icons",
            context: "Open-source npm package · side project",
            problem:
              "Loading and status icons in most apps are static or rely on heavy animation libraries.",
            built:
              "A lightweight npm package of CSS-animated SVG icons, documented in a public Storybook catalog.",
            result:
              "Drop-in animated icons with no runtime dependencies.",
            stack: ["SVG", "CSS animation", "Storybook", "npm"],
          }
        ]
      },
      experience: {
        title: "Experience",
        jobs: [
          {
            role: "Software Engineer L3",
            company: "Google",
            dates: "Oct 2025 – Oct 2026",
            highlight:
              "Cut redundant API calls by 50% and built real-time stability metrics pipelines.",
          },
          {
            role: "Full-Stack Developer",
            company: "Planet FWD",
            dates: "Sept 2024 – May 2025",
            highlight:
              "Shipped vector search and async calculation pipelines for a carbon SaaS.",
          },
          {
            role: "Software Engineer",
            company: "Cognota",
            dates: "Oct 2021 – Jan 2024",
            highlight:
              "Built a shared component library that sped up delivery 25%; 3× peer award winner.",
          },
          {
            role: "Developer",
            company: "Yellowme – Synapse",
            dates: "Sep 2019 – Oct 2021",
            highlight: "Implemented enterprise SAML SSO with AWS Cognito.",
          },
        ],
      },
      tooling: "Core stack",
      tools,
      connect: "Connect with me",
      socials: socials("Email"),
    },
    "/es/": {
      lang: "es-MX",
      title: "Paula Gomez",
      description:
        "Paula Gomez — Ingeniera de software full-stack (ex-Google). React, TypeScript, Node.js.",
      hero: {
        status: "Disponible para roles full-stack · Remoto",
        headline:
          "Hola, soy Paula. Construyo productos web rápidos y accesibles de principio a fin.",
        pitch:
          "Ingeniera full-stack con más de 6 años entre Google y startups. Me gusta convertir problemas complejos en sistemas confiables: reducir a la mitad el tráfico de APIs, lanzar búsqueda con IA y crear sistemas de diseño que los equipos realmente reutilizan.",
        resume: "CV (PDF)",
      },
      projects: {
        title: "Trabajo destacado",
        labels: {
          problem: "Problema",
          built: "Qué construí",
          result: "Resultado",
        },
        items: [
          {
            name: "Búsqueda semántica de datos de carbono",
            context: "Planet FWD · SaaS de contabilidad de carbono · 2024–2025",
            problem:
              "Los usuarios no encontraban los factores de emisión correctos en grandes conjuntos de datos usando búsqueda por palabras clave.",
            built:
              "Búsqueda en lenguaje natural con embeddings de OpenAI y procesos en segundo plano con Inngest para cálculos pesados con progreso en vivo.",
            result:
              "Resultados más relevantes y cálculos largos que ya no bloquean la interfaz.",
            stack: ["Remix", "TypeScript", "Prisma", "OpenAI", "Inngest"],
          },
          {
            name: "Iconos SVG animados",
            href: "https://mentemaesta.github.io/animated-loaders",
            image: "animatedIconsPic",
            alt: "Catálogo de iconos animados en Storybook",
            context: "Paquete npm open source · proyecto personal",
            problem:
              "Los iconos de carga y estado suelen ser estáticos o depender de librerías de animación pesadas.",
            built:
              "Un paquete npm ligero de iconos SVG animados con CSS, documentado en un catálogo público de Storybook.",
            result: "Iconos animados listos para usar, sin dependencias.",
            stack: ["SVG", "Animación CSS", "Storybook", "npm"],
          },
          {
            name: "Tienda Don Calcetón",
            href: "https://www.rechinido.com",
            image: "calcetonPic",
            alt: "Captura de la tienda Don Calcetón",
            context: "E-commerce freelance · en proceso",
            problem:
              "Un pequeño negocio necesitaba que sus clientes personalizaran productos antes de comprar.",
            built:
              "Una tienda con flujo de personalización de productos, del diseño al despliegue.",
            result:
              "Los clientes configuran sus productos en línea en lugar de por chat.",
            stack: ["React", "TypeScript", "Node", "TailwindCSS"],
          },
        ],
      },
      experience: {
        title: "Experiencia",
        jobs: [
          {
            role: "Software Engineer L3",
            company: "Google",
            dates: "Oct 2025 – Oct 2026",
            highlight:
              "Reduje 50% las llamadas redundantes a APIs y construí métricas de estabilidad en tiempo real.",
          },
          {
            role: "Desarrolladora Full-Stack",
            company: "Planet FWD",
            dates: "Sept 2024 – May 2025",
            highlight:
              "Lancé búsqueda vectorial y cálculos asíncronos para un SaaS de carbono.",
          },
          {
            role: "Ingeniera de Software",
            company: "Cognota",
            dates: "Oct 2021 – Ene 2024",
            highlight:
              "Creé una librería de componentes que aceleró la entrega 25%; 3 veces premio de reconocimiento.",
          },
          {
            role: "Desarrolladora",
            company: "Yellowme – Synapse",
            dates: "Sep 2019 – Oct 2021",
            highlight: "Implementé SSO SAML empresarial con AWS Cognito.",
          },
        ],
      },
      tooling: "Stack principal",
      tools,
      connect: "Contáctame",
      socials: socials("Correo"),
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "./assets"),
      },
    },
  },
};
