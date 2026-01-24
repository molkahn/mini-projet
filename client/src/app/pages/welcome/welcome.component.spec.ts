import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-welcome',
  template: `
    <h1>Bienvenue, {{ user?.email }}</h1>
  `
})
export class WelcomeComponent implements OnInit {
  user: User | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const savedUser = localStorage.getItem('user');
    if (savedUser) this.user = JSON.parse(savedUser);
  }
}
