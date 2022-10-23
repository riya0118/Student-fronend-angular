import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {
  student: any = {};
  editForm: FormGroup;

  constructor(private builder: FormBuilder, private router: Router, private route: ActivatedRoute, private service: StudentService) {
    this.editForm = this.builder.group({
      rollno: ['', Validators.required],
      name: ['', Validators.required],
      age: ['', Validators.required],
      sem: ['', Validators.required],
      username: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.service.getStudentById(params['id']).subscribe(res => {
        this.student = res;
      });
    });
  }

  update(){
    this.service.editStudent(this.student._id, this.editForm.value.rollno, this.editForm.value.name, this.editForm.value.age, this.editForm.value.sem, this.editForm.value.username);
    this.router.navigate(['studentlist'])
  }

}
