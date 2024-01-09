import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedDoctorsComponent } from './validated-doctors.component';

describe('ValidatedDoctorsComponent', () => {
  let component: ValidatedDoctorsComponent;
  let fixture: ComponentFixture<ValidatedDoctorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidatedDoctorsComponent]
    });
    fixture = TestBed.createComponent(ValidatedDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
