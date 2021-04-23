import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {films} from '../films';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  // category;
  films = films;
  constructor(private route: ActivatedRoute) {
    const routeParams = this.route.snapshot.paramMap;
    // this.category = categories.find(category => category.id === categoryIdFromRoute);
  }


  ngOnInit(): void {
  }

}
