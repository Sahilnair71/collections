import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.css'],
})
export class BikeDetailsComponent implements OnInit {
  isChecked: any;
  ishown = false;
  startPage: number;
  paginationLimit: number;
  showmore = true;
  showless = false;
  size: number;

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
  checkbox_brand = [
    {
      brand: 'KTM(05)',
      id: 1,
      value: ['All(10)', 'RC 200(5)', 'Duke(5)'],
    },
    {
      brand: 'Royal Enfield(03)',
      id: 1,
      value: ['All(10)', 'RC 200(5)', 'Duke(5)', '220'],
    },
    {
      brand: 'Honda(25)',
      id: 1,
      value: ['All(10)', 'RC 200(5)', 'Duke(5)'],
    },
    {
      brand: 'Bajaj(15)',
      id: 1,
      value: ['All(10)', 'RC 200(5)', 'Duke(5)'],
    },
    {
      brand: 'Hero(20)',
      id: 1,
      value: ['All(10)', 'RC 200(5)', 'Duke(5)'],
    },
    {
      brand: 'TVS(30)',
      id: 1,
      value: ['All(10)', 'RC 200(5)', 'Duke(5)'],
    },
    {
      brand: 'Piaggio(12)',
      id: 1,
      value: ['All(10)', 'RC 200(5)', 'Duke(5)'],
    },
    {
      brand: 'KTM(05)',
      id: 1,
      value: ['All(10)', 'RC 200(5)', 'Duke(5)'],
    },
    {
      brand: 'KTM(05)',
      id: 1,
      value: ['All(10)', 'RC 200(5)', 'Duke(5)'],
    },
    {
      brand: 'KTM(05)',
      id: 1,
      value: ['All(10)', 'RC 200(5)', 'Duke(5)'],
    },
    {
      brand: 'KTM(05)',
      id: 1,
      value: ['All(10)', 'RC 200(5)', 'Duke(5)'],
    },

    {
      brand: 'KTM(05)',
      id: 1,
      value: ['All(10)', 'RC 200(5)', 'Duke(5)'],
    },
    {
      brand: 'KTM(05)',
      id: 1,
      value: ['All(10)', 'RC 200(5)', 'Duke(5)'],
    },
    {
      brand: 'Bajaj(15)',
      id: 1,
      value: ['All(10)', 'RC 200(5)', 'Duke(5)'],
    },
    {
      brand: 'Hero(20)',
      id: 1,
      value: ['All(10)', 'RC 200(5)', 'Duke(5)'],
    },
    {
      brand: 'TVS(30)',
      id: 1,
      value: ['All(10)', 'RC 200(5)', 'Duke(5)'],
    },
    {
      brand: 'Piaggio(12)',
      id: 1,
      value: ['All(10)', 'RC 200(5)', 'Duke(5)'],
    },
  ];
  changed(item: any) {
    this.isChecked = item;
    console.log(this.isChecked);
    this.ishown = !this.ishown;
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
  ngOnInit(): void {
    this.paginationLimit = 10;
    this.startPage = 0;
    this.size = this.checkbox_brand.length - 10;
  }
}
