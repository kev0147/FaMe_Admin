import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionsRequestsComponent } from './inscriptions-requests.component';

describe('InscriptionsRequestsComponent', () => {
  let component: InscriptionsRequestsComponent;
  let fixture: ComponentFixture<InscriptionsRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscriptionsRequestsComponent]
    });
    fixture = TestBed.createComponent(InscriptionsRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
