import { Component, OnInit } from '@angular/core';
import {  FormControl, FormControlName, NgForm} from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{CustomerServiceService} from 'src/app/services/customer-service.service'
@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  constructor() { }
updateForm:FormGroup;
  ngOnInit(): void {
  }

}
