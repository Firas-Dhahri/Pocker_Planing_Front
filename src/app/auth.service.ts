// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8081/api/auth'; // Assurez-vous que c'est le bon endpoint

  constructor(private http: HttpClient) {}

  signIn(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(`${this.baseUrl}/signin`, body);
  }

  // Ajoutez une méthode pour stocker le token dans le service
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Ajoutez une méthode pour récupérer le token depuis le service
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  signOut(): void {
    localStorage.removeItem('token');
  }
}
