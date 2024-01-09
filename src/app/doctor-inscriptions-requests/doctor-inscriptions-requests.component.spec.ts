import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorInscriptionsRequestsComponent } from './doctor-inscriptions-requests.component';

describe('DoctorInscriptionsRequestsComponent', () => {
  let component: DoctorInscriptionsRequestsComponent;
  let fixture: ComponentFixture<DoctorInscriptionsRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorInscriptionsRequestsComponent]
    });
    fixture = TestBed.createComponent(DoctorInscriptionsRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
