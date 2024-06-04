import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { UserModel } from '../../../models/user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-user',
  templateUrl: './gestion-user.component.html',
  styleUrl: './gestion-user.component.css'
})
export class GestionUserComponent {
  user_id : any;
  user = new UserModel(0,'','','',0);

  constructor(  private ar: ActivatedRoute,
                private _us : UsersService,
                private router : Router
  ) {
    this.user_id = this.ar.snapshot.paramMap.get('id');
    this._us.getUser(this.user_id).subscribe(
      (resp: any) => {
        this.user = resp['data']['0'];
        console.log(this.user);
      }
    );
  }

  editar(){
    this._us.putUser(this.user).subscribe(
      resp => {
        Swal.fire({
          icon: "success",
          title: "Exito",
          text: "El Usuario ha sido editado correctamente",
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
        this.router.navigate(['users']);
      },
      err => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "El usuario no se pudo editarr",
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

  borrar(){
    this._us.deleteUser(this.user.id).subscribe(
      resp => {
        Swal.fire({
          icon: "success",
          title: "Exito",
          text: "El Usuario ha sido eliminado correctamente",
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
        this.router.navigate(['users']);
      },
      err => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "El usuario no se pudo eliminar",
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
