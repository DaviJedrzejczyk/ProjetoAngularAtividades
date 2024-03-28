import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';

import { routes } from './app.routes';

import localePt from '@angular/common/locales/pt';
import {
  IMAGE_LOADER,
  ImageLoaderConfig,
  provideImgixLoader,
  registerLocaleData,
} from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './interceptor/http.interceptor';
import { provideTranslate } from './app.translate';
import { environment } from 'environments/environment';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
      })
    ),
    provideHttpClient(withInterceptors([httpInterceptor])),
    provideTranslate(),
    provideImgixLoader(environment.img),
    provideAnimationsAsync(),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
};

// {
//   provide: IMAGE_LOADER,
//   useValue: (config: ImageLoaderConfig) => {
//     const img = config.src.split('.');
//     const name = img.shift();
//     const type = img.pop();
//     const width = config.width;
//     return `${environment.img}${config.src}-${
//       width ? '-' + width + 'w' : ''
//     }.${type}`;
//   },
// },
