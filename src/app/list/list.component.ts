import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Applicant } from '../model/Applicant';
import { RestApiService } from '../service/rest-api.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public apiService: RestApiService, public authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.getAllData();
    this.authService.isLogin();
  }

  applicantList: Applicant[] = [];

  getAllData() {
    this.apiService.getAll().subscribe((res: any) => {
      console.log('GetAll called successfully!')
      this.applicantList = res;

    })
  }
  

  delete(id: any) {
   this.apiService.deleteById(id).subscribe((val: any) => {
    alert("Delete Successfully!");
    this.getAllData();
   } )
  }

  
 



 

}
