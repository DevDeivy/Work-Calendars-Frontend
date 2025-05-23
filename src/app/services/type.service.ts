import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rutes } from './rout';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TypeService {
  private rout: string = '';

  constructor(private http: HttpClient) {
    this.rout = rutes.Url;
  }

  GetTipos(): Observable<any> {
    return this.http.get(`${this.rout}/tipos`);
  }

  GetTipo(id: number): Observable<any> {
    return this.http.get(`${this.rout}/tipos/${id}`);
  }

  PostTipo(Tipo: any): Observable<any> {
    return this.http.post(`${this.rout}/tipos/`, Tipo);
  }

  DeleteTipo(id: number): Observable<any> {
    return this.http.delete(`${this.rout}/tipos/${id}`);
  }

  PatchTipo(Tipo: any): Observable<any> {
    return this.http.patch(`${this.rout}/tipos/`, Tipo);
  }
}
