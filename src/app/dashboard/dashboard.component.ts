import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  Dashform!: FormGroup;
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
    this.Dashform = this.fb.group({
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
    
    if (this.Dashform.valid) {
      console.log('this.RegisterationForms', this.Dashform.value);
      this.userService.employee.push(this.Dashform.value);
    }
    this.router.navigate(['add-employee']);
   
  }
  

  editemployee(index: number){
    this.isEdit = true;
    this.Currentindex = index;
    this.userService.employee = this.userService.employee[index]
 }

 save(){
  this.userService.employee[this.Currentindex] = this.userService.employee;
   this.isEdit=false; 
 }

 remove(index : number){

 }
  // editemployee() {}
}
