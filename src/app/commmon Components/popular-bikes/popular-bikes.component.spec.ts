import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularBikesComponent } from './popular-bikes.component';

describe('PopularBikesComponent', () => {
  let component: PopularBikesComponent;
  let fixture: ComponentFixture<PopularBikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularBikesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
