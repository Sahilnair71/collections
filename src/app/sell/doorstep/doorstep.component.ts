import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doorstep',
  templateUrl: './doorstep.component.html',
  styleUrls: ['./doorstep.component.css'],
})
export class DoorstepComponent implements OnInit {
  constructor() {}
  date_value: any;

  ngOnInit(): void {}

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
}
