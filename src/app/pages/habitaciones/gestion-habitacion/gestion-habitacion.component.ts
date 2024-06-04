import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomsService } from '../../../services/rooms.service';
import { RoomModel } from '../../../models/room.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-gestion-habitacion',
  templateUrl: './gestion-habitacion.component.html',
  styleUrl: './gestion-habitacion.component.css'
})
export class GestionHabitacionComponent {
  room_id : any;
  room = new RoomModel(0,'',0,'','',0,0);
  archivo : any;
  op = false; //?op: true si es altas, op= false si es editado
  constructor( private ar: ActivatedRoute,
                private _as: RoomsService,
                private r : Router
  ){
    this.room_id = this.ar.snapshot.paramMap.get('id');
    if (this.room_id == 0){
      this.op = true;
    } else {
      this.op = false;
    }
    this._as.getRooms().subscribe(
      (resp:any) => {
        this.room = resp['data']['0'];
        console.log(this.room);
      }
    );
  }
  
  cargarImagen (evt : any):any{
    this.archivo = evt.target.files[0];
  }

  agregar(){
    this.room.reserv_id=1;
    const fd = new FormData();
    fd.append('title',this.room.title);
    fd.append('room_numb', String(this.room.room_numb));
    fd.append('imagen', this.archivo);
    fd.append('description', this.room.description);
    fd.append('price', String(this.room.price));
    fd.append('reser_id', String(this.room.reserv_id));

    this._as.postRoom(fd).subscribe(
      (resp: any) => {
        Swal.fire({
          icon: "success",
          title: "Exito",
          text: "La habitacion ha sido agregado correctamente",
          width: 600,
          padding: "3em",
          color: "#716add",
          backdrop: `
            rgba(0,0,123,0.4)
            url("../../../assets/img/PYh.gif")
            left top
            no-repeat
          `
        });
        this.r.navigate(['habitaciones']);
      },
      err => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "La habitacio no se pudo agregar",
          width: 600,
          padding: "3em",
          color: "#716add",
          backdrop: `
            rgba(0,0,123,0.4)
            url("../../../assets/img/PYh.gif")
            left top
            no-repeat
          `
        });
      }
    );
  }



}
