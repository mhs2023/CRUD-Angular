import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/service/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  constructor(public http: BookingService, private router: Router) { }

  bookingForm: FormGroup = new FormGroup({
    visitor_name: new FormControl(''),
    visitor_email: new FormControl(''),
    visitor_phone: new FormControl(''),
    total_adults: new FormControl(''),
    total_children: new FormControl(''),
    checkin: new FormControl(''),
    checkout: new FormControl(''),
    room_preference: new FormControl(''),
    visitor_message: new FormControl('')
  })

  onSubmit() {
    console.log(this.bookingForm.value);
    this.http.addBooking(this.bookingForm.value).subscribe((val: any) => {
      this.router.navigateByUrl("/list");
    }
    )
  }
}
