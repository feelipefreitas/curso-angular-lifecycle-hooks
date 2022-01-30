import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-child',
  templateUrl: './sub-child.component.html',
  styleUrls: ['./sub-child.component.scss']
})
export class SubChildComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit SubChildComponent');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck SubChildComponent');
  }
}
