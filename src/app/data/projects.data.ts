export interface Project {
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    status: string;
    type: string;
}

export const featuredProjects: Project[] = [
    {
    title: 'Portafolio Profesional',
    description: 'Sitio web personal construido con Angular para presentar perfil, habilidades, proyectos y contacto profesional',
    longDescription: 'Portafolio personal diseñado como una aplicacion frontend moderna, con rutas separadas, modo oscuro y claro, stack tecnologicos con iconos, componentes reutilizables y estructura pensada para crecer',
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],
    status: 'en construccion',
    type: 'Frontend',
    },
]