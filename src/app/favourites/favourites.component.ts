import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../userservice.service';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  fav_list:any[]=[];
  gifs:any=[];

  componentName="favourite";
  
  constructor(private rest:UserserviceService) { }
  
  ngOnInit(): void {
  this.rest.getFavList().subscribe((response: any)=>{
      this.gifs=response;
      this.fav_list=(this.gifs);  
      console.log("in favourite",this.fav_list);
    })
     
  }
  DeleteResto(item){
    this.fav_list.splice(item-1,1);
    this.rest.delResto(item).subscribe(data=>{
      console.log("result",data);
      
    });
   
    this.rest.getFavList().subscribe((response: any)=>{
      this.gifs=response;
      this.fav_list=(this.gifs);  
      console.log(this.fav_list);
    });
    

  }
}
