import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css'],
})
export class AccordianComponent implements OnInit {
  startPage: number;
  paginationLimit: number;
  showmore = true;
  size: number;

  showless = false;
  constructor() {}

  ngOnInit(): void {
    this.startPage = 0;
    this.paginationLimit = 3;
    this.size = this.data.length - 3;
  }
  data: any = [
    {
      parentName: 'How does your process work?',
      childProperties: [
        { propertyName: 'You can purchase your dream bike in 3 simple steps:' },
        { propertyName: 'Choose your bike:' },
        {
          propertyName:
            'Check out the finest details of thousands of pre-owned bikes on our website. Inspect the features and imperfections of each bike virtually with 360 degree view. Need assistance? Give a call on +91-00 0000 0000',
        },
      ],
    },
    {
      parentName: 'Are all the bikes certified by Company?',
      childProperties: [
        { propertyName: 'Property Three' },
        { propertyName: 'Property Four' },
        { propertyName: 'Property Five' },
      ],
    },
    {
      parentName: 'Can I test ride the bike?',
      childProperties: [
        { propertyName: 'Property Six' },
        { propertyName: 'Property Seven' },
        { propertyName: 'Property Eight' },
      ],
    },
    {
      parentName: 'How does your process work?',
      childProperties: [
        { propertyName: 'You can purchase your dream bike in 3 simple steps:' },
        { propertyName: 'Choose your bike:' },
        {
          propertyName:
            'Check out the finest details of thousands of pre-owned bikes on our website. Inspect the features and imperfections of each bike virtually with 360 degree view. Need assistance? Give a call on +91-00 0000 0000',
        },
      ],
    },
    {
      parentName: 'How does your process work?',
      childProperties: [
        { propertyName: 'You can purchase your dream bike in 3 simple steps:' },
        { propertyName: 'Choose your bike:' },
        {
          propertyName:
            'Check out the finest details of thousands of pre-owned bikes on our website. Inspect the features and imperfections of each bike virtually with 360 degree view. Need assistance? Give a call on +91-00 0000 0000',
        },
      ],
    },
    {
      parentName: 'How does your process work?',
      childProperties: [
        { propertyName: 'You can purchase your dream bike in 3 simple steps:' },
        { propertyName: 'Choose your bike:' },
        {
          propertyName:
            'Check out the finest details of thousands of pre-owned bikes on our website. Inspect the features and imperfections of each bike virtually with 360 degree view. Need assistance? Give a call on +91-00 0000 0000',
        },
      ],
    },
    {
      parentName: 'How does your process work?',
      childProperties: [
        { propertyName: 'You can purchase your dream bike in 3 simple steps:' },
        { propertyName: 'Choose your bike:' },
        {
          propertyName:
            'Check out the finest details of thousands of pre-owned bikes on our website. Inspect the features and imperfections of each bike virtually with 360 degree view. Need assistance? Give a call on +91-00 0000 0000',
        },
      ],
    },
    {
      parentName: 'How does your process work?',
      childProperties: [
        { propertyName: 'You can purchase your dream bike in 3 simple steps:' },
        { propertyName: 'Choose your bike:' },
        {
          propertyName:
            'Check out the finest details of thousands of pre-owned bikes on our website. Inspect the features and imperfections of each bike virtually with 360 degree view. Need assistance? Give a call on +91-00 0000 0000',
        },
      ],
    },
  ];

  toggleAccordian(event: any, index: any) {
    const element = event.target;
    element.classList.toggle('active');
    if (this.data[index].isActive) {
      this.data[index].isActive = false;
    } else {
      this.data[index].isActive = true;
    }
    const panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
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
}
