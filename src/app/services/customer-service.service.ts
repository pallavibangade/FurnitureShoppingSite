import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const api="http://localhost:8888/register"

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

 saveData(data){
  return this.httpclient.post(api,data)
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
   return this.httpclient.delete(api+id)
 }

// constructor(private httpclient:HttpClient) { }

  constructor(private httpclient:HttpClient) { }
}
