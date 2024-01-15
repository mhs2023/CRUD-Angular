import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { RestApiService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router, public restAPIService: RestApiService) { }

  ngOnInit(): void {
    this.isLogin();
    
  }
  isLogin() {

    let login = localStorage.getItem("isLogin");
    if (login !== "true") {
      this.router.navigateByUrl('/log-in');
    } else {
      this.router.navigateByUrl('/home');
    }
  }

  loginForm: FormGroup = new FormGroup({
    inputUserName: new FormControl(''),
    inputPassword: new FormControl('')
  });

  authList: any[] = [];

  login() {
    
    this.authService.getAll().subscribe((res: any) => {
      this.authList = res;

      let flag = false;

      for (let index = 0; index < this.authList.length; index++) {
        if (this.loginForm.value.inputUserName == this.authList[index].inputEmail && this.loginForm.value.inputPassword == this.authList[index].inputPassword) {
          localStorage.setItem("isLogin", "true");
          localStorage.setItem("email", this.authList[index].inputEmail);
          localStorage.setItem("role", this.authList[index].role);
          flag = true;
        }
      }


      if (flag == true) {
        this.restAPIService.changeMessage("false");
        this.router.navigateByUrl('/home');
      } else {
        alert("Incorrect UserName Or Password!")
      }

      
    });




  }




 
    
  

}
