import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpInerceptorService } from './Services/http-inerceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection(
    { eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(
     withInterceptorsFromDi()
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass : HttpInerceptorService,
      multi : true
    }
  ]
};
