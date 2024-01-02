import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:7000/api/auth';

  sendData(newUser: any) {
    return this.http.post("http://localhost:7000/api/auth/register", newUser);
  }

  login(user: any) {
    return this.http.post(`${this.apiUrl}/login`, user);
  }

  user: any

  setUser(userData: any) {
    return this.user = userData
  }

  getUser() {
    return this.user
  }


}
