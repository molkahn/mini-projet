import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="welcome-container">
      <h1>Bienvenue sur la page Welcome !</h1>
      <button (click)="goToLogin()">Se déconnecter</button>
    </div>
  `,
  styles: [`
    .welcome-container {
      text-align: center;
      margin-top: 50px;
    }
    button {
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
    }
    button:hover {
      background-color: #0056b3;
    }
  `]
})
export class WelcomeComponent {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
