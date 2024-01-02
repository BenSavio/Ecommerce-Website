import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  newUser = {
    username: '',
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router) { }

  save(): void {
    if (this.newUser.username && this.newUser.email && this.newUser.password) {
      this.sendDataToBackend();
    } else {
      console.log('Please fill in all fields.');
    }
  }


  sendDataToBackend() {
    const dataToSend = this.newUser;

    this.authService.sendData(dataToSend).subscribe(
      (response) => {
        console.log('Data sent successfully:', response);
        this.authService.setUser(response);
        this.router.navigate(['/']);

      },
      (error) => {
        console.error('Error sending data:', error);
        console.log("User already exists or wrong details...");

      }
    );
  }
}