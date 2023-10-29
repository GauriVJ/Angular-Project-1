import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 
  loginForms! : FormGroup;
  loginSuccess =  true;

  constructor(

    private router: Router,
    private fb: FormBuilder,
    private userSercvice: UserService
    
  ){}

   ngOnInit(): void {
    this.loginForms = this.fb.group({
      email: this.fb.control('',Validators.required),
      password:this.fb.control('',Validators.required)
    })
  }


login(){

  if(this.userSercvice.user.email == this.loginForms.value.email && this.userSercvice.user.password == this.loginForms.value.password ){
  console.log('this.loginForm.value',this.loginForms.valid)
  this.router.navigate(['dashboard'])
}
else{
this.loginSuccess = false;
}

}
}
