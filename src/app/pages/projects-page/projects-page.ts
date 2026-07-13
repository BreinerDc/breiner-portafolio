import { Component } from '@angular/core';
import { featuredProjects } from '../../data/projects.data';

@Component({
  selector: 'app-projects-page',
  imports: [],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css',
})
export class ProjectsPage {
  /*
    Aquí mostramos todos los proyectos disponibles.

    Más adelante, si el portafolio crece, este arreglo podría venir
    desde una API o un archivo JSON.
  */

    protected readonly projects = featuredProjects;
}
