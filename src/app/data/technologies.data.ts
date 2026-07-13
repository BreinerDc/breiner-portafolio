export type SkillLevel = 'Bajo' | 'Intermedio' | 'Avanzado';

export type TechnologyCategory =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'language'
  | 'tools';

export interface Technology {
  name: string;
  category: TechnologyCategory;
  categoryLabel: string;
  level: SkillLevel;
  icon: string;
  description: string;
}

/*
  Estas categorías nos permiten organizar el stack tecnológico
  sin mezclar todas las herramientas en una sola lista.

  Esto hace que la vista sea más clara y profesional.
*/
export const technologyCategories: {
  key: TechnologyCategory;
  label: string;
  description: string;
}[] = [
  {
    key: 'frontend',
    label: 'Frontend',
    description: 'Tecnologías para construir interfaces modernas y responsivas.',
  },
  {
    key: 'backend',
    label: 'Backend',
    description: 'Herramientas para lógica de negocio, APIs y servicios.',
  },
  {
    key: 'database',
    label: 'Bases de datos',
    description: 'Tecnologías para almacenar, consultar y organizar información.',
  },
  {
    key: 'language',
    label: 'Lenguajes',
    description: 'Lenguajes que uso para resolver problemas y construir sistemas.',
  },
  {
    key: 'tools',
    label: 'Herramientas',
    description: 'Herramientas de desarrollo, control de versiones y entorno.',
  },
];

/*
  Usamos niveles en texto y no porcentajes.

  Esto evita dar una falsa precisión. Decir "Intermedio" comunica mejor
  que puedes trabajar con esa tecnología en proyectos reales, pero todavía
  sigues fortaleciendo experiencia.
*/
export const technologies: Technology[] = [
  {
    name: 'Angular',
    category: 'frontend',
    categoryLabel: 'Frontend',
    level: 'Intermedio',
    icon: 'devicon-angularjs-plain colored',
    description:
      'Framework frontend para construir aplicaciones web modernas basadas en componentes.',
  },
  {
    name: 'TypeScript',
    category: 'language',
    categoryLabel: 'Lenguaje',
    level: 'Intermedio',
    icon: 'devicon-typescript-plain colored',
    description:
      'Lenguaje basado en JavaScript que permite escribir código más seguro y ordenado.',
  },
  {
    name: 'JavaScript',
    category: 'language',
    categoryLabel: 'Lenguaje',
    level: 'Intermedio',
    icon: 'devicon-javascript-plain colored',
    description:
      'Lenguaje esencial para crear interacción en aplicaciones web.',
  },
  {
    name: 'HTML5',
    category: 'frontend',
    categoryLabel: 'Frontend',
    level: 'Intermedio',
    icon: 'devicon-html5-plain colored',
    description:
      'Lenguaje de marcado usado para estructurar el contenido de las páginas web.',
  },
  {
    name: 'CSS3',
    category: 'frontend',
    categoryLabel: 'Frontend',
    level: 'Intermedio',
    icon: 'devicon-css3-plain colored',
    description:
      'Tecnología usada para dar estilo visual, diseño y presentación a las interfaces.',
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    categoryLabel: 'Frontend',
    level: 'Intermedio',
    icon: 'devicon-tailwindcss-original colored',
    description:
      'Framework de utilidades CSS para construir interfaces modernas rápidamente.',
  },
  {
    name: 'PHP',
    category: 'backend',
    categoryLabel: 'Backend',
    level: 'Intermedio',
    icon: 'devicon-php-plain colored',
    description:
      'Lenguaje usado para construir aplicaciones web, servicios backend y lógica del servidor.',
  },
  {
    name: 'Laravel',
    category: 'backend',
    categoryLabel: 'Backend',
    level: 'Intermedio',
    icon: 'devicon-laravel-original colored',
    description:
      'Framework PHP para crear aplicaciones web empresariales, APIs y sistemas administrativos.',
  },
  {
    name: 'MySQL',
    category: 'database',
    categoryLabel: 'Base de datos',
    level: 'Intermedio',
    icon: 'devicon-mysql-plain colored',
    description:
      'Sistema de base de datos relacional para almacenar y consultar información estructurada.',
  },
  {
    name: 'Java',
    category: 'language',
    categoryLabel: 'Lenguaje',
    level: 'Bajo',
    icon: 'devicon-java-plain colored',
    description:
      'Lenguaje orientado a objetos útil para aprender programación estructurada y sistemas robustos.',
  },
  {
    name: 'Python',
    category: 'language',
    categoryLabel: 'Lenguaje',
    level: 'Bajo',
    icon: 'devicon-python-plain colored',
    description:
      'Lenguaje versátil usado en automatización, análisis de datos e inteligencia artificial.',
  },
  {
    name: 'Git',
    category: 'tools',
    categoryLabel: 'Herramienta',
    level: 'Intermedio',
    icon: 'devicon-git-plain colored',
    description:
      'Sistema de control de versiones para gestionar cambios en el código.',
  },
  {
    name: 'GitHub',
    category: 'tools',
    categoryLabel: 'Herramienta',
    level: 'Intermedio',
    icon: 'devicon-github-original',
    description:
      'Plataforma para alojar repositorios, colaborar y mostrar proyectos profesionales.',
  },
  {
    name: 'Linux',
    category: 'tools',
    categoryLabel: 'Herramienta',
    level: 'Intermedio',
    icon: 'devicon-linux-plain colored',
    description:
      'Sistema operativo usado como entorno de desarrollo y administración técnica.',
  },
  {
    name: 'VS Code',
    category: 'tools',
    categoryLabel: 'Herramienta',
    level: 'Intermedio',
    icon: 'devicon-vscode-plain colored',
    description:
        'Editor de código principal para desarrollo web y gestión de proyectos.',
  },
];