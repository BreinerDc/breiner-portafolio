import { Component, inject } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  imports: [],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.css',
})
export class ThemeToggle {
  /**
   * inject permite usar el servicio sin crear un constructor manual
   * este servicio controla y guarda el tema del protafolio
   */

  protected readonly themeService = inject(ThemeService);
}
