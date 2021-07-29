import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';
import { NgxOtpInputConfig } from 'ngx-otp-input';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent implements OnInit {
  public settings = {
    length: 4,
    numbersOnly: true,
    timer: 120,
    timerType: 1,
  };
  name = 'Angular';
  city_name = 'City';
  brand_name = 'BRAND';
  model_name = 'MODEL';
  variant_name = 'VARIANT';
  year_name = 'YEAR';
  success = false;
  success1 = false;
  success2 = false;
  success3 = false;
  success4 = false;
  startPage: number;
  paginationLimit: number;
  showmore = true;
  showless = false;
  seconds: any;
  size: number;
  step1 = true;
  step2 = false;
  step3 = false;
  step4 = false;
  step5 = false;
  final = false;
  otp_form = false;
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

  handeOtpChange(value: string[]): void {
    console.log(value);
  }

  handleFillEvent(value: string): void {
    console.log(value);
  }

  private stepper: Stepper;

  city = [
    {
      name: 'Mumbai',
      img: 'assets/mumbai.png',
    },
    {
      name: 'Pune',
      img: 'assets/pune.png',
    },
    {
      name: 'Banglore',
      img: 'assets/banglore.png',
    },
  ];

  brand = [
    {
      name: 'Hero',
      img: 'assets/hero.png',
    },
    {
      name: 'Honda',
      img: 'assets/honda.png',
    },
    {
      name: 'Bajaj',
      img: 'assets/bajaj.png',
    },

    {
      name: 'TVS',
      img: 'assets/tvs.png',
    },
    {
      name: 'Suzuki',
      img: 'assets/suzuki.png',
    },
  ];

  model = [
    'Acriva',
    'Shine',
    'Dio',
    'Aviator',
    'Unicorn',
    'Acriva',
    'Shine',
    'Dio',
    'Aviator',
    'Unicorn',
    'Acriva',
    'Shine',
    'Dio',
    'Aviator',
    'Unicorn',
    'Acriva',
    'Shine',
    'Dio',
    'Aviator',
    'Unicorn',
    'Acriva',
    'Shine',
    'Dio',
    'Aviator',
    'Unicorn',
  ];

  variant = ['SSL110', '3G', 'SSL120', '5G', 'SSL120', 'DLX125'];
  year = [
    '2021',
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
    '2015',
    '2014',
    '2013',
    '2012',
    '2011',
    '2010',
  ];

  next() {
    this.stepper.next();
  }
  onSubmit() {
    return false;
  }
  onCity(cityname: any) {
    this.city_name = cityname;
    this.stepper.next();
    this.success = true;
    this.step1 = false;
    if (this.success1 == false) {
      this.step2 = true;
    }
  }
  onBrand(brandname: any) {
    this.brand_name = brandname;
    this.stepper.next();
    this.success1 = true;
    this.step2 = false;
    if (this.success2 == false) {
      this.step3 = true;
    }
  }
  onModel(modelname: any) {
    this.model_name = modelname;
    this.stepper.next();
    this.success2 = true;
    this.step3 = false;
    if (this.success3 == false) {
      this.step4 = true;
    }
  }
  onVariant(variantname: any) {
    this.variant_name = variantname;
    this.stepper.next();
    this.success3 = true;
    this.step4 = false;
    if (this.success4 == false) {
      this.step5 = true;
    }
  }
  onYear(year: any) {
    this.year_name = year;

    this.success4 = true;
    this.step5 = false;
    this.final = true;
  }

  showMoreItems() {
    this.paginationLimit = this.paginationLimit + this.size;
    this.showless = true;
    this.showmore = false;
  }
  showLessItems() {
    this.paginationLimit = this.paginationLimit - this.size;
    this.showless = false;
    this.showmore = true;
  }
  update_time() {
    let counter = 60;

    const interval = setInterval(() => {
      this.seconds = counter;
      console.log(counter);
      counter--;

      if (counter < 0) {
        clearInterval(interval);
      }
    }, 1000);
  }
  getQuotation() {
    this.otp_form = true;
    console.log(this.otp_form);
    this.update_time();
  }

  constructor() {}

  ngOnInit(): void {
    this.stepper = new Stepper(document.querySelector('#stepper1')!, {
      linear: false,
      animation: true,
    });
    this.paginationLimit = 10;
    this.startPage = 0;
    this.size = this.model.length - 10;
  }
}
