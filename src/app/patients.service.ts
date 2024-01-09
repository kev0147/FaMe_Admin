import { Injectable } from '@angular/core';
import { environment } from './environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Patient } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('client:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `server ${error.status}: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened'));
  }

  getNewPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(environment.nonValidatedPatients)
      .pipe(
        catchError(this.handleError)
      );
  }

  getPatients(): Observable<Patient[]> {
    const url = environment.validatedPatients;
    return this.http.get<Patient[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // GET a single patient by ID
  getPatientById(patientId: string): Observable<Patient> {
    const url = `${environment.patients}/${patientId}`;
    return this.http.get<Patient>(url);
  }

  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(environment.patientInscription, patient);
  }

  // PUT: Update an existing item
  updatePatient(patient: Patient): Observable<Patient> {
    const url = `${environment.patients}/${patient.id}`;
    return this.http.put<Patient>(url, patient);
  }

  // PUT: Update an existing item
  validatePatient(patient: Patient): Observable<Patient> {
    console.log(patient.id)
    const url = `${environment.patients}/${patient.id}/validation`;
    return this.http.put<Patient>(url, patient);
  }

  // DELETE: Remove an item
  deletePatient(patientId: number): Observable<any> {
    const url = `${environment.patients}/${patientId}`;
    return this.http.delete<Patient>(url);
  }
}
