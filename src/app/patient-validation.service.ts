import { Injectable } from '@angular/core';
import { environment } from './environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Patient } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class PatientValidationService {

  private backendUrl = environment.backendUrl;
  private url = `${this.backendUrl}patientValidation`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened'));
  }

    // PUT: Update an existing item
    validatePatient(patient: Patient): Observable<Patient> {
      const url = `${this.url}/${patient.id}/`;
      return this.http.put<Patient>(url, patient);
    }
}
