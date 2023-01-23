import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent  implements OnInit {

  sliderMovies:any

  constructor(private httpClient: HttpClient, ){
    this.sliderMovies=[]
  }
  ngOnInit(): void {
    this.gettopNMovies()
  }

  gettopNMovies():void{
    this.httpClient.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=bedc26d2fa7bfd5fc21f1dccac40a599&language=en-US&page=1`)
    .subscribe((res: any) => {
      this.sliderMovies = res.results
      console.log(res.results.slice(0.3))
    })

  }

}
