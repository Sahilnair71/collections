import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
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
}
