import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Applicant } from '../model/Applicant';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient, private router: Router) { }

  private url = "http://localhost:3000/booking";

  httpOptions = {
  headers: new HttpHeaders (
    {'content-type': 'booking/json'}
    )
  }

  addBooking(applicant: Applicant) {
    return this.http.post(this.url, applicant)
  }

}
