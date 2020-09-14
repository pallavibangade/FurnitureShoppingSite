import { Component, OnInit } from '@angular/core';
import {  FormControl, FormControlName, NgForm} from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Register} from './Register';
import{CustomerServiceService} from 'src/app/services/customer-service.service'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup ;
  firstName:string;
  // lastName:string;

  reg:any=[];


  // getStudentData()
  // {
  //   this._dataSer.getData().subscribe((res)=>{
  //     this.reg=res
  //   })
  // }
  
  register()
  {
   // this.student.push(this.form.value);
   this._dataSer.saveData(this.registrationForm.value).subscribe((res)=>{
     alert("data save successfully")
   })
  }


  constructor(private _dataSer:CustomerServiceService) { }

  ngOnInit(): void {
    this.registrationForm=new FormGroup({
      firstName:new FormControl(""),
      lastName:new FormControl(""),
      phoneNo:new FormControl(""),
      email:new FormControl(""),
      password:new FormControl(""),
      confirmPassword:new FormControl(""),
      state:new FormControl(""),
      city:new FormControl(""),
      landMark:new FormControl(""),
      pincode:new FormControl("")
    })
  //  this.registrationForm=new FormGroup({
     
  //  })
  }

  // clickFunction(){
  //   // alert(this.registrationForm.value);
  //    console.log(this.registrationForm.value);
  // }
}
