import { Component, OnInit } from '@angular/core';

import {FormGroup,FormControl} from '@angular/forms';
import {UserserviceService} from '../userservice.service';
import {Route,Router,NavigationExtras,ActivatedRoute} from '@angular/router';
import {Fav} from '../fav';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  fav=null;
  alert:boolean=true;
  favItem:Fav=new Fav();

  componentName="update";

  constructor(private router:ActivatedRoute,private rest:UserserviceService,private route:Router) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id);
    this.rest.fetchGifById(this.router.snapshot.params.id).subscribe((result)=>{
      console.warn("my data",result);
      this.fav=result;
      //console.warn(this.fav.data.images.downsized_large.url);
      //console.warn(this.fav.data.id);
      this.favItem.id=this.fav.data.id;
      this.favItem.url=this.fav.data.images.downsized_large.url;
      console.log(this.favItem);
      this.rest.updatefav(this.favItem).subscribe((data)=>{
        console.warn(data);
        this.alert=true;
      })
    })
    
  }
  closeAlert(){
    this.alert=false;
    this.route.navigate([{},'favourite'],{relativeTo:this.router});
  }

}
