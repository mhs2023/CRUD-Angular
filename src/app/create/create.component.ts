import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Applicant } from '../model/Applicant';
import { RestApiService } from '../service/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  constructor(public apiService: RestApiService, private router: Router) { }

  ngOnInit(): void {
  }


  applicantForm: FormGroup = new FormGroup({

    Name: new FormControl(''),
    gridRadios: new FormControl(''),
    Email: new FormControl(''),
    Password: new FormControl(''),
    Address: new FormControl(''),
    City: new FormControl(''),
    Division: new FormControl(''),
    Zip: new FormControl('')

  })

  onSub() {

    this.apiService.addData(this.applicantForm.value).subscribe((res: any) => {
      console.log('Post created successfully!')
      this.router.navigateByUrl('/list');
    })

  }

  clear() {
    this.applicantForm = new FormGroup({
      Name: new FormControl(),
      gridRadios: new FormControl(),
      Email: new FormControl(),
      Password: new FormControl(),
      Address: new FormControl(),
      City: new FormControl(),
      Division: new FormControl(),
      Zip: new FormControl()

    })
  }



}

