import { Injectable } from '@angular/core';
import { environment } from './environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Doctor } from './interfaces';

@Injectable({
  providedIn: 'root'
})

export class DoctorService {

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
        `server: ${error.status}: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened'));
  }

  getNewDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(environment.nonValidatedDoctors)
      .pipe(
        catchError(this.handleError)
      );
  }

  getNewDoctorById(doctorId: number): Observable<Doctor> {
    const url = `${environment.doctors}/${doctorId}`;
    return this.http.get<Doctor>(url);
  }

  addDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(environment.doctorInscription, doctor);
  }

  updateDoctor(doctor: Doctor): Observable<Doctor> {
    const url = `${environment.doctors}/${doctor.id}`;
    return this.http.put<Doctor>(url, doctor);
  }

  validateDoctor(doctor: Doctor): Observable<Doctor> {
    const url = `${environment.doctors}/${doctor.id}/validation`;
    return this.http.put<Doctor>(url, doctor);
  }

  deleteDoctor(doctorId: number): Observable<any> {
    const url = `${environment.doctors}/${doctorId}`;
    return this.http.delete<Doctor>(url);
  }
}
