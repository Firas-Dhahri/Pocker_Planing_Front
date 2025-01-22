import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AfficherTicketrComponent } from './components/afficher-ticket/afficher-ticketr.component';
import { AjouterticketComponent } from './components/ajouterticket/ajouterticket.component';
import { UpdateticketComponent } from './components/updateticket/updateticket.component';
import { AfficherSprintsComponent } from './components/afficher-sprints/afficher-sprints.component';
import { AjoutersprintComponent } from './components/ajoutersprint/ajoutersprint.component';
import { UpdatesprintComponent } from './components/updatesprint/updatesprint.component';

const routes: Routes = [
  {path:'' , component:NavbarComponent , children:[
  { path: 'affichertickets', component: AfficherTicketrComponent },
  { path: 'ajouterticket', component: AjouterticketComponent }, 
  { path: 'affichersprints', component: AfficherSprintsComponent }, 
  { path: 'ajoutersprint', component: AjoutersprintComponent }, 
  { path: 'updateticket/:issueKey', component: UpdateticketComponent }, 
  { path: 'updatesprint/:sprintId', component: UpdatesprintComponent }, 

    

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
