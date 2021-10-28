import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserserviceService } from '../userservice.service';


@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit,OnDestroy{
  gifs: any[] = [];
  subscription:Subscription;
  componentName="gifs";

  constructor(private restn:UserserviceService) { }
  
  ngOnInit(): void {
    this.restn.getSomeGifs();
    this.subscription=this.restn.getGif().subscribe((response: any)=>{
      this.gifs=response;
    });
    
    
    
  }
  ngOnDestroy(){
this.subscription.unsubscribe();
  }

}
