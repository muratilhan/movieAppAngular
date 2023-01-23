import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-watchlater',
  templateUrl: './watchlater.component.html',
  styleUrls: ['./watchlater.component.css']
})
export class WatchlaterComponent {


  favoriMovies:any=[]

  constructor(private route:ActivatedRoute, private service: DataserviceService){
  }

  ngOnInit(): void {
    this.favoriMovies = this.service.getFavoriMovies()
  }

}
