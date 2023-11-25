import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  EditEmpform!: FormGroup;
  addagain = true;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    public userService: UserService
  ) {}

  ngOnInit(): void {

}


}
