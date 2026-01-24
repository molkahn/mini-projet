import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule], // <--- important pour ngIf, formGroup, routerLink
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  // getter pour simplifier l'accès aux contrôles du formulaire
  get f() {
    return this.form.controls;
  }

  submit() {
  if (this.form.valid) {
     const user = this.form.value; // { nom, prenom, email, password }

    // Créer username à partir de nom + prenom
    user.username = `${user.nom}${user.prenom}`.toLowerCase();
    this.userService.register(user).subscribe(
      (res) => {
        this.successMessage = 'Inscription réussie !';
        this.errorMessage = '';
        this.form.reset();
      },
      (err) => {
        console.error(err);
        this.errorMessage = 'Une erreur est survenue lors de l\'inscription.';
        this.successMessage = '';
      }
    );
  } else {
    this.errorMessage = 'Veuillez remplir correctement tous les champs.';
  }
}

}
