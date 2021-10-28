import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import {UserserviceService} from '../userservice.service';
import {Route,Router,NavigationExtras,ActivatedRoute} from '@angular/router';
import {User} from '../user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register=new FormGroup({
    id:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required)

  })
  user:User=new User();
  alert:boolean=false;
  componentName="register";
  

  constructor(private rest:UserserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
    saveUser(){
      this.rest.createUser(this.user).subscribe(data =>{
        console.log(data);
      },
      error => console.log(error));
    }
  
    onSubmit(){
      console.warn(this.user);
      this.saveUser();
      this.alert=true;
    }
  closeAlert(){
    this.alert=false;
    this.router.navigate([{},'login'],{relativeTo:this.route});

    
  }
  get email(){
    return this.register.get('email')
  }
  get id(){
    return this.register.get('id')
  }
  get name(){
    return this.register.get('name')
  }
  get password(){
    return this.register.get('password')
  }
}
