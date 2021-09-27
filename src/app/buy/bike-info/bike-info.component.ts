import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';

@Component({
  selector: 'app-bike-info',
  templateUrl: './bike-info.component.html',
  styleUrls: ['./bike-info.component.css'],
})
export class BikeInfoComponent {
  constructor() {}
  @ViewChild('sliderRef') sliderRef: ElementRef<HTMLElement>;
  @ViewChild('sliderRef1') sliderRef1: ElementRef<HTMLElement>;

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
