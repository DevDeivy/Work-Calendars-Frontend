import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  public Get: string = '';


  constructor(private http: HttpClient) {
    this.Get = ''
  }
}
