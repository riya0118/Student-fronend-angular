import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import Student from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  students: Student[] = [];

  constructor(private service: StudentService, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.service.getStudents().subscribe((data: Student[]) => {
      this.students = data;
    })
  }

  deleteBook(id :any) {
    this.service.deleteStudent(id).subscribe(res => {
      console.log('Deleted');
      this.ngOnInit(); 
    });
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
