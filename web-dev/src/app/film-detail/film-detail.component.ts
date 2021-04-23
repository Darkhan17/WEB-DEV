import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {films} from '../films';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }
  // tslint:disable-next-line:max-line-length
  film: {
    // tslint:disable-next-line:max-line-length
      id: number; name: string; img: string; second_name: string; description: string; kinorium: number; imbd: number; critics: number; country: string; time: string; // tslint:disable-next-line:max-line-length
      world_premiere: string; usa_premiere: string; ru_premiere: string; other_name: string; genres: string[]; video: string;
  } | {
    // tslint:disable-next-line:max-line-length
      id: number; name: string; second_name: string; img: string; description: string; kinorium: number; imbd: number; critics: number; country: string; time?: undefined; // tslint:disable-next-line:max-line-length
      world_premiere?: undefined; usa_premiere?: undefined; ru_premiere?: undefined; other_name?: undefined; genres?: undefined; video?: undefined;
  } | undefined;
  status = 'film';
  loaded!: boolean;
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const filmIdFromRoute = Number(routeParams.get('filmId'));
    this.film = films.find(film => film.id === filmIdFromRoute);
  }

  getFilm(): void{
    this.route.paramMap.subscribe((params) => {
      // @ts-ignore
      const id = +params.get('id');
      this.loaded = false;
      // @ts-ignore
      this.albumService.getAlbum(id).subscribe((film) => {
        this.film = film;
        this.loaded = true;
      });
    });

  }

}
