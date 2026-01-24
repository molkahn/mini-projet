// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment'; // <-- importer environment

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.apiUrl + 'auth'; // <-- utilise environment.apiUrl

  constructor(private http: HttpClient) {}

  login(data: { email: string; password: string }): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/login`, data);
  }

  register(data: Partial<User>): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/register`, data);
  }

  saveUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}
