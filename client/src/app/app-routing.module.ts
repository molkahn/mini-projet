import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/authentication/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/authentication/register/register.component').then(m => m.RegisterComponent)
  },
 {
  path: 'welcome',
  loadComponent: () =>
    import('./pages/welcome/welcome.component').then(m => m.WelcomeComponent)
},
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
