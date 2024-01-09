import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedPatientsComponent } from './validated-patients.component';

describe('ValidatedPatientsComponent', () => {
  let component: ValidatedPatientsComponent;
  let fixture: ComponentFixture<ValidatedPatientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidatedPatientsComponent]
    });
    fixture = TestBed.createComponent(ValidatedPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
