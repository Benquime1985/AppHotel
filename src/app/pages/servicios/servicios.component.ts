import { Component } from '@angular/core';
import { UserInterface } from '../../interfaces/user.interface';
import { ServiceInterface } from '../../interfaces/service.interface';
import { ServicesService } from '../../services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  services : ServiceInterface[] = [];
  constructor ( private _us : ServicesService, 
                private r : Router
  ){
    this._us.getServices().subscribe(
      (resp:any) => {
        this.services = resp['data'];
        console.log(this.services)
      }
    );
  }

}
