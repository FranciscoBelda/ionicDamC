import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides2',
  templateUrl: './slides2.page.html',
  styleUrls: ['./slides2.page.scss'],
})
export class Slides2Page implements OnInit {

  options = {
    slidesPerView: 4.5,
    slidesOffsetBefore: 0,
    separator: 10
  }
  constructor() { }

  ngOnInit() {
  }

}
