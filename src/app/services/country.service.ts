import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rutes } from './rout';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private rout: string = '';

  constructor(private http: HttpClient) {
    this.rout = rutes.Url;
  }

  GetPaises(): Observable<any> {
    return this.http.get(`${this.rout}/paises`);
  }

  GetPais(id: number): Observable<any> {
    return this.http.get(`${this.rout}/paises/${id}`);
  }

  PostPais(Pais: any): Observable<any> {
    return this.http.post(`${this.rout}/paises/`, Pais);
  }

  DeletePais(id: number): Observable<any> {
    return this.http.delete(`${this.rout}/paises/${id}`);
  }

  PatchPais(Pais: any): Observable<any> {
    return this.http.patch(`${this.rout}/paises/`, Pais);
  }
}
