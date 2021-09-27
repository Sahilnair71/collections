import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-physical',
  templateUrl: './physical.component.html',
  styleUrls: ['./physical.component.css'],
})
export class PhysicalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  date_value: any;
  show_val: any;
  show_selected(data: any) {
    this.show_val = data;
  }
  date_selected(data: any) {
    this.date_value = data;
  }

  dates = [
    {
      month: 'Jan',
      day: 22,
    },
    {
      month: 'Jan',
      day: 23,
    },
    {
      month: 'Jan',
      day: 24,
    },
    {
      month: 'Jan',
      day: 25,
    },

    {
      month: 'Jan',
      day: 26,
    },
    {
      month: 'Jan',
      day: 27,
    },
  ];

  showrooms = [
    {
      city: 'Avvai Nagar',
      info:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
      code: '635123',
    },
    {
      city: 'Avvai Nagar',
      info:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
      code: '635123',
    },
    {
      city: 'Avvai Nagar',
      info:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
      code: '635123',
    },
  ];
}
