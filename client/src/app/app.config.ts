// src/app/app.config.ts
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule) // pour les services HTTP
  ]
};

// Tes paramètres personnalisés restent dans un objet séparé
export const appSettings = {
  isCollapse_menu: false,
  font_family: 'Roboto'
};
