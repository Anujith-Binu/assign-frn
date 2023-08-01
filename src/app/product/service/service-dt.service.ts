import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceDTService {

  constructor(private http:HttpClient) { }

  // api to register
  register(fname:any,uname:any,email:any,phone:any,psw:any){
    const body={
      fname,
      uname,
      email,
      phone,
      psw
    }
     return this.http.post('http://localhost:3000/product/register',body)
  }

  // api login

  login(phone:any,psw:any){
    const body={
      phone,
      psw
    }
    return this.http.post('http://localhost:3000/product/login',body)
  }

  // api getall

getAllProduct () {
  return this.http.get('http://localhost:3000/product/shopnow')
}


}

