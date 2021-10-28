import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import {Route,Router,NavigationExtras,ActivatedRoute} from '@angular/router';
import {User} from '../user';
import {UserserviceService} from '../userservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
  componentName = "login";
  alert:boolean=false;
  alert1:boolean=false;
  validation={};
  user:User=new User();

  constructor(private rest:UserserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  goToDashboard(){
    this.rest.loginUser(this.user).subscribe(
      data=>{console.log("response received",data);
      localStorage.setItem("userRecord",JSON.stringify(data));
    this.alert=true},
      error=>{console.log("exception occured");
    this.alert1=true;}
    )
  
  
  }
  closeAlert1(){
    this.alert1=false;
    console.log("invalid Credentials Register Now");
  
  }
  closeAlert(){
    this.alert=false;
    this.router.navigate([{},'dashboard'],{relativeTo:this.route});
  }
  get email(){
    return this.login.get('email')
  }
  get password(){
    return this.login.get('password')
  }
}