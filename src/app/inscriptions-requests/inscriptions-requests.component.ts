import { Component } from '@angular/core';
import { PatientsService } from '../patients.service';
import { Patient } from '../interfaces';

@Component({
  selector: 'app-inscriptions-requests',
  templateUrl: './inscriptions-requests.component.html',
  styleUrls: ['./inscriptions-requests.component.css']
})
export class InscriptionsRequestsComponent {
  constructor(private patientsService: PatientsService) {}

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
    console.log(this.selectedPatient);
  }

  updatePatient(patient: Patient){
    console.log(patient);
    this.patientsService.updatePatient(patient).subscribe(patient => this.selectedPatient = patient);
  }

  selectPatient(patient: Patient){
    this.selectedPatient = patient;
  }

  deletePatient(patient: Patient){
    this.selectedPatient = patient;
  }
}
