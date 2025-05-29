import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rutes } from './routApi';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FestivosServiceService {

  private rout: string;

  constructor(private http: HttpClient) {
    this.rout = `${rutes.Url}/festivos`;
  }

  GetFestivos(): Observable<any> {
    return this.http.get(`${this.rout}/listar`);
  }

  GetFestivo(id: number): Observable<any> {
    return this.http.get(`${this.rout}/obtener/${id}`);
  }

  BuscarFestivo(nombre: string): Observable<any> {
    return this.http.get(`${this.rout}/buscar/${nombre}`);
  }

  AgregarFestivo(festivo: any): Observable<any> {
    return this.http.post(`${this.rout}/agregar`, festivo);
  }

  ModificarFestivo(festivo: any): Observable<any> {
    return this.http.put(`${this.rout}/modificar`, festivo);
  }

  EliminarFestivo(id: number): Observable<any> {
    return this.http.delete(`${this.rout}/eliminar/${id}`);
  }

  VerificarFestivo(idPais: number, anio: number, mes: number, dia: number): Observable<any> {
    return this.http.get(`${this.rout}/verificar/${idPais}/${anio}/${mes}/${dia}`);
  }

  ListarFestivosPorPaisYAnio(idPais: number, anio: number): Observable<any> {
    return this.http.get(`${this.rout}/listar/${idPais}/${anio}`);
  }
}
