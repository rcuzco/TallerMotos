import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages/pages.component';

const routes: Routes =
  [
    //estas rutas se mostrarán en el router-outlet de appComponent
    {
      path: '',
      component: PagesComponent,
      children: //estas rutas las mostrará en el router-outlet de PagesComponent
        [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'clientes', component: ClientesComponent },
          { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },


    { path: '**', component: NopagefoundComponent }//cualquier ruta q no esté contemplada, q me lleve a no page found
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
