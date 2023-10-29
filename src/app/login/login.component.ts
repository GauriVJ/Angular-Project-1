import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 
  loginForms! : FormGroup;

  constructor(

    private router: Router,
    private fb: FormBuilder
    
  ){}

   ngOnInit(): void {
    this.loginForms = this.fb.group({
      email: this.fb.control('',Validators.required),
      password:this.fb.control('',Validators.required)
    })
  }


login(){
  console.log('this.loginForm.value',this.loginForms.valid)

  this.router.navigate(['dashboard'])
}

}

