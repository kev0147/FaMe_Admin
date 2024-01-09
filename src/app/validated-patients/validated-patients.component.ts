import { Component } from '@angular/core';
import { PatientsService } from '../patients.service';
import { Patient } from '../interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validated-patients',
  templateUrl: './validated-patients.component.html',
  styleUrls: ['./validated-patients.component.css']
})
export class ValidatedPatientsComponent {


  constructor(private patientsService: PatientsService, private router: Router) {}

  validatedPatients: Patient[] = [];
  selectedPatient?: Patient;

  ngOnInit(): void {
    this.getValidatedPatients();
  }

  getValidatedPatients(): void {
    this.patientsService.getPatients()
        .subscribe(patients => this.validatedPatients = patients);
  }

  selectPatient(patient: Patient){
    this.selectedPatient = patient;
    this.goToDetail(this.selectedPatient)
  }

  goToDetail(patient: Patient){
    this.router.navigate(['patientDetail'], { queryParams: { patient_id: patient.id } });
  }

  deletePatient(patient: Patient){
    
  }
}
