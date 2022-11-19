import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  uri = "http://localhost:9000/students";

  login(username: string, password: string) : Observable<boolean> {
    // const data = {
    //   username: username,
    //   password: password
    // }
    return this.http.post(`${this.uri}/login`, { username: username, password: password }, {responseType: 'text'})
    .pipe(
      map(result => {
        localStorage.setItem('access_token', result);
        return true;
      })
    );
  }

  logout(){
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean{
    return (localStorage.getItem('access_token') !== null);
  }
}
