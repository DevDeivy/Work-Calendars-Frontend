import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rutes } from './routApi';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FestivosServiceService {

  public rout: string = '';


  constructor(private http: HttpClient) {
    this.rout = rutes.Url;
  }

  GetFestivos(): Observable<any>{
    return this.http.get(`${this.rout}/`)
  }

  GetFestivo(id: number): Observable<any>{
    return this.http.get(`${this.rout}/${id}`)
  }

  PostFestivo(Festivo: any): Observable<any>{
    return this.http.post(`${this.rout}/`, Festivo)
  }

  DeleteFestivo(id: number): Observable<any>{
    return this.http.delete(`${this.rout}/${id}`)
  }

  PatchFestivo(Festivo: any): Observable<any>{
    return this.http.patch(`${this.rout}/`, Festivo)
  }        
}
