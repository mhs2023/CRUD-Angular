import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public apiService: RestApiService, private router: Router) { }

  userRole: any;
  userName: any;


  ngOnInit(): void {
    this.userRole = localStorage.getItem("role");
    this.userName = localStorage.getItem("email");
  }

  logOut() {

    localStorage.removeItem("email");
    localStorage.removeItem("role");
    localStorage.removeItem("isLogin");
    this.apiService.changeMessage("true");
    this.router.navigateByUrl('/log-in');
  }
}


