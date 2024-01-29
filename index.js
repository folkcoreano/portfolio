const block = document.querySelector(".block");

const projects = [
  {
    title: "Poetr",
    id: "poetr",
    year: 2023,
    icon: "poetr.svg",
    url: "https://poetr.vercel.app",
    description:
      "Um site para ler poesia, contendo por volta de 24 mil poemas.",
    tags: [
      "pwa",
      "nuxt",
      "vue",
      "tailwind",
      "webworker",
      "indexedb",
      "nuxt-ui",
      "planetscale",
      "mysql",
      "prisma",
      "vercel",
      "typescript",
      "javascript",
      "nodejs",
      "site",
    ],
    position: "top",
  },
  {
    title: "PEPPC",
    id: "peppc",
    year: 2023,
    icon: "peppc.svg",
    url: "https://peppc.vercel.app",
    description:
      "Um site para calcular planos de assinatura de serviços de streaming.",
    tags: [
      "vercel",
      "vue",
      "pwa",
      "imagekit",
      "tailwind",
      "typescript",
      "javascript",
      "nodejs",
      "site",
    ],
    position: "top",
  },
  {
    title: "Baralho Maker",
    id: "editor",
    year: 2023,
    icon: "baralho-maker.svg",
    url: "https://editor.irmaogrande.com",
    description: "Editor de Baralhos para o jogo Irmão Grande & Brasileiro 2.",
    tags: [
      "vue",
      "pwa",
      "indexedb",
      "webworker",
      "vercel",
      "typescript",
      "javascript",
      "nodejs",
      "site",
    ],
    position: "top",
  },
  {
    title: "Roguelator",
    id: "roguelator",
    year: 2023,
    icon: "roguelator.svg",
    url: "https://roguelator.vercel.app",
    description:
      "Uma calculadora porém você precisa escolher o resultado correto. Contém um modo competitivo global apertando 'C' três vezes.",
    tags: [
      "nuxt",
      "vue",
      "postgresql",
      "prisma",
      "vercel",
      "typescript",
      "javascript",
      "nodejs",
      "site",
    ],
    position: "center",
  },
  {
    title: "Cartas Para Quem",
    id: "cartas",
    year: 2023,
    icon: "cartas-para-quem.png",
    url: "https://folkcoreano.itch.io/cartas-para-quem",
    description:
      "Um jogo onde você trabalha como um mago que escreve cartas em uma estação de trem.",
    tags: [
      "aseprite",
      "godot",
      "gdscript",
      "pixelart",
      "jogo",
      "obsidian",
      "itch.io",
    ],
    position: "top",
  },
  {
    title: "OvivimDEX",
    id: "ovidex",
    year: 2023,
    icon: "ovidex.png",
    url: "https://ovidex.deno.dev",
    description: "Um site guia para o jogo Ovivim.",
    tags: [
      "deno",
      "deno-deploy",
      "javascript",
      "typescript",
      "vue",
      "site",
      "imagekit",
    ],
    position: "top",
  },
  {
    title: "Mitski API Rest",
    id: "mitski",
    year: 2022,
    icon: "mitski.svg",
    url: "https://mitski.deno.dev",
    description: "API Rest com músicas da cantora Mitski.",
    tags: [
      "deno",
      "oak",
      "vue",
      "typescript",
      "javascript",
      "deno-deploy",
      "github-actions",
      "site",
      "api",
    ],
    position: "center",
  },
  {
    title: "Phoebe API Rest",
    id: "phoebe",
    year: 2022,
    icon: "phoebe.svg",
    url: "https://phoebe.deno.dev",
    description: "API Rest com músicas da cantora Phoebe Bridgers.",
    tags: [
      "deno",
      "oak",
      "vue",
      "typescript",
      "javascript",
      "deno-deploy",
      "github-actions",
      "site",
      "api",
    ],
    position: "center",
  },
  {
    title: "Manoel API Rest",
    id: "manoel",
    year: 2022,
    icon: "manoel.svg",
    url: "https://manoel.deno.dev",
    description: "API Rest com músicas da cantor Manoel Gomes.",
    tags: [
      "deno",
      "oak",
      "vue",
      "typescript",
      "javascript",
      "deno-deploy",
      "github-actions",
      "site",
      "api",
    ],
    position: "center",
  },
];

const el = ({
  elementName,
  className,
  textContent,
  childNode,
  objectPosition,
  href,
  target,
  src,
  alt,
}) => {
  const e = document.createElement(elementName);
  if (href) e.href = href;
  if (target) e.target = target;
  if (src) e.src = src;
  if (alt) e.alt = alt;
  if (className) {
    for (const name of className) {
      e.classList.add(name);
    }
  }
  if (objectPosition) e.style.objectPosition = objectPosition;
  if (textContent) e.textContent = textContent;
  if (childNode) {
    for (const child of childNode) {
      e.appendChild(child);
    }
  }
  return e;
};

const create_elements = (project) => {
  const imagekit = "https://ik.imagekit.io/yonas/";

  const project_tags = () => {
    const tags = [];
    for (const tag of project.tags.sort()) {
      tags.push(
        el({
          elementName: "div",
          className: ["project-tag"],
          textContent: tag,
        })
      );
    }
    return el({
      elementName: "div",
      className: ["project-tags"],
      childNode: tags,
    });
  };

  return el({
    elementName: "div",
    className: ["project", "animate"],
    childNode: [
      el({
        elementName: "a",
        className: ["project-title"],
        href: project.url,
        target: "_blank",
        childNode: [
          el({
            elementName: "span",
            childNode: [
              el({
                elementName: "img",
                className: ["project-icon"],
                alt: project.title,
                src: `${imagekit}/site/projects/${project.icon}`,
              }),
            ],
          }),
          el({
            elementName: "span",
            textContent: project.title,
          }),
          el({
            elementName: "span",
            className: ["year"],
            textContent: `(${project.year})`,
          }),
        ],
      }),
      el({
        elementName: "a",
        className: ["project-title"],
        href: project.url,
        target: "_blank",
        childNode: [
          el({
            elementName: "img",
            className: ["project-image"],
            alt: project.title,
            src: `${imagekit}/portfolio/${project.id}.png?tr=f-webp`,
            objectPosition: project.position,
          }),
        ],
      }),
      el({
        elementName: "div",
        className: ["project-description"],
        textContent: project.description,
      }),
      el({
        elementName: "a",
        className: ["project-link"],
        textContent: project.url,
        href: project.url,
        target: "_blank",
      }),
      project_tags(),
    ],
  });
};

const project_array = [];

for (const project of projects) {
  project_array.push(create_elements(project));
}

block.appendChild(
  el({
    elementName: "div",
    className: ["projects"],
    childNode: project_array,
  })
);

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    const project = entry.target.classList;
    entry.isIntersecting ? project.add("animate") : project.remove("animate");
  }
});

for (const project of project_array) {
  observer.observe(project);

  const project_image = project.querySelector(".project-image").classList;
  project.onmouseenter = () => project_image.add("image-hover");
  project.onmouseleave = () => project_image.remove("image-hover");
}
