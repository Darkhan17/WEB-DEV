import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {MainContainerComponent} from './main-container/main-container.component';
import { FilmsListComponent } from './films-list/films-list.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: MainContainerComponent},
      {path: 'films', component: FilmsListComponent},
      { path: 'films/:filmId', component: FilmDetailComponent},
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    FilmDetailComponent,
    MainContainerComponent,
    FilmsListComponent,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: []
})
export class AppModule { }
