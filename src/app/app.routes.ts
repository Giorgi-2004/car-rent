import { Routes } from '@angular/router';
import { ErrorComponent } from './Pages/error/error.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./Pages/login/login/login.component').then(m => m.LoginComponent),
    title:"login"
  },
  {
    path: 'register',
    loadComponent: () => import('./Pages/register/register/register.component').then(m => m.RegisterComponent),
     title:"register"
  },
  {
    path: 'landing',
    loadComponent: () => import('./Pages/landing/landing/landing.component').then(m => m.LandingComponent),
     title:"landing"
  },
  {
  path: 'caradd',
  loadComponent: () => import('./Pages/add-car/caradd/caradd.component').then(m => m.CaraddComponent),
   title:"caradd"
  },
  
  {
    path: "**",
    component: ErrorComponent}
];

