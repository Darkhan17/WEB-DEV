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
  film: { id: number; name: string; img: string; } | undefined;

  // tslint:disable-next-line:typedef
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const filmIdFromRoute = Number(routeParams.get('filmId'));
    this.film = films.find(film => film.id === filmIdFromRoute);
  }

}
