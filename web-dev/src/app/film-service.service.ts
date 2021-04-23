import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Film} from './models';

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {

  constructor(private client: HttpClient) { }
  BASE_URL = 'http://localhost:4200';

  getFilms(): Observable<Film[]>{
    return this.client.get<Film[]>(`${this.BASE_URL}/films`);
  }

  getFilm(id: number): Observable<Film>{
    return this.client.get<Film>(`${this.BASE_URL}/films/${id}`);
  }
  addFilm(film: Film): Observable<Film>{
    // @ts-ignore
    return this.client.post(`${this.BASE_URL}/films`,film);
  }
  updateFilm(film: Film): Observable<Film>{
    return this.client.put<Film>(`${this.BASE_URL}/films/${film.id}`, film);
  }
  delete(id: number): Observable<any>{
    return this.client.delete(`${this.BASE_URL}/films/${id}`);
  }
}
