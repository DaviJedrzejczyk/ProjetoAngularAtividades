import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'curso',
    loadChildren: () =>
      import('./pages/curso.routes').then((e) => e.cursoRoutes),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component'),
  },
];

//   {
//     path: 'dashboard',
//     children: [
//       {
//         path: '',
//         title: 'Home da página',
//         component: HomeComponent,
//       },
//       {
//         path: 'sobre',
//         title: 'Sobre da página',
//         component: SobreComponent,
//       },
//       {
//         path: 'servicos/:id',
//         title: 'Serviços prestados da página',
//         component: ServicosPrestadosComponent,
//       },
//     ],
//   },
