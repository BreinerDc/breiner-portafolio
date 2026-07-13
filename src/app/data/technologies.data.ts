export type skillLevel = 'Bajo' | 'Intermedio' | 'Avanzado';

export interface Technology {
    name: string;
    category: string;
    level: skillLevel;
    icon: string;
}

export const technologies: Technology[] = [
    {
        name: 'Angular',
        category: 'Fronted',
        level: 'Intermedio',
        icon: 'devicon-angularjs-plain colored',
    },

    {
        name: 'TypeScript',
        category: 'Lenguaje',
        level: 'Intermedio',
        icon: 'devicon-typescript-plain colored',
    },

    {
        name: 'JavaScript',
        category: 'Lenguaje',
        level: 'Intermedio',
        icon: 'devicon-javascript-plain colored',
    },

    {
        name: 'PHP',
        category: 'Backend',
        level: 'Intermedio',
        icon: 'devicon-php-plain colored',
    },

    {
        name: 'Laravel',
        category: 'Backend',
        level: 'Intermedio',
        icon: 'devicon-laravel-plain colored',
    },

    {
        name: 'MySQL',
        category: 'Base de datos',
        level: 'Intermedio',
        icon: 'devicon-mysql-plain colored',
    },

    {
        name: 'Tailwind CSS',
        category: 'Estilos',
        level: 'Intermedio',
        icon: 'devicon-tailwindcss-plain colored',
    },

    {
        name: 'Flutter',
        category: 'Backend',
        level: 'Intermedio',
        icon: 'devicon-flutter-plain colored',

    },

    {
        name: 'Git',
        category: 'Controlador de versiones',
        level: 'Intermedio',
        icon: 'devicon-git-plain colored'
    }
]