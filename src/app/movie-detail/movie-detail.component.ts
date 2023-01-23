import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent  implements OnInit {

  movies:any=[];
  favoriMovies:any=[]
  isExist:boolean=false


  id:string|null

  constructor(private route:ActivatedRoute, private service: DataserviceService){
    this.id = route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.movies = this.service.getMovies()
    this.id = this.route.snapshot.paramMap.get('id');
    this.favoriMovies = this.service.getFavoriMovies()
    this.ifExist()
  }



  ifExist():void{
    this.isExist = this.favoriMovies.find((item:any)=> item.id == this.id)
  }
  addToFavori(item:any):void{
      const exist = this.favoriMovies.find((movie:any)=> movie.id == item.id)
      if(!exist){
        console.log("eklendi")
      this.service.setFavoriMovies(item)
      }else{
        console.log("already exist")
      }
      this.ifExist()
    }
  removeFromFavori(item:any):void{
    this.favoriMovies = this.favoriMovies.filter((movie:any)=>movie.id !== item.id)
    this.service.updateFavoriMovies(item)
    console.log("çıkarıldı")
    this.ifExist()
  }
}
