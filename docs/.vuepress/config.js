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
      greeting: "Hello, ",
      introduction: "I'm Paula a fullstack js developer.",
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
    },
    "/es/": {
      lang: "es-MX",
      title: "Paula Gomez",
      description: "Sitio web personal con mis proyectos",
      greeting: "Hola ",
      introduction: "soy Paula, desarrolladora fullstack en javascript.",
      about: "Construyo soluciones para startups y pequeñas empresas.",
      tooling: "Tecnologías:",
      tools: [
        { name: "React", icon: "fa-brands fa-react" },
        { name: "Vue", icon: "fa-brands fa-vuejs" },
        { name: "TypeScript", icon: "fa-brands fa-js" },
        { name: "Node", icon: "fa-brands fa-node-js" },
        { name: "Express", icon: "fa-brands fa-node-js" },
        { name: "Adonis", icon: "fa-brands fa-node-js" },
        { name: "PostgreSQL", icon: "fa-brands fa-database" },
        { name: "AWS Cognito", icon: "fa-brands fa-aws" },
        { name: "TailwindCSS", icon: "fa-brands fa-css" },
        { name: "Digital Ocean", icon: "fa-brands fa-digital-ocean" },
        { name: "Copilot", icon: "fa-brands fa-github-alt" },
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
