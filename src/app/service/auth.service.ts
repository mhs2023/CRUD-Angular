import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Applicant } from '../model/Applicant';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  private apiURL = "http://localhost:3000/auth";

  httpOptions = {
    headers: new HttpHeaders(
      {'content-Type': 'application/json'

      }
    )
  }

  addData(applicant: Applicant) {
    console.log("Call from service "+ applicant.Email);
    return this.http.post(this.apiURL, applicant)
  }

  getAll(){
    console.log("Call from service ");
    return this.http.get(this.apiURL);
  }
  getById(id: any) {
    return this.http.get(this.apiURL+ "/" + id)
  }

  deleteById(id: any) {
    return this.http.delete(this.apiURL+ "/" + id);
  }

  updateData(applicant: Applicant) {
    return this.http.put(this.apiURL+"/" + applicant.id, applicant);
  }

  isLogin() {

    let login = localStorage.getItem("isLogin");
    let role = localStorage.getItem("role");
    if (login !== "true") {
      this.router.navigateByUrl('/log-in');
    } else {
      if (role == "admin"){
        this.router.navigateByUrl('/create');
      }
    }
  }
}
