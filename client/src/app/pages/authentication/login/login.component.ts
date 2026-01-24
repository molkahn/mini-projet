import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-login',
  standalone: true,  // important si pas AppModule
  imports: [CommonModule, ReactiveFormsModule, RouterModule], // <-- imports pour ngIf, formGroup et routerLink
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void { }

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

submit(): void {
  console.log('SUBMIT CLICKED');

  if (this.form.invalid) {
    this.errorMessage = 'Formulaire invalide';
    return;
  }

  const { email, password } = this.form.value;

   console.log('EMAIL ===>', email);
  console.log('PASSWORD ===>', password);

  this.userService.login(email, password).subscribe({
    next: (user: User) => {
      console.log('LOGIN SUCCESS', user);
      this.authService.saveUser(user);
      this.router.navigate(['/welcome']);
    },
    error: () => {
      this.errorMessage = 'Email ou mot de passe invalide';
    }
  });
}


}
