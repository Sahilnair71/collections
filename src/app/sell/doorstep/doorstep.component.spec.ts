import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorstepComponent } from './doorstep.component';

describe('DoorstepComponent', () => {
  let component: DoorstepComponent;
  let fixture: ComponentFixture<DoorstepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoorstepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorstepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
