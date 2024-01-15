import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  loginForm: FormGroup = new FormGroup({
    inputFirstName: new FormControl(''),
    inputLastName: new FormControl(''),
    inputEmail: new FormControl(''),
    inputPhoneNumber: new FormControl(''),
    inputPassword: new FormControl(''),
    role: new FormControl("employee")
  });


  constructor(public apiService: AuthService, private router: Router) { }


  onSub() {
    this.apiService.addData(this.loginForm.value).subscribe((res: any) => {
      this.router.navigateByUrl('/log-in');
    })

  }
}
