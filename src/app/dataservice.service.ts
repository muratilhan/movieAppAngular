import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }


  movies:any=[];
  favoriMovies:any=[]

  setMovies(movies:any){
    this.movies=movies
  }

  getMovies(){
    return this.movies
  }
  getFavoriMovies(){
    return this.favoriMovies
  }
  updateFavoriMovies(item:any){
    this.favoriMovies = this.favoriMovies.filter((movie:any)=>movie.id !=item.id)
  }
  setFavoriMovies(item:any){
    this.favoriMovies.push(item)
  }


}
