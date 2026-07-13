export interface ContactLink {
    label: string;
    value: string;
    url: string;
    icon: string;
}

/*
  Centralizamos los datos de contacto para no escribirlos directamente
  dentro del HTML.

  Así, si después cambias tu correo, GitHub o LinkedIn, solo editas
  este archivo.
*/

export const contactLinks: ContactLink[] = [
    {
        label: 'Correo',
        value: 'breinerdanieldurancardenas@gmail.com',
        url: 'mailto:breinerdanieldurancardenas@gmail.com',
        icon: '✉️',
    },

    {
        label: 'GitHub',
        value: 'Repositorios',
        url: 'https://github.com/durancardenasbreinerdaniel-netizen',
        icon: '💻',
    },

    {
        label: 'LinkedIn',
        value: 'Perfil Profesional',
        url: 'https://www.linkedin.com/feed/',
        icon: '🔗',
    }
]