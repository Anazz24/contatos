import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'contatoum',
    loadComponent: () => import('./contatoum/contatoum.page').then( m => m.ContatoumPage)
  },
  {
    path: 'contatodois',
    loadComponent: () => import('./contatodois/contatodois.page').then( m => m.ContatodoisPage)
  },
  {
    path: 'contatotres',
    loadComponent: () => import('./contatotres/contatotres.page').then( m => m.ContatotresPage)
  },
  {
    path: 'contatoquatro',
    loadComponent: () => import('./contatoquatro/contatoquatro.page').then( m => m.ContatoquatroPage)
  },
  {
    path: 'contatocinco',
    loadComponent: () => import('./contatocinco/contatocinco.page').then( m => m.ContatocincoPage)
  },
];
