// user.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';  // Import de AuthService
import { Router } from '@angular/router';  // Import de Router

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users!: any[];
  selectedUser: any = {};
  newUser: any = {};
  selectedUserRoles: any[] = [];
  roles: any[] = []; // Ajout du tableau des rôles

  constructor(
    private userService: UserService,
    private authService: AuthService,  // Injection de AuthService
    private router: Router  // Injection de Router
  ) {}

  ngOnInit(): void {
    this.loadUsers();
    this.loadRoles(); // Appel de la méthode pour charger les rôles
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(
      (data: any[]) => {
        this.users = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  loadRoles(): void {
    this.userService.getRoles().subscribe(
      (data: any[]) => {
        this.roles = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  selectUser(user: any): void {
    this.selectedUser = { ...user };
  }

  createUser(): void {
    this.userService.createUser(this.newUser).subscribe(
      (response: any) => {
        console.log(response);
        this.loadUsers();
        this.newUser = {}; // Réinitialise le nouvel utilisateur
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  updateUser(): void {
    if (this.selectedUser.id) {
      this.userService.updateUser(this.selectedUser.id, this.selectedUser).subscribe(
        (response: any) => {
          console.log(response);
          this.loadUsers();
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }

  signOut(): void {
    this.authService.signOut();
    this.router.navigate(['/login']);
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(
      (response: any) => {
        console.log(response);
        this.loadUsers();
        this.selectedUser = {}; // Désélectionne l'utilisateur après la suppression
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
