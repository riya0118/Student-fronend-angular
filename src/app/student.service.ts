import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Student from './student';
import { Observable, of, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  uri = "http://localhost:9000/students";
  token: any;

  constructor(private http: HttpClient) { }

  loginStudent(username: string, password: string){
    const data = {
      username: username,
      password: password
    };
    console.log(data);
    this.token = this.http.post(`${this.uri}/login`, data, {responseType: 'text'}).subscribe(res => console.log("login done"));
  }

  getStudents(): Observable<Student[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
    return this.http.get<Student[]>(`${this.uri}`, { headers: headers });
  }

  addStudent(rollno: number, name: string, age: number, sem: number, username: string, password: string){
    const data = {
      rollno: rollno,
      name: name,
      age: age,
      sem: sem,
      username: username,
      password: password
    }
    this.http.post(`${this.uri}`, data).subscribe(res => console.log("student added"));
  }

  getStudentById(id: any){
    return this.http.get(`${this.uri}/${id}`);
  }

  editStudent(id: any, rollno: number, name: string, age: number, sem: number, username: string){
    const data = {
      rollno: rollno,
      name: name,
      age: age,
      sem: sem,
      username: username
    };
    this.http.put(`${this.uri}/${id}`, data).subscribe(res => console.log("editted"));
  }

  deleteStudent(id: any){
    return this.http.delete(`${this.uri}/${id}`);
  }
}