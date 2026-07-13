import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutPage } from './pages/about-page/about-page';
import { ProjectsPage } from './pages/projects-page/projects-page';
import { ContactPage } from './pages/contact-page/contact-page';
import { TechnologiesPage } from './pages/technologies-page/technologies-page';
import { ProjectDetailPage } from './pages/project-detail-page/project-detail-page';

/*
  Las rutas organizan las vistas del portafolio.

  /proyectos muestra el listado completo.
  /proyectos/:slug muestra el detalle de un proyecto específico.
*/
export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Breiner Durán | Portafolio',
  },
  {
    path: 'sobre-mi',
    component: AboutPage,
    title: 'Sobre mí | Breiner Durán',
  },
  {
    path: 'tecnologias',
    component: TechnologiesPage,
    title: 'Tecnologías | Breiner Durán',
  },
  {
    path: 'proyectos',
    component: ProjectsPage,
    title: 'Proyectos | Breiner Durán',
  },
  {
    path: 'proyectos/:slug',
    component: ProjectDetailPage,
    title: 'Detalle de proyecto | Breiner Durán',
  },
  {
    path: 'contacto',
    component: ContactPage,
    title: 'Contacto | Breiner Durán',
  },
  {
    path: '**',
    redirectTo: '',
  },
];