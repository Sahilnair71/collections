import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { StepperComponent } from '../stepper/stepper.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-sellbike',
  templateUrl: './sellbike.component.html',
  styleUrls: ['./sellbike.component.css'],
})
export class SellbikeComponent implements OnInit {
  constructor() {}
  submitted = false;

  otpVal(val: any) {
    console.log('OTP Parent', val);
    this.submitted = val;
  }
  ngOnInit(): void {}
}
