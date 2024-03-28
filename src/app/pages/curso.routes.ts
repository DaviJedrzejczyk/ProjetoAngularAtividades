import { Routes } from '@angular/router';
import { canMatchGuard } from 'app/guard/can-match.guard';

export const cursoRoutes: Routes = [
  {
    path: '',
    title: 'Home da página',
    loadComponent: () => import('./home/home.component'),
    canMatch: [canMatchGuard],
  },
  {
    path: 'sobre',
    title: 'Sobre da página',
    loadComponent: () => import('./sobre/sobre.component'),
  },
  {
    path: 'servicos/:id',
    title: 'Serviços prestados da página',
    loadComponent: () =>
      import('./servicos-prestados/servicos-prestados.component'),
  },
];
