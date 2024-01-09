import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InscriptionsRequestsComponent } from './inscriptions-requests/inscriptions-requests.component';
import { HttpClientModule } from '@angular/common/http';
import { DoctorInscriptionsRequestsComponent } from './doctor-inscriptions-requests/doctor-inscriptions-requests.component';
import { PatientInscriptionsRequestsComponent } from './patient-inscriptions-requests/patient-inscriptions-requests.component';
import { PrestationServiceComponent } from './prestation-service/prestation-service.component';
import { ValidatedPatientsComponent } from './validated-patients/validated-patients.component';
import { ValidatedDoctorsComponent } from './validated-doctors/validated-doctors.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    InscriptionsRequestsComponent,
    DoctorInscriptionsRequestsComponent,
    PatientInscriptionsRequestsComponent,
    PrestationServiceComponent,
    ValidatedPatientsComponent,
    ValidatedDoctorsComponent,
    PatientDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
