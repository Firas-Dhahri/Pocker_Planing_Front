// auth.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.signIn(this.username, this.password).subscribe(
      (response) => {
        console.log('Authentication successful:', response);
        // Stockez le token après une connexion réussie
        this.authService.setToken(response.token);
        this.router.navigate(['/users']);  // Redirige vers la page des utilisateurs après une connexion réussie
      },
      (error) => {
        console.error('Authentication error:', error);
        // Gérer l'erreur d'authentification (par exemple, afficher un message d'erreur à l'utilisateur)
      }
    );
  }
}
