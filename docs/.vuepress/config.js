const path = require("path");

module.exports = {
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "script",
      {
        src: "https://kit.fontawesome.com/d29163bad1.js",
        crossorigin: "anonymous",
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
      description: "Personal website with my projects",
      introduction: "Hello, I'm Paula a ",
      profession: "Fullstack js developer.",
      about: "I build features for startups and small businesses.",
      tooling: "Tooling:",
      tools: [
        { name: "React", icon: "fa-brands fa-react" },
        { name: "Vue", icon: "fa-brands fa-vuejs" },
        { name: "TypeScript", icon: "fa-brands fa-js" },
        { name: "Node", icon: "fa-brands fa-node-js" },
        { name: "Express", icon: "fa-brands fa-node-js" },
        { name: "Adonis", src: "adonis" },
        { name: "PostgreSQL", icon: "fa-solid fa-database" },
        { name: "AWS Cognito", icon: "fa-brands fa-aws" },
        { name: "TailwindCSS", src: "tailwind" },
        { name: "Digital Ocean", icon: "fa-brands fa-digital-ocean" },
        { name: "Copilot", src: "copilot" },
      ],
      connect: "Connect with me",
      socials: [
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
          name: "Email",
          icon: "fa-solid fa-envelope",
          href: "mailto:paulagomenr@gmail.com",
        },
      ],
    },
    "/es/": {
      lang: "es-MX",
      title: "Paula Gomez",
      description: "Sitio web personal con mis proyectos",
      introduction: "Hola soy Paula, desarrolladora",
      profession: " fullstack en js.",
      about: "Construyo soluciones para startups y pequeñas empresas.",
      tooling: "Tecnologías:",
      tools: [
        { name: "React", icon: "fa-brands fa-react" },
        { name: "Vue", icon: "fa-brands fa-vuejs" },
        { name: "TypeScript", icon: "fa-brands fa-js" },
        { name: "Node", icon: "fa-brands fa-node-js" },
        { name: "Express", icon: "fa-brands fa-node-js" },
        { name: "Adonis", src: "adonis" },
        { name: "PostgreSQL", icon: "fa-solid fa-database" },
        { name: "AWS Cognito", icon: "fa-brands fa-aws" },
        { name: "TailwindCSS", src: "tailwind" },
        { name: "Digital Ocean", icon: "fa-brands fa-digital-ocean" },
        { name: "Copilot", src: "copilot" },
      ],
      connect: "Contáctame",
      socials: [
        {
          name: "LinkedIn",
          icon: "fa-brands fa-linkedin",
          href: "https://www.linkedin.com/in/paula-gomez-en/",
        },
        {
          name: "GitHub",
          icon: "fa-brands fa-github",
          href: "https://github.com/menteMaesta",
        },
        {
          name: "Correo",
          icon: "fa-solid fa-envelope",
          href: "mailto:paulagomenr@gmail.com",
        },
      ],
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
