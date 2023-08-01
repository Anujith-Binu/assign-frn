import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  uname:any

  constructor(private route:Router, ){}

  ngOnInit():void{}

  loggedIn(){
    this.route.navigateByUrl('login')
  }


  isLoggedIn(){
    if(this.uname) return true;
    if(localStorage.getItem("currentUser")){
      this.uname = localStorage.getItem("currentUser")
      console.log(this.uname);
      
      return true
    }
    return false
  }

  logOut(){
    localStorage.removeItem('currentUser')
  }



}
