import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies:any;

  constructor(private httpClient: HttpClient, private service: DataserviceService){
    this.movies=[]
  }

  str:any="popular"

  ngOnInit(): void {
    this.getPopuarMovies()
  }

  getPopuarMovies(){
    this.httpClient.get(`https://api.themoviedb.org/3/movie/${this.str}?api_key=bedc26d2fa7bfd5fc21f1dccac40a599&language=en-US&page=1`)
    .subscribe((res: any) => {
      this.movies = res.results
      this.service.setMovies(res.results)
    })
  }

  toggleMovies(str:string):void {
    this.str=str
    console.log(this.movies)
    this.getPopuarMovies()

  }
}
