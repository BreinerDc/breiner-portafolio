import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutPage } from './pages/about-page/about-page';
import { ProjectsPage } from './pages/projects-page/projects-page';
import { ContactPage } from './pages/contact-page/contact-page';
import { TechnologiesPage } from './pages/technologies-page/technologies-page';
/**
 * Mantenemos la vista principal limpia
 * 
 * Mas adelante agregamos:
 * /proyectos
 * /sobre-mi
 * /contacto
 * 
 * La pagina  de inicio solo mostrara lo mas importante
 */

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Breiner Duran | Portafolio',
    },

    {
        path: 'sobre-mi',
        component: AboutPage,
        title: 'Sobre mi | Breiner Duran',
    },

    {
        path: 'tecnologias',
        component: TechnologiesPage,
        title: 'Tecnologias | Breiner Duran',
    },

    {
        path: 'proyectos',
        component: ProjectsPage,
        title: 'Mis proyectos | Breiner Duran',
    },

    {
        path: 'contacto',
        component: ContactPage,
        title: 'Contacto | Breiner Duran',
    },

    {
        path: '**',
        redirectTo: '',
    }
];
