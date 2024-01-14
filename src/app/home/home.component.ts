import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../service/rest-api.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private dataService: RestApiService, private router: Router, private authService: AuthService){}
  
  ngOnInit(): void {

    this.authService.isLogin();
    }

  
}
