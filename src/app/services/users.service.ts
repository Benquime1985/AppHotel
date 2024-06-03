import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  Heardes = new HttpHeaders().set('Content-Type','application/json');
  constructor(private http: HttpClient) { }

    postUser(user : UserModel){
      return this.http.post('http://localhost:8000/api/user', user, {headers:this.Heardes});
    }
}

