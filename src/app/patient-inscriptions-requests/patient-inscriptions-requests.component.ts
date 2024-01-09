import { Component } from '@angular/core';
import { PatientsService } from '../patients.service';
import { Patient } from '../interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-inscriptions-requests',
  templateUrl: './patient-inscriptions-requests.component.html',
  styleUrls: ['./patient-inscriptions-requests.component.css']
})
export class PatientInscriptionsRequestsComponent {
  constructor(private patientsService: PatientsService, private router: Router) {}

  nonValidatedPatients: Patient[] = [];
  selectedPatient?: Patient;

  ngOnInit(): void {
    this.getNonValidatedPatients();
  }

  getNonValidatedPatients(): void {
    this.patientsService.getNewPatients()
        .subscribe(patients => this.nonValidatedPatients = patients);
  }

  validatePatient(patient: Patient){
    console.log(patient);
    this.patientsService.validatePatient(patient).subscribe(patient => this.selectedPatient = patient);
    this.reload()
  }

  updatePatient(patient: Patient){
    console.log(patient);
    this.patientsService.updatePatient(patient).subscribe(patient => this.selectedPatient = patient);
  }

  selectPatient(patient: Patient){
    this.selectedPatient = patient;
    this.router.navigate(['patientDetail'], { queryParams: { patient_id: patient.id } });
  }

  deletePatient(patient: Patient){
    this.selectedPatient = patient;
  }

  reload(){
    this.router.navigate(['patientInscriptionsRequests']);
  }
}
