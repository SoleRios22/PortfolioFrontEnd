import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:String="http://localhost:8080/";
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>
  {
    /*console.log(this.http.get<any>(this.url+'ver/personas'));*/
    return this.http.get<any>('./assets/data/data.json');
  }
}/*./assets/data/data.json
this.url+"/ver/personas"*/