import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {films} from '../films';
import {FilmServiceService} from '../film-service.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  // category;
  films = films;
  loaded!: boolean;
  constructor(private route: ActivatedRoute,
              private filmService: FilmServiceService) {
    const routeParams = this.route.snapshot.paramMap;
    // this.category = categories.find(category => category.id === categoryIdFromRoute);
  }


  ngOnInit(): void {
  }

  getFilms(): void{
    this.loaded = false;
    this.filmService.getFilms().subscribe(films => {
      this.films = films;
      this.loaded = true;
    });
  }


}
