import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellbikeComponent } from './sellbike.component';

describe('SellbikeComponent', () => {
  let component: SellbikeComponent;
  let fixture: ComponentFixture<SellbikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellbikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellbikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
