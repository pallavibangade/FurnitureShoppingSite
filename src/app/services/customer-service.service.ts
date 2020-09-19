import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// const api="http://localhost:5555/registers"              //for json
const api="http://localhost:80/sample/"                 //for php

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

 saveData(data){
   console.log("data is ");
   console.log(data);
  return this.httpclient.post(api+"registration.php",data)
 }

 getData()
 {
   return this.httpclient.get(api+"getCustomers.php");
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

// constructor(private httpclient:HttpClient) { }

  constructor(private httpclient:HttpClient) { }
}
