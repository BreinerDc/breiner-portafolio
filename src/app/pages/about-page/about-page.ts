import { Component } from '@angular/core';
import { educationItems } from '../../data/education.data';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {
  /**
   * La informacion academica se carga desde un archivo externo
   * 
   * Esto mantiene el HTML limpio y permite actualizar el contenido
   * sin tocar la estructura visual 
   */

    protected readonly educationItems = educationItems;
}
