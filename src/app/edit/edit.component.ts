import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../service/rest-api.service';
import { Applicant } from '../model/Applicant';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(public apiService: RestApiService, private router: Router, private route: ActivatedRoute) { }
  id!: any;
  applicantData!: Applicant;

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    console.log(this.id);
    this.getDataById(this.id);
    
    // this.postService.find(this.id).subscribe((data: Post)=>{})
  }

  getDataById(id: any) {
    this.apiService.getById(id).subscribe((res: any) => {
      console.log('GetAll called successfully!')
      this.applicantData = res;
      this.applicantForm.setValue(this.applicantData);
  })
}

  applicantForm: FormGroup = new FormGroup({
    id: new FormControl(),
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

    this.apiService.updateData(this.applicantForm.value).subscribe((res: any) => {
      this.router.navigateByUrl('/list');
    })

  }


}
