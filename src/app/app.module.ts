import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { RoomsComponent } from './pages/home/rooms/rooms.component';
import { SliderComponent } from './pages/home/slider/slider.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './pages/users/users.component';
import { GestionUserComponent } from './pages/users/gestion-user/gestion-user.component';
import { HabitacionesComponent } from './pages/habitaciones/habitaciones.component';
import { GestionHabitacionComponent } from './pages/habitaciones/gestion-habitacion/gestion-habitacion.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { HeaderAdmComponent } from './shared/header-adm/header-adm.component';
import { GestionServiceComponent } from './pages/servicios/gestion-service/gestion-service.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RoomsComponent,
    SliderComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    GestionUserComponent,
    HabitacionesComponent,
    GestionHabitacionComponent,
    ServiciosComponent,
    HeaderAdmComponent,
    GestionServiceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
