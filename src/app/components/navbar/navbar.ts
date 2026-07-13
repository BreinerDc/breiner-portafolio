import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, ThemeToggle],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  /*
    Este signal controla si el menú móvil está abierto o cerrado.

    Lo usamos porque en móvil no hay espacio suficiente para mostrar
    todos los enlaces en la barra superior.
  */

    protected readonly mobileMenuIsOpen = signal(false);

    protected toggleMobileMenu(): void {
      this.mobileMenuIsOpen.update((isOpen) => !isOpen);
    }

    protected closeMobileMenu(): void {
      this.mobileMenuIsOpen.set(false)
    }
}
