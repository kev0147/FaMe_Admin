import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationServiceComponent } from './prestation-service.component';

describe('PrestationServiceComponent', () => {
  let component: PrestationServiceComponent;
  let fixture: ComponentFixture<PrestationServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrestationServiceComponent]
    });
    fixture = TestBed.createComponent(PrestationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
