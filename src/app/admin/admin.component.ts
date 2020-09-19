import { Component, OnInit } from '@angular/core';
import{CustomerServiceService} from 'src/app/services/customer-service.service'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private customerService:CustomerServiceService) { }
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
  

  ngOnInit(): void {
        console.log("Loading");
        this.getCustomertData();
      
      }

}
