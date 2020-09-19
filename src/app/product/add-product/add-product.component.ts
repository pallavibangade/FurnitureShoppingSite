import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import {ProductService} from 'src/app/services/product.service';
import { FormGroup, FormBuilder, Validators ,FormControl} from '@angular/forms';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm:FormGroup;
  constructor(private productService:ProductService) { }

  onFileSelect(event){
    if(event.target.files.length>0)
    {
      
    }
  }



  ngOnInit(): void {
    
    this.productForm=new FormGroup({
      prod_name:new FormControl(""),
      prod_category:new FormControl(""),
      prod_quantity:new FormControl(""),
      prod_price:new FormControl(""),
      prod_size:new FormControl(""),
      prod_photo:new FormControl(""),
      prod_desc:new FormControl("")
    })

    
  }
  addProduct(){
   console.log(this.productForm.value);   
    this.productService.saveData(this.productForm.value).subscribe((res)=>{
      alert("data save successfully");
    })


  }

}
