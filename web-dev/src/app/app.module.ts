import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {MainContainerComponent} from './main-container/main-container.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    FilmDetailComponent,
    MainContainerComponent,
    FilmsListComponent,
    AuthComponent,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: []
})
export class AppModule { }
