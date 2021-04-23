import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainContainerComponent} from './main-container/main-container.component';
import {FilmDetailComponent} from './film-detail/film-detail.component';
import { FilmsListComponent } from './films-list/films-list.component';
import {AuthComponent} from './auth/auth.component';

const routes: Routes = [
  {path: 'home', component: MainContainerComponent},
  {path: 'films/:filmId', component: FilmDetailComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'films', component: FilmsListComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
