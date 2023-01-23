import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies.component';
import { WatchlaterComponent } from './watchlater/watchlater.component';

const routes: Routes = [];

const rootconfig:Route[]=[
  {path:'', component:MoviesComponent},
  {path:'productDetail/:id', component:MovieDetailComponent },
  {path:'watchlater', component:WatchlaterComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(rootconfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
