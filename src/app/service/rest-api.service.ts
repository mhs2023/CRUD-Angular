import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Applicant } from './../model/Applicant';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  private apiURL = "http://localhost:3000/posts";

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
}
