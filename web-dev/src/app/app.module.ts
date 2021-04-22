import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'films/:filmId', component: FilmDetailComponent},
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    FilmDetailComponent,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: []
})
export class AppModule { }
