import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceDTService } from '../service/service-dt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {



  constructor(private fb: FormBuilder, private ds: ServiceDTService, private router: Router) { }

  // Reactive model form

  registerForm = this.fb.group({
    fname: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')]],
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    email: ['',[Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
    psw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    cpsw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
  })



  signUp() {

    var path = this.registerForm.value

    var fname = path.fname
    var uname = path.uname
    var email = path.email
    var phone = path.phone
    var psw = path.psw
    var cpsw = path.cpsw

    if(this.registerForm.valid){
      if (psw == cpsw) {
        this.ds.register(fname, uname, email, phone, psw).subscribe((result: any) => {
          alert(result.message)
          this.router.navigateByUrl('login')
        }, result => {
          alert(result.error.message)
        }
        )
      }
      else {
        alert('incorrect password')
      }
  
    }
    else{
      alert('invalid form')
    }

  }

}
