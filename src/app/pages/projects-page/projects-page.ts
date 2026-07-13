import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { projects } from '../../data/projects.data';

@Component({
  selector: 'app-projects-page',
  imports: [RouterLink],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css',
})
export class ProjectsPage {
  /*
    Aquí mostramos todos los proyectos.

    La página principal solo muestra destacados,
    pero esta vista permite ver el listado completo.
  */
  protected readonly projects = projects;
}