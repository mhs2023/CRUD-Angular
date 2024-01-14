import { Component, OnInit } from '@angular/core';
import { RestApiService } from './service/rest-api.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  constructor(public apiService: RestApiService, private router: Router) { }

  sharedMessage: string = '';
  subscription!: Subscription
  
  ngOnInit(): void {
    this.isLogin();
    this.subscription = this.apiService.currentMessage.subscribe(message => this.sharedMessage = message);
  }
  
isLogin() {
  let login = localStorage.getItem("isLogin");
  if (login == "true") {
    this.apiService.changeMessage("false");
  }
}

}
