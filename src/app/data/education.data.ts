export interface EducationItem {
    title: string;
    institution: string;
    description: string;
    status: string;
}

/**
 * Estos datos se separan de HTML para que la informacion 
 * sea mas facil de actualizar despues 
 */

export const educationItems: EducationItem[] = [
    {
        title: 'Ingenieria en Sistemas',
        institution: 'Universidad Libre',
        description: 'Formación enfocada en programación, bases de datos, ingeniería de software, redes y construcción de soluciones tecnológicas.',
        status: 'En curso',
    },

    {
    title: 'Diplomado en Inteligencia Artificial',
    institution: 'Formación complementaria',
    description:'Aprendizaje orientado al uso de herramientas de inteligencia artificial y comprensión de sus aplicaciones en procesos digitales.',
    status: 'Completado',
    },

    {
        title: 'Bachiller Academico',
        institution: 'I.E.D Maria Auxiliadora',
        description: '',
        status: 'completado'
    }
]