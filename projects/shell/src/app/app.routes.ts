import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'shop',
    loadComponent: () =>
      loadRemoteModule('shop', './Component').then((m) => m.AppComponent),
  },
  {
    path: 'admin',
    loadComponent: () =>
      loadRemoteModule('admin', './Component').then((m) => m.AppComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      loadRemoteModule('dashboard', './Component').then((m) => m.AppComponent),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
