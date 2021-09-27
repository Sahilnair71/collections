import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import KeenSlider from 'keen-slider';
import { NgxOtpInputConfig } from 'ngx-otp-input';

@Component({
  selector: 'app-slider1',
  templateUrl: './slider1.component.html',
  styleUrls: ['./slider1.component.css'],
})
export class Slider1Component implements OnInit {
  constructor() {}

  bikes = [
    {
      img: 'assets/buy_bikes.png',
      name: 'KTM RC 200',
      pay: '75,000',
      cost: '85,000',
    },
    {
      img: 'assets/buy_bikes.png',
      name: 'KTM RC 200',
      pay: '75,000',
      cost: '85,000',
    },
    {
      img: 'assets/buy_bikes.png',
      name: 'KTM RC 200',
      pay: '75,000',
      cost: '85,000',
    },
    {
      img: 'assets/buy_bikes.png',
      name: 'KTM RC 200',
      pay: '75,000',
      cost: '85,000',
    },
    {
      img: 'assets/buy_bikes.png',
      name: 'KTM RC 200',
      pay: '75,000',
      cost: '85,000',
    },
    {
      img: 'assets/buy_bikes.png',
      name: 'KTM RC 200',
      pay: '75,000',
      cost: '85,000',
    },
    {
      img: 'assets/buy_bikes.png',
      name: 'KTM RC 200',
      pay: '75,000',
      cost: '85,000',
    },
    {
      img: 'assets/buy_bikes.png',
      name: 'KTM RC 200',
      pay: '75,000',
      cost: '85,000',
    },
    {
      img: 'assets/buy_bikes.png',
      name: 'KTM RC 200',
      pay: '75,000',
      cost: '85,000',
    },
    {
      img: 'assets/buy_bikes.png',
      name: 'KTM RC 200',
      pay: '75,000',
      cost: '85,000',
    },
    {
      img: 'assets/buy_bikes.png',
      name: 'KTM RC 200',
      pay: '75,000',
      cost: '85,000',
    },
    {
      img: 'assets/buy_bikes.png',
      name: 'KTM RC 200',
      pay: '75,000',
      cost: '85,000',
    },
  ];

  ngOnInit(): void {}
  @ViewChild('sliderRef', { static: true }) sliderRef: ElementRef<HTMLElement>;

  slider: any = null;
  currentSlide: number = 1;

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      slidesPerView: 4,
      mode: 'free-snap',
      spacing: 15,
      loop: true,
      initial: this.currentSlide,
      slideChanged: (s) => {
        this.currentSlide = s.details().relativeSlide;
      },
    });
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
}
