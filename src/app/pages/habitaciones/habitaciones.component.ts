import { Component } from '@angular/core';
import { RoomInterface } from '../../interfaces/room.interface';
import { RoomsService } from '../../services/rooms.service';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrl: './habitaciones.component.css'
})
export class HabitacionesComponent {
  habitaciones : RoomInterface[] = [];
  constructor ( private _as : RoomsService){
    this._as.getRooms().subscribe(
      (resp : any ) => {
        this.habitaciones = resp['data'];
        console.log(this.habitaciones);
      }
    );
  }

}
