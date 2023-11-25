import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
cancel() {
  this.router.navigate(['dashboard'])
}

  AddEmpform!: FormGroup;
  openform = false;
  showlist = true;
  showaddbutton = true;
  isEdit = false;
  Currentindex = 0;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.AddEmpform = this.fb.group({
      empfname: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      emplname: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      empsalary: this.fb.control('', Validators.required),
      empmail: this.fb.control(''),
    });

   
  }

  addemployee() {
   
    if (this.AddEmpform.valid) {
      console.log('this.RegisterationForms', this.AddEmpform.value);
      this.userService.employee.push(this.AddEmpform.value);
      this.router.navigate(['dashboard'])
    }
    
}

}
