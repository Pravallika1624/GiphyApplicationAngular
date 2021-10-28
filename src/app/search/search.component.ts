import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../userservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  gifs: any[] = [];
  subscription:Subscription;

  componentName="search";

  constructor(private rest:UserserviceService) { }

  ngOnInit(): void {
    this.rest.getSomeGifs();
    this.subscription=this.rest.getGif().subscribe((response: any)=>{
      this.gifs=response;
    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  search(searchTerm: string){
    if (searchTerm !== ''){
      this.rest.searchGifs(searchTerm);
    }
  }

}
