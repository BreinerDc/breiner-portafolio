export interface ProjectLink {
    label: string;
    url: string;
    isExternal: boolean;
}

export interface Project {
    slug: string;
    title: string;
    type: string;
    status: string;
    description: string;
    longDescription: string;
    problem: string;
    solution: string;
    learnings: string[];
    technologies: string[];
    links: ProjectLink[];
}

export const projects: Project[] = [
    {
    slug: 'portafolio-profesional',
    title: 'Portafolio Profesional',
    type: 'Frontend',
    status: 'En construccion',
    description: 'Sitio web personal construido con Angular para presentar perfil, habilidades, proyectos y contacto profesional',
    longDescription: 
        'Portafolio personal diseñado como una aplicacion frontend moderna, con rutas separadas, modo oscuro y claro, stack tecnologicos con iconos, componentes reutilizables y estructura pensada para crecer',
    problem: 
        'Un perfil profesional necesita mostrar habilidades, proyectos y datos de contacto de manera clara, visual y fácil de navegar.',
    solution:
        'Crear una aplicación frontend con Angular donde la página principal muestre lo esencial y las vistas internas permitan ampliar información sin sobrecargar el inicio.',
    learnings: [
        'Creación de rutas con Angular Router.',
        'Uso de componentes standalone.',
        'Diseño responsive con Tailwind CSS.',
        'Manejo de tema oscuro y claro con variables CSS.',
    ],
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],
    links: [
        {
            label: 'Github',
            url: '#',
            isExternal: true,
        },
        {
            label: 'Demo',
            url: '#',
            isExternal: true,
        }
    ]
    
    },
];

/*
 *Estos serán los proyectos que aparecen en la página principal.
 *
 *Usamos slice para no sobrecargar el inicio.
*/

export const featureProjects: Project[] = projects.slice(0, 3);

export function findProjectsBySlug(slug: string): Project | undefined {
    return projects.find((projects) => projects.slug === slug)
}