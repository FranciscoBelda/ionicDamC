import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Componente} from "../common/interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getComponentesMenu() :Observable<Componente[]> {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }
}
