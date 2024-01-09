import { Component } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../interfaces';

@Component({
  selector: 'app-doctor-inscriptions-requests',
  templateUrl: './doctor-inscriptions-requests.component.html',
  styleUrls: ['./doctor-inscriptions-requests.component.css']
})
export class DoctorInscriptionsRequestsComponent {
  constructor(private doctorsService: DoctorService) {}

  nonValidatedDoctors: Doctor[] = [];
  selectedDoctor?: Doctor;

  ngOnInit(): void {
    this.getNonValidatedDoctors();
  }

  getNonValidatedDoctors(): void {
    this.doctorsService.getNewDoctors()
        .subscribe(doctors => this.nonValidatedDoctors = doctors);
    console.log(this.nonValidatedDoctors)
  }

  validateDoctor(doctor: Doctor){
    this.doctorsService.validateDoctor(doctor).subscribe(doctor => this.selectedDoctor = doctor);
    location.reload();
  }

  updateDoctor(doctor: Doctor){
    this.doctorsService.updateDoctor(doctor).subscribe(doctor => this.selectedDoctor = doctor);
  }

  selectDoctor(Doctor: Doctor){
    this.selectedDoctor = Doctor;
  }

  deleteDoctor(doctor: Doctor){
    this.doctorsService.deleteDoctor(doctor.id).subscribe();
    location.reload();
  }
}
