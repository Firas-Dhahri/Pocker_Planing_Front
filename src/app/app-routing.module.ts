import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component'; // Importez le composant de gestion des utilisateurs
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: 'users', component: UserComponent, canActivate: [AuthGuard] } // Ajoutez cette ligne pour la gestion des utilisateurs
    ]
  },
  {
    path: 'login',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
