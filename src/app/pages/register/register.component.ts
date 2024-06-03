import { Component, inject } from '@angular/core';
import { UserModel } from '../../models/user.model';
import Swal from 'sweetalert2';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] 
})

export class RegisterComponent {
  user = new UserModel(0, '', '', '', 3);
  confirmar_password: string = '';

  _us = inject(UsersService);
  router = inject(Router);

  procesa(){
    if (this.user.password != this.confirmar_password) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Contraseñas no coinciden",
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
    } else {
      this._us.postUser(this.user).subscribe(
        resp => {
          Swal.fire({
            icon: "success",
            title: "Exito",
            text: "El Usuario ha sido creado correctamente",
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
          this.router.navigate(['admins']);
        },
        error => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "El usuario no se pudo crear",
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
}