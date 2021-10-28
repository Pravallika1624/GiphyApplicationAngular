import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {UserserviceService} from '../userservice.service';
import {Route,Router,NavigationExtras,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recupdate',
  templateUrl: './recupdate.component.html',
  styleUrls: ['./recupdate.component.css']
})
export class RecupdateComponent implements OnInit {
  fav=null;
  alert:boolean=true;

  componentName="recupdate";
  
  constructor(private router:ActivatedRoute,private rest:UserserviceService,private route:Router) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id);
    this.rest.fetchGifByIdRec(this.router.snapshot.params.id).subscribe((result)=>{
      console.warn(result);
      this.fav=result;
      
      this.rest.updateRec(this.fav).subscribe((data)=>{
        console.warn(data);
        this.alert=true;
      })
    })
  }
  closeAlert3(){
    this.alert=false;
    this.route.navigate([{},'recommend'],{relativeTo:this.router});
  }

}
