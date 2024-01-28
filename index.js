const projects_first_row = document.querySelector("[data-projects='first']");
const projects_second_row = document.querySelector("[data-projects='second']");

const imagekit = "https://ik.imagekit.io/yonas/";

const projects_first = [
  {
    title: "Poetr",
    id: "poetr",
    icon: "poetr.svg",
    url: "https://poetr.vercel.app",
    delay: "100ms",
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
    ],
    position: "top",
  },
  {
    title: "PEPPC",
    id: "peppc",
    icon: "peppc.svg",
    url: "https://peppc.vercel.app",
    delay: "200ms",
    description:
      "Um site para calcular planos de assinatura de serviços de streaming.",
    tags: ["vercel", "vue", "tailwind", "typescript", "javascript", "nodejs"],
    position: "top",
  },
];

const projects_second = [
  {
    title: "Baralho Maker",
    id: "editor",
    icon: "baralho-maker.svg",
    url: "https://editor.irmaogrande.com",
    delay: "300ms",
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
    ],
    position: "top",
  },
  {
    title: "Roguelator",
    id: "roguelator",
    icon: "roguelator.svg",
    url: "https://roguelator.vercel.app",
    delay: "400ms",
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
    ],
    position: "center",
  },
];

const create_div = (project) => {
  const main = () => {
    const div = document.createElement("div");
    div.classList.add("project");
    div.style.animationDelay = project.delay;
    return div;
  };

  const title = () => {
    const link = document.createElement("a");
    link.href = project.url;
    link.target = "_blank";
    link.classList.add("project-title");

    const img = document.createElement("img");
    img.classList.add("project-icon");
    img.alt = project.title;
    img.src = `${imagekit}/site/projects/${project.icon}`;

    const span = document.createElement("span");

    const span_title = document.createElement("span");
    span_title.textContent = project.title;

    const icon = span.appendChild(img);

    link.appendChild(icon);
    link.appendChild(span_title);

    return link;
  };

  const img = () => {
    const link = document.createElement("a");
    link.href = project.url;
    link.target = "_blank";
    link.classList.add("project-title");

    const img = document.createElement("img");
    img.classList.add("project-image");
    img.alt = project.title;
    img.src = `${imagekit}/portfolio/${project.id}.png?tr=f-webp`;
    img.style.objectPosition = project.position;

    link.appendChild(img);

    return link;
  };

  const tags = () => {
    const tags = document.createElement("div");
    tags.classList.add("project-tags");

    for (const t of project.tags.sort()) {
      const tag = document.createElement("div");
      tag.classList.add("project-tag");
      tag.textContent = t;
      tags.appendChild(tag);
    }

    return tags;
  };

  const desc_div = document.createElement("div");
  desc_div.classList.add("project-description");
  desc_div.textContent = project.description;

  const final = main();

  final.appendChild(title());
  final.appendChild(img());
  final.appendChild(desc_div);
  final.appendChild(tags());

  return final;
};

for (const project of projects_first) {
  projects_first_row.append(create_div(project));
}

for (const project of projects_second) {
  projects_second_row.append(create_div(project));
}
