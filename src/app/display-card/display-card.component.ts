import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {UserserviceService} from '../userservice.service';
import {Route,Router,NavigationExtras,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {
  fav=null;
  Comment=null;
  commentsList: any=[];
  alert:boolean=false;
  register=new FormGroup({
    comment:new FormControl('')
  })

  componentName="display-card";
  
  constructor(private router:ActivatedRoute,private rest:UserserviceService,private route:Router) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id);
    this.rest.fetchGifByIdRec(this.router.snapshot.params.id).subscribe((result)=>{
      console.warn(result);
      this.fav=result;
    })

    this.rest.getCommentList().subscribe((data)=>{
      console.log(data);
      this.commentsList=data;
    })  
  }
  collection(){
    console.log(this.register.value);
    this.rest.saveComment(this.register.value).subscribe((data)=>{
      console.log(data);
      this.Comment=data;
      this.alert=true;
    })
  }
  closeAlert(){
    this.alert=false;  
    this.rest.getCommentList().subscribe((data)=>{
      console.log(data);
      this.commentsList=data;
    })  
  }

}