import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiscosService {

  constructor(private http:HttpClient) { }

  getDiscos():any{
    return this.http.get('https://backdiscos-production.up.railway.app/api/listar_discos/')
  }
}
