import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadStaffComponent } from './load-staff.component';

describe('LoadStaffComponent', () => {
  let component: LoadStaffComponent;
  let fixture: ComponentFixture<LoadStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
