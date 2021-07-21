import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import KeenSlider from 'keen-slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  constructor() {}

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
