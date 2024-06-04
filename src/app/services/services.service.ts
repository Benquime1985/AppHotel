import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceModel } from '../models/service.model';
import { Observable } from 'rxjs';
import { ServiceInterface } from '../interfaces/service.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  Headers = new HttpHeaders().set('Content-Type', 'applicatio/json');
  url = 'http://localhost:8000/api/service';
  constructor(private http: HttpClient) { }

  postService(service : ServiceModel){
    return this.http.post(this.url, service, {headers: this.Headers});
  }

  getServices():Observable<ServiceInterface[]>{
    return this.http.get<ServiceInterface[]>(this.url);
  }

}
