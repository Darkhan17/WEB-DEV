import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Film} from '../models';
import {FilmServiceService} from "../film-service.service";

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               private filmService: FilmServiceService) { }
  // tslint:disable-next-line:max-line-length
  film: Film | undefined;
  status = 'film';
  loaded!: boolean;

  ngOnInit(): void {
    this.getFilm();
  }

  getFilm(): void{
    this.route.paramMap.subscribe((params) => {
      // @ts-ignore
      const id = +params.get('id');
      this.loaded = false;
      console.log(id);
      // @ts-ignore
      this.filmService.getFilm(id).subscribe((film) => {
        this.film = film;
        this.loaded = true;
      });
    });

  }

}
