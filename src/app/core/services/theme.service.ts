import { Injectable, signal } from "@angular/core";

export type ThemeMode = 'dark' | 'light';

@Injectable({
    providedIn: 'root',
})

export class ThemeService {
    /*
        Guardamos las claves en una constante para evitar escribir 
        el mismo texto varias veces y reducir errores
    */
    private readonly storageKey = 'portafolio-theme';

    /**
     * signal permite manejar estado reactivo en Angular
     * aqui guardamos el tema actual de portafolio
     */
    readonly currentTheme = signal<ThemeMode>(this.getInitialTheme());

    constructor() {
        /**
        * Aplicamos el tema apenas se carga el servicio
        * asi evitamos que la pagina aparezca con un tema incorrecto
        */

        this.applyTheme(this.currentTheme());
    }

    toggleTheme(): void{
        const nextTheme: ThemeMode = this.currentTheme() === 'dark' ? 'light' : 'dark';

        this.currentTheme.set(nextTheme);
        this.saveTheme(nextTheme);
        this.applyTheme(nextTheme);
    }

    private getInitialTheme(): ThemeMode {
        /**
         * validamos que windows exista para evitar errores 
         * si en el futuro usamos SSR o prerender
         */

        if (typeof window === 'undefined'){
            return 'dark';
        }

        const saveTheme = window.localStorage.getItem(this.storageKey);

        if(saveTheme === 'dark' || saveTheme === 'light'){
            return saveTheme;
        }

        /**
         * Por defecto usamos modo oscuro porque el diseño principal esta basdao 
         * en una estetica dark con tonos morados suaves 
         */

        return 'dark';  
    }

    private saveTheme(theme: ThemeMode): void {
        if(typeof window === 'undefined'){
            return;
        }

        window.localStorage.setItem(this.storageKey, theme);
    }

    private applyTheme(theme: ThemeMode): void {
        if(typeof window === 'undefined'){
            return;
        }

        /**
         * Colocamos el tema en el elemento html
         * <html data-theme="dark">
         * <html data-theme="light">
         * 
         * Luego CSS usa ese atributo para cambiar las variables locales
         */

        document.documentElement.dataset['theme'] = theme;
    }
    
}