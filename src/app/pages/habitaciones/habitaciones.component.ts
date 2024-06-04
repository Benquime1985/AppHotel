import { GestionHabitacionComponent } from './gestion-habitacion/gestion-habitacion.component';
import { Component } from '@angular/core';
import { RoomInterface } from '../../interfaces/room.interface';
import { RoomsService } from '../../services/rooms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrl: './habitaciones.component.css'
})
export class HabitacionesComponent {
  habitaciones : RoomInterface[] = [];
  constructor ( private _as : RoomsService,
                private r : Router
  ){
    this._as.getRooms().subscribe(
      (resp : any ) => {
        this.habitaciones = resp['data'];
        console.log(this.habitaciones);
      }
    );
  }

  agregar(){
    console.log("diste click, agregar");
    this.r.navigate(['/gestionHabitacion',0]);
  }

  editar(id:any){
    this.r.navigate(['/gestionHabitacion',id]);
  }

}
