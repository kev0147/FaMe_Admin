import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionsRequestsComponent } from './inscriptions-requests/inscriptions-requests.component';

const routes: Routes = [
  { path: 'inscriptionsRequests', component: InscriptionsRequestsComponent, title: "Demandes d'inscription" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
