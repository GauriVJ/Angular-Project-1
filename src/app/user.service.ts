import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any;
  employee: any[]=[
    {
      empfname: 'gauri',
      emplname:'jadhav',
      empsalary:'50000',
      empmail:'abc@a.com'
  },
]

  constructor() { }
}
