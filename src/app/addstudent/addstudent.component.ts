import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  addForm: FormGroup;

  constructor(private builder: FormBuilder, private router: Router, private service: StudentService) {
    this.addForm = this.builder.group({
      rollno: ['', Validators.required],
      name: ['', Validators.required],
      age: ['', Validators.required],
      sem: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
   }

   add(){
    this.service.addStudent(this.addForm.value.rollno, this.addForm.value.name, this.addForm.value.age, this.addForm.value.sem, this.addForm.value.username, this.addForm.value.password);
    this.router.navigate(['studentlist']);
   }

  ngOnInit(): void {
  }

}
