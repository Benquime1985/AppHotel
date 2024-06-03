import { Component } from '@angular/core';
import { RoomsService } from '../../../services/rooms.service';
import { RoomInterface } from '../../../interfaces/room.interface';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {
  rooms : RoomInterface[] = [];

  constructor(private _rs : RoomsService ){
    this._rs.getRooms().subscribe(
      (resp:any) => {
        console.log(resp['data']);
        this.rooms = resp['data'];
      }
    );
  }


}
