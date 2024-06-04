import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { GestionUserComponent } from './pages/users/gestion-user/gestion-user.component';
import { HabitacionesComponent } from './pages/habitaciones/habitaciones.component';
import { GestionHabitacionComponent } from './pages/habitaciones/gestion-habitacion/gestion-habitacion.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'gestionUser/:id',
    component: GestionUserComponent
  },
  {
    path: 'habitaciones',
    component: HabitacionesComponent
  },
  {
    path: 'gestionHabitacion/:id',
    component: GestionHabitacionComponent
  },
  {
    path: 'servicios',
    component: ServiciosComponent
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
