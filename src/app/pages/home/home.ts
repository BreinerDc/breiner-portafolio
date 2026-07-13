import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { technologies } from '../../data/technologies.data';
import { projects } from '../../data/projects.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  /**
   * Mostramos solo una parte del stack en la pagina principal
   * 
   * Esto mantiene el inicio limpio y evita que la vista 
   * tenga demaciada informacio 
   */

    protected readonly mainTechnologies = technologies.slice(0, 8);

  /**
   * En el inicio solo aparecen los projectos destacados 
   * 
   * la lista completa aparecera en /projects
   */

  protected readonly projects = projects;
}
