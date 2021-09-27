import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatedcostComponent } from './estimatedcost.component';

describe('EstimatedcostComponent', () => {
  let component: EstimatedcostComponent;
  let fixture: ComponentFixture<EstimatedcostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimatedcostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatedcostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
