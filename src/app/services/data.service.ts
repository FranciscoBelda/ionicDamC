import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Componente, Usuario} from "../common/interfaces";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getComponentesMenu() :Observable<Componente[]> {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(
      'https://jsonplaceholder.typicode.com/users');
  }

  loadMovies(page:number):Observable<ApiResult>{
    return this.http.get<ApiResult>(
      environment.baseUrl + 'movie/popular?api_key='
      + environment.apiKey + '&page=' + page
    );
  }

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(
      'https://jsonplaceholder.typicode.com/albums');
  }

  loadUsers(): Observable<any[]> {
    return this.http.get<any[]>(
      'https://randomuser.me/api/?results=100&seed=Progresa');
  }
}

export interface ApiResult{
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}
