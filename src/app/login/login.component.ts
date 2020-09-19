import { Component, OnInit } from '@angular/core';
import {AppRoutingModule} from './../app-routing.module';
import { FormGroup, FormBuilder,FormControl , Validators ,FormsModule} from '@angular/forms';
import {  FormArray,ReactiveFormsModule  } from '@angular/forms';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  login:FormGroup;
  constructor(private router:Router) { }

    ngOnInit(): void {
      this.login =new  FormGroup({
        email:new FormControl(""),
        password: new FormControl(""),
      });  
    }

  checkFunction1(){
    this.router.navigateByUrl('/adminDashBoard');

    console.log(this.login.value);
  }

}
