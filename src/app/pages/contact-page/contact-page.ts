import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { contactLinks } from '../../data/contact.data';


@Component({
  selector: 'app-contact-page',
  imports: [FormsModule],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {
  /*
    Cargamos los enlaces desde un archivo de datos.

    Esto evita repetir información y mantiene la vista más limpia.
  */

    protected readonly contactLinks = contactLinks;


  /*
    Estos valores se conectan con el formulario usando ngModel.

    No usamos todavía un backend. El objetivo de esta fase es crear
    una experiencia visual funcional usando mailto.
  */

  protected name = '';
  protected email = '';
  protected subject = '';
  protected message = '';

  protected buildMailtoLink(): string{
    const targetEmail = 'breinerdanieldurancardenas@gmail.com';

    /*
      Creamos un asunto por defecto si el usuario no escribe uno.
    */
    const finalSubject = this.subject.trim()
    ? this.subject.trim()
    : 'Contacto desde portafolio';

    /*
      Construimos el cuerpo del correo con los datos escritos.
    */

    const body = `
      Nombre: ${this.name}
      Correo: ${this.email}

      Mensaje: ${this.message}
    `.trim();

    /*
      encodeURIComponent evita que espacios, saltos de línea o caracteres
      especiales rompan el enlace mailto.
    */

      return `mailto:${targetEmail}?subject=${encodeURIComponent(finalSubject)}&body=${encodeURIComponent(body)}`

  }


}
