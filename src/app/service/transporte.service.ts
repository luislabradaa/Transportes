import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders , HttpRequest,  HttpEvent, HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { Origen } from '../modelos/Origen';
import { Response } from '../modelos/Response';


@Injectable({
  providedIn: 'root'
})
export class TransporteService {
  [x: string]: any;
  private readonly API_URL = "assets/data/clients.json";
  dialogData: any;
  isTblLoading = true;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }
    
  getDialogData() {
    return this.dialogData;
  }

  public consultarOrigen():Observable<Response<Origen>>{
    const url = "http://localhost:8083/viaje/mostrarOrigenes";
    
    return this.http.get<Response<Origen>>(url,
      {headers: new HttpHeaders().append("Content-Type","application/json")});
  }

  public consultarDestino():Observable<Response<Origen>>{
    const url = "http://localhost:8083/viaje/mostrarDestinos";
    
    return this.http.get<Response<Origen>>(url,
      {headers: new HttpHeaders().append("Content-Type","application/json")});
  }

  public consultarPaquetes():Observable<Response<Origen>>{
    const url = "http://localhost:8083/viaje/mostrarPaquetes";
    
    return this.http.get<Response<Origen>>(url,
      {headers: new HttpHeaders().append("Content-Type","application/json")});
  }
}