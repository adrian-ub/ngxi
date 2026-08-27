import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'collection/:collection',
    loadComponent: () => import('./pages/collection/collection'),
  },
  {
    path: '',
    loadComponent: () => import('./pages/index'),
  },
];
