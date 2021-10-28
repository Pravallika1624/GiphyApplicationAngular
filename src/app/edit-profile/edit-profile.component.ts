import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
//import {RestoService} from '../resto.service';
import {UserserviceService} from '../userservice.service';
import {Route,Router,NavigationExtras,ActivatedRoute} from '@angular/router';
import {User} from '../user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user:User=new User();
  alert:boolean=false;
  userObj:any=localStorage.getItem("userRecord");
  show:boolean=false;
  


  constructor(private rest:UserserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("In edit profile");
    console.log(JSON.parse(this.userObj));
    this.user=JSON.parse(this.userObj);
    
  }
  saveUser(){
    this.rest.updateUser(this.user).subscribe(data =>{
      console.log(data);
      localStorage.setItem("userRecord",JSON.stringify(data));
    },
    error => console.log(error));
  }

  onSubmit(){
    console.warn(this.user);
    
    this.saveUser();
    this.alert=true;
  }
  showFields(){
    this.show=true;
  }
  closeAlert(){
    this.alert=false;
    this.router.navigate([{},'dashboard'],{relativeTo:this.route});

    
  }

}
