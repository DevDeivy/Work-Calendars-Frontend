import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rutes } from './routApi';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private rout: string;

  constructor(private http: HttpClient) {
    this.rout = rutes.Url;
  }

  GetPaises(): Observable<any> {
    return this.http.get(`${this.rout}/paises/listar`);
  }

  GetPais(id: number): Observable<any> {
    return this.http.get(`${this.rout}/paises/obtener/${id}`);
  }

  GetPaisName(nombre: string): Observable<any> {
    return this.http.get(`${this.rout}/paises/buscar/${nombre}`);
  }

  PostPais(pais: any): Observable<any> {
    return this.http.post(`${this.rout}/paises/agregar`, pais);
  }

  PutPais(pais: any): Observable<any> {
    return this.http.put(`${this.rout}/paises/modificar`, pais);
  }

  DeletePais(id: number): Observable<any> {
    return this.http.delete(`${this.rout}/paises/eliminar/${id}`);
  }
}
