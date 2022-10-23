import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private builder: FormBuilder, private router: Router, private service: StudentService) {
    this.loginForm = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }

  login(){
    alert("Welcome " + this.loginForm.value.username);
    this.service.loginStudent(this.loginForm.value.username, this.loginForm.value.password);
    this.router.navigate(['studentlist']);
  }

}