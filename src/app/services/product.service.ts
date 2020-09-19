import { Injectable } from '@angular/core';
import {Product} from './../models/product'
import { HttpClient } from '@angular/common/http';
const api="http://localhost:80/sample/";
@Injectable({
  providedIn: 'root'
})
export class ProductService {
product:Product[]=[
  new Product(1,'Jodhpur Sofa Set','Designed In Such A Way, The Wooden Sofa Is Comfortable To Sit. The Best Part, It Comes With Good Price Without Compromising On Quality.',15000,'../../assets/images/furniture1.jpg'),
  new Product(2,'Lotus furniture sofa','Kendalwood Brings To You Modern And Comfortable Sofa Set For Your Living Room. It Is Made Of Rosewood.',25000,'../../assets/images/furniture2.jpg'),


  new Product(3,
    'Tisbury Sideboard | Medium',
  'The Tisbury is a wonderfully traditional range that will bring a refreshingly natural feeling to your home.',
  5000,
  '../../assets/images/furniture3.jpg'),
  
  new Product(4,
    'Chaise Lounge Living',
  'Aarsun brings to you handmade Wooden Chaise Lounge. The Wooden Couch looks amazing with the natural wood polish and the white-colored upholstery.',
  20000,
  '../../assets/images/furniture4.jpg'),
  new Product(5,
    'Nisha Furniture Sheesham Wooden Dining Table Set ',
  'card-text">Dining table sets have always been the enhancer of a dinette with its presence. Dining tables are an inevitable part of the home.',
  18000,
  '../../assets/images/furniture5.jpg'),
  new Product(6,
    'Full Aluminum Bedroom Furniture Combined Wardrobe',
  'Backed by an adept team of professionals,Our provided product is perfectly analyzed by our quality experts.',
  10000,
  '../../assets/images/furniture6.jpg'),
  

]


saveData(data){
  console.log("data is ");
  console.log(data);
 return this.httpclient.post(api+"addProduct.php",data)
}

getData()
{
  return this.httpclient.get(api)
}

getDataById(id)
{
  return this.httpclient.get(api+id)
}

updateData(id,data)
{
  return this.httpclient.put(api+id,data)
}

deleteData(id)
{
  return this.httpclient.delete(api+"/"+id)
}

  constructor(private httpclient:HttpClient) { }
  getProducts():Product[]{
    return this.product;
  }
  
}

