import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionsRequestsComponent } from './inscriptions-requests/inscriptions-requests.component';
import { PatientInscriptionsRequestsComponent } from './patient-inscriptions-requests/patient-inscriptions-requests.component';
import { DoctorInscriptionsRequestsComponent } from './doctor-inscriptions-requests/doctor-inscriptions-requests.component';
import { PrestationServiceComponent } from './prestation-service/prestation-service.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { ValidatedPatientsComponent } from './validated-patients/validated-patients.component';

const routes: Routes = [
  { path: 'patientInscriptionsRequests', component: PatientInscriptionsRequestsComponent, title: "Demandes d'inscription" },
  { path: 'doctorInscriptionsRequests', component: DoctorInscriptionsRequestsComponent, title: "Demandes d'inscription" },
  { path: 'prestationsHistory', component: PrestationServiceComponent, title: 'historique des prestations'},
  { path: 'patientDetail', component: PatientDetailComponent, title: 'detail du patient'},
  { path: 'patients', component: ValidatedPatientsComponent, title: 'patients'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
