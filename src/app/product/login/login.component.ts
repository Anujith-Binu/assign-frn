import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceDTService } from '../service/service-dt.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private route:Router, private ds:ServiceDTService, private fb:FormBuilder){}


  // modal login

  loginForm=this.fb.group({
    phone:['',[Validators.required,Validators.pattern("^[0-9]{10}$")]],
    psw:['',[Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]
  })

  login(){
    var phone=this.loginForm.value.phone
    var psw=this.loginForm.value.psw
    if(this.loginForm.valid){
      this.ds.login(phone,psw).subscribe((result:any)=>{


        localStorage.setItem('currentUser',result.currentUser)
        localStorage.setItem('currentPhone',result.currentPhone)

        alert(result.message)
        this.route.navigateByUrl('shopnow')
      },
      result=>{
        alert(result.error.message)
      })
  
    }
    else{
      alert('invalid form')
    }
    
  }
}