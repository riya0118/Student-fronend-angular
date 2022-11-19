import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: any

  constructor(private builder: FormBuilder, private router: Router, private service: StudentService, private auth: AuthService) {
    this.loginForm = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }

  login(){
    // alert("Welcome " + this.loginForm.value.username);
    this.auth.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe({
        complete: () => this.router.navigate(['studentlist']),
        error: (e) => this.error = "Unauthorized"
    })
  }
}