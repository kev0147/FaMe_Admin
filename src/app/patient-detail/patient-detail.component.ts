import { Component } from '@angular/core';
import { PatientsService } from '../patients.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient, Profile } from '../interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent {

  validationButtonHasBeenPressed : Boolean = false;
  patient?: Patient;

  patientForm = this.fb.group(
    {
      profileForm: this.fb.group({
        name: ['', Validators.required],
        firstname: ['', Validators.required],
        phone_number: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
        email: ['', Validators.email],
        userForm: this.fb.group({
          username: ['', Validators.required]
        })
      }),
      gender: ['', Validators.required],
      birth_date: ['', Validators.required]
    },
  );

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private patientService: PatientsService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['patient_id']) {
        this.patientService.getPatientById(params['patient_id']).subscribe(patient => this.patient = patient);
      }
    });
  }

  onSubmit(){
    if(this.patientForm.valid){
      let signedUpPatient = this.formBuilderToPatient(this.patientForm)
      this.updatePatientInDatabase(signedUpPatient);
      console.log(signedUpPatient);
      //if(this.signedUpPatient){this.signed_up = true;}
      
    }
  }

  goBack(){
    this.router.navigate(['patients']);
  }

  updatePatientInDatabase(patient: Patient) {
    this.patientService.updatePatient(patient)
      .subscribe(patient => {
        this.patient = patient;
      });
  }

  formBuilderToPatient(form:FormGroup){
    const patientProfile: Profile = {
      name: form.value.profileForm?.name!,
      firstname: form.value.profileForm?.firstname!,
      email: form.value.profileForm?.email!,
      phone_number: Number(form.value.profileForm?.phone_number!)
    }
    const signedUpPatient: Patient = {
      birth_date: this.formatDate(new Date(form.value.birth_date!)),
      gender: form.value.gender!,
      profile: patientProfile,
      id: this.patient?.id!
    };
    return signedUpPatient;
  }

  formatDate(patientBirthDate: Date) {

    // Get the year, month, and day from the date object
    const year = patientBirthDate.getFullYear();
    const month = String(patientBirthDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(patientBirthDate.getDate()).padStart(2, '0');

    // Create the formatted date string
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }


}
