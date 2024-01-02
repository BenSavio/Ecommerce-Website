import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public user = {
    username: '',
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    if (this.user.username && this.user.email && this.user.password) {
      this.sendLoginData();
      // console.log(this.user);
    } else {
      console.log('Please provide username and password.');
    }
  }

  sendLoginData() {
    this.authService.login(this.user).subscribe(
      (response) => {
        console.log('Login successful:', response);
        this.authService.setUser(response);
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }




}
