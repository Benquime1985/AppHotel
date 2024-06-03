import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoomInterface } from '../interfaces/room.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http: HttpClient) { }

  getRooms():Observable<RoomInterface[]>{
    return this.http.get<RoomInterface[]>('http://localhost:8000/api/room');
  }

}
