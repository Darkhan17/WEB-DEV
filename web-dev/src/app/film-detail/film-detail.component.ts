import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {films} from '../films';
import {Film} from '../models';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }
  // tslint:disable-next-line:max-line-length
  film: Film | undefined;
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
