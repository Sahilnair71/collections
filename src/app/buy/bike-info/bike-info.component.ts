import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';
import { NgxOtpInputConfig } from 'ngx-otp-input';

@Component({
  selector: 'app-bike-info',
  templateUrl: './bike-info.component.html',
  styleUrls: ['./bike-info.component.css'],
})
export class BikeInfoComponent {
  constructor() {}
  @ViewChild('sliderRef') sliderRef: ElementRef<HTMLElement>;
  @ViewChild('sliderRef1') sliderRef1: ElementRef<HTMLElement>;
  seconds: any;
  public settings = {
    length: 4,
    numbersOnly: true,
    timer: 120,
    timerType: 1,
  };
  submitted = false;
  currentSlide: number = 1;
  dotHelper: Array<Number> = [];
  slider: KeenSlider;
  slider1: KeenSlider;
  interval: any = 0;
  pause: boolean = false;
  images = [
    'assets/slider/ktm_1.png',
    'assets/slider/ktm_2.png',
    'assets/slider/ktm_3.png',
    'assets/slider/ktm_1.png',
    'assets/slider/ktm_2.png',
    'assets/slider/ktm_3.png',
  ];
  resetInterval() {
    clearInterval(this.interval);
  }
  setInterval() {
    this.resetInterval();
    this.interval = setInterval(() => {
      if (!this.pause) {
        this.slider.next();
      }
    }, 8000);
  }

  setPause(active: any) {
    this.pause = active;
    this.setInterval();
  }
  handeOtpChange(value: string[]): void {
    console.log(value);
  }

  handleFillEvent(value: string): void {
    console.log(value);
  }

  Onsubmitted() {
    this.submitted = true;
  }
  update_time() {
    let counter = 60;

    const interval = setInterval(() => {
      this.seconds = counter;
      this.seconds = this.transform(this.seconds);

      counter--;

      if (counter < 0) {
        clearInterval(interval);
      }
    }, 1000);
  }
  transform(value: number, args?: any) {
    const hours: number = Math.floor(value / 60);
    const minutes: number = value - hours * 60;

    if (hours < 10 && minutes < 10) {
      return '0' + hours + ' : 0' + (value - hours * 60);
    } else if (hours > 10 && minutes > 10) {
      return '0' + hours + ' : ' + (value - hours * 60);
    } else if (hours > 10 && minutes < 10) {
      return hours + ' : 0' + (value - hours * 60);
    } else {
      return '0' + hours + ' : ' + (value - hours * 60);
    }
  }
  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 6,
    autofocus: true,
    classList: {
      inputBox: 'my-super-box-class',
      input: 'my-super-class',
      inputFilled: 'my-super-filled-class',
      inputDisabled: 'my-super-disable-class',
      inputSuccess: 'my-super-success-class',
      inputError: 'my-super-error-class',
    },
  };

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider1 = new KeenSlider(this.sliderRef1.nativeElement, {
        initial: this.currentSlide,
        slidesPerView: 4,
        spacing: 10,

        slideChanged: (s) => {
          this.currentSlide = s.details().relativeSlide;
        },
      });
    });
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        loop: true,
        duration: 1000,
        dragStart: () => {
          this.setPause(true);
        },
        dragEnd: () => {
          this.setPause(false);
        },
        initial: this.currentSlide,
        slideChanged: (s) => {
          this.currentSlide = s.details().relativeSlide;
          this.slider1.moveToSlideRelative(this.currentSlide);
        },
      });
      this.setInterval();
      this.dotHelper = [...Array(this.slider.details().size).keys()];
    });
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
}
