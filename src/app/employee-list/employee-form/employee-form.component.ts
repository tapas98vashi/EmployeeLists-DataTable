import { Component, OnInit } from '@angular/core';
import { FormBuilder, MaxLengthValidator } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  submitted = false;  //Used for form validation

  fullname = null;
  email = null;
  mobile = null;
  city = null;
  department = null;
  employee;
  Id: number;

  profileForm = this.fb.group({
    fullname: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    city: ['', Validators.required],
    gender: [''],
    department: ['', Validators.required],
    date: [''],
    permanentemp: ['']
  });
/**
 * If condition to decide whether to add or update
 */
  onSubmit() {
    if(this.Id)
    {
      this.httpClient.put(`http://localhost:3000/EmployeeData/${this.Id}`, this.profileForm.value).subscribe();
    }
    else
    {
      console.warn(this.profileForm.value);
      this.httpClient.post('http://localhost:3000/EmployeeData/', this.profileForm.value).subscribe();
    }  
  }

  constructor(private fb: FormBuilder, private routes: ActivatedRoute, private httpClient: HttpClient) { 
    this.profileForm = this.fb.group({
    fullname: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    city: ['', Validators.required],
    gender: [''],
    department: ['', Validators.required],
    date: [''],
    permanentemp: ['']
  });
   }
  ngOnInit() {
    this.Id = this.routes.snapshot.params['id'];
/**
 * Http request for update form
 */
    this.httpClient.get(`http://localhost:3000/EmployeeData/${this.Id}`).subscribe( data=>
    {
      console.log(data);
      this.employee = data;
      this.profileForm.setValue ({
        fullname: this.employee.fullname,
        email: this.employee.email,
        mobile: this.employee.mobile,
        city: this.employee.city,
        department: this.employee.department,
        gender: 'male',
        date: '2020-02-03',
        permanentemp: ""
      })
    })
  }
}



