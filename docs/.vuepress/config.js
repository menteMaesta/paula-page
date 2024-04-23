const path = require("path");

module.exports = {
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  locales: {
    "/": {
      lang: "en-US",
      title: "Paula Gomez",
      description: "Personal website with my projects",
      greeting: "Hello, ",
      introduction: "I'm Paula a fullstack js developer.",
      about: "I build features for startups and small businesses.",
      tools: ["Vue", "React", "Node", "Express", "MongoDB", "PostgreSQL"],
    },
    "/es/": {
      lang: "es-MX",
      title: "Paula Gomez",
      description: "Sitio web personal con mis proyectos",
      greeting: "Hola ",
      introduction: "soy Paula, desarrolladora fullstack en javascript.",
      about: "Construyo soluciones para startups y pequeñas empresas.",
      tools: ["Vue", "React", "Node", "Express", "MongoDB", "PostgreSQL"],
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "./public"),
      },
    },
  },
};
