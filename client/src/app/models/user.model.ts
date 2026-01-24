// models/user.model.ts
export interface User {
    id?: string;
    
    nom: string;
    prenom: string;

    email: string;
    password?: string;
  
}