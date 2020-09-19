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


  getCustomertData()
  {

    this.customerService.getData().subscribe((res)=>{
      this.reg=res;
    })

    this.reg.forEach(element => {           //working for geting all data from json
      console.log(element)
    });


  //   this.reg.forEach((obj => {                                   //working for get all result in "firstName:rutuja" format 
  //     Object.entries(obj).forEach(([key, value]) => {
  //         console.log(key +":"+value);
  //     });
  //     console.log('-------------------');
  // }));

  }
  
  register()
  {
   // this.student.push(this.form.value);
   this.customerService.saveData(this.registrationForm.value).subscribe((res)=>{   //working to add user data
     alert("data save successfully")
   })
  }

  // delete(id)         //working for delete
  // {
  //   this.customerService.deleteData(id).subscribe((res)=>{
  //     alert("data deleted successfully")
  //     // this.getStudentData()
  //   })
  // }


  constructor(private customerService:CustomerServiceService) { }

  ngOnInit(): void {
    this.registrationForm=new FormGroup({
      firstName:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
      lastName:new FormControl(""),
      phoneNo:new FormControl(""),
      email:new FormControl("",[Validators.required,Validators.pattern("[\w._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}")]),
      password:new FormControl("",[Validators.required, Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$")]),
      confirmPassword:new FormControl(""),
      state:new FormControl(""),
      city:new FormControl(""),
      landMark:new FormControl(""),
      pincode:new FormControl("")
    })
  //  this.registrationForm=new FormGroup({
     
  //  })
  }


}
