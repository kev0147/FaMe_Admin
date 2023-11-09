import { TestBed } from '@angular/core/testing';

import { PatientValidationService } from './patient-validation.service';

describe('PatientValidationService', () => {
  let service: PatientValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
