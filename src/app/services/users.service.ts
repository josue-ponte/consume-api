import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url:string = "https://api.migo.pe/api/v1/";
  constructor(private http: HttpClient) {
    console.log('Servicio HTTP:')
  }

    getUserByRuc(ruc: number) : Observable<User>{
      return this.http.get<User>(this.url+`ruc/${ruc}`);
    }


}
