import { Component, OnDestroy, OnInit } from '@angular/core';
import {UserserviceService} from '../userservice.service';
import { Subscription } from 'rxjs';
import {Route,Router,NavigationExtras,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit,OnDestroy {
  fav_list:any[]=[];
  //gifs:any=[];
  gifs: any[] = [];
  subscription:Subscription;

  componentName="recommend";

  constructor(private rest:UserserviceService,private router:Router,private route:ActivatedRoute) { }
  recommend_list:any=[];
  ngOnInit(): void {
    this.rest.getRecommendedGifs();
    this.subscription=this.rest.getRecGif().subscribe((response: any)=>{
      console.log(response);
      this.gifs=response;
    });
  
    /*this.rest.getRecommendList().subscribe((response: any)=>{
      this.gifs=response;
      this.fav_list=(this.gifs);  
      console.log(this.fav_list);
    })*/
     
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
    
  }
 /* DeleteResto(item){
    this.fav_list.splice(item-1,1);
    this.rest.delRec(item).subscribe(data=>{
      console.log("result",data);
      
    });
    this.rest.getRecommendList().subscribe((response: any)=>{
      this.gifs=response;
      this.fav_list=(this.gifs);  
      console.log(this.fav_list);
    });*/
    

  }


