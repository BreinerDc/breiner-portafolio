import { Component } from '@angular/core';
import {
  Technology,
  technologies,
  technologyCategories,
} from '../../data/technologies.data';

interface TechnologyGroup {
  label: string;
  description: string;
  items: Technology[];
}

@Component({
  selector: 'app-technologies-page',
  imports: [],
  templateUrl: './technologies-page.html',
  styleUrl: './technologies-page.css',
})

export class TechnologiesPage {
  /*
    Agrupamos las tecnologías por categoría.

    Esto evita mostrar una lista larga y desordenada.
    Además, hace que el usuario entienda mejor en qué áreas trabajas.
  */

    protected readonly technologyGroups: TechnologyGroup[] = technologyCategories.map(
      (category) => ({
        label: category.label,
        description: category.description,
        items: technologies.filter((technology) => technology.category === category.key),
      }),
    );
}
