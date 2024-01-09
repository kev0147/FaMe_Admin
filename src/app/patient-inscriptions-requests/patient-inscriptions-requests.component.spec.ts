import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInscriptionsRequestsComponent } from './patient-inscriptions-requests.component';

describe('PatientInscriptionsRequestsComponent', () => {
  let component: PatientInscriptionsRequestsComponent;
  let fixture: ComponentFixture<PatientInscriptionsRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientInscriptionsRequestsComponent]
    });
    fixture = TestBed.createComponent(PatientInscriptionsRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
