// src/app/pages/authentication/authentication.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // <-- si tes services utilisent HttpClient

import { LoginComponent } from './login/login.component';        // <-- chemin relatif
import { RegisterComponent } from './register/register.component'; // <-- chemin relatif
import { AuthenticationRoutingModule } from './authentification-routing.module'; // <-- chemin relatif correct

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,          
    FormsModule,           
    ReactiveFormsModule,   
    RouterModule,          
    HttpClientModule,      // <-- nécessaire pour UserService
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule {}
