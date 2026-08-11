import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'collection/:collection',
    loadComponent: () =>
      import('./icon-browser/icon-browser').then((m) => m.IconBrowser),
  },
  {
    path: '',
    loadComponent: () =>
      import('./icon-browser/icon-browser').then((m) => m.IconBrowser),
  },
];
