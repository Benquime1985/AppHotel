import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoomInterface } from '../interfaces/room.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  url = 'http://localhost:8000/api/room';
  constructor(private http: HttpClient) { }

  getRooms():Observable<RoomInterface[]>{
    return this.http.get<RoomInterface[]>(this.url);
  }

  postRoom(formData : FormData){ //*Dtos del formulario
    return this.http.post(this.url, formData);
  }

}
