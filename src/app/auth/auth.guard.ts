// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Vérifiez si le token est présent
    if (this.authService.getToken()) {
      return true;
    } else {
      // Redirigez vers la page de connexion si le token n'est pas présent
      this.router.navigate(['/login']);
      return false;
    }
  }
}
