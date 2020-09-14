import { Component, OnInit } from '@angular/core';
// import { FormGroup } from '@angular/forms';
import {AppRoutingModule} from './../app-routing.module';
// import {FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormBuilder,FormControl , Validators } from '@angular/forms';
import {  FormArray,ReactiveFormsModule  } from '@angular/forms';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm =new  FormGroup({


      
    });
 
  }

}
