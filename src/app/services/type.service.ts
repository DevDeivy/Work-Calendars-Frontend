import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rutes } from './routApi';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TypeService {
  private rout: string;

  constructor(private http: HttpClient) {
    this.rout = `${rutes.Url}/tipos`;
  }

  GetTipos(): Observable<any> {
    return this.http.get(`${this.rout}/listar`);
  }

  GetTipo(id: number): Observable<any> {
    return this.http.get(`${this.rout}/obtener/${id}`);
  }

  BuscarTipo(nombre: string): Observable<any> {
    return this.http.get(`${this.rout}/buscar/${nombre}`);
  }

  AgregarTipo(tipo: any): Observable<any> {
    return this.http.post(`${this.rout}/agregar`, tipo);
  }

  ModificarTipo(tipo: any): Observable<any> {
    return this.http.put(`${this.rout}/modificar`, tipo);
  }

  EliminarTipo(id: number): Observable<any> {
    return this.http.delete(`${this.rout}/eliminar/${id}`);
  }
}
