import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Validator } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  RegisterationForms! : FormGroup;
  // static email(control: AbstractControl<any, any>): ValidationErrors | null;
  

  constructor(

    private router: Router,
    private fb: FormBuilder
    
  ){}

  ageValidator(control: AbstractControl) {
    const birthdate = new Date(control.value);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear(); 

    if (age<14)
    {
      return {invalid:true};
    }
    return null;
  }

 
   ngOnInit(): void {
    this.RegisterationForms = this.fb.group({
      lname: this.fb.control('',[Validators.required,Validators.minLength(3), Validators.maxLength(30)]),
      fname: this.fb.control('',[Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
      mobno: this.fb.control('',[Validators.required,Validators.minLength(10),Validators.maxLength(10), Validators.pattern(/^\d{10}$/)]),
      email: this.fb.control('',[Validators.required, Validators.email]),
      password:this.fb.control('',[Validators.required,Validators.minLength(8),Validators.maxLength(16),Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,16}$/)]),
      dob:this.fb.control('',[Validators.required, this.ageValidator.bind(this)])
    })
  }
 
  

  register(){
    console.log('this.RegisterationForms',this.RegisterationForms)
  }

}



