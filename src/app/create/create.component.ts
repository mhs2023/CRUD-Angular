import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Applicant } from '../model/Applicant';
import { RestApiService } from '../service/rest-api.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  constructor(public apiService: RestApiService, private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isLogin();
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

