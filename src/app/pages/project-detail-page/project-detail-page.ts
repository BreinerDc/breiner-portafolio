import { Component, inject } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { findProjectsBySlug } from '../../data/projects.data';

@Component({
  selector: 'app-project-detail-page',
  imports: [],
  templateUrl: './project-detail-page.html',
  styleUrl: './project-detail-page.css',
})
export class ProjectDetailPage {

  private readonly route = inject(ActivatedRoute);

  /*
    Obtenemos el slug desde la URL.

    Ejemplo:
    /proyectos/portafolio-profesional

    El slug permite encontrar el proyecto correspondiente
    dentro del archivo de datos.
  */

  protected readonly slug = this.route.snapshot.paramMap.get('slug') ?? '';

  /*
    Buscamos el proyecto usando el slug.

    Si el slug no existe, la vista mostrará un mensaje
    indicando que el proyecto no fue encontrado.
  */

  protected readonly project = findProjectsBySlug(this.slug);
}
