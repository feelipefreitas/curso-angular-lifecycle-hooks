import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges {

  @Input() texto: string = '';
  @Input() numero: number = 0;
  @Input() booleano: boolean = false;
  @Input() person: any = {};
  @Input() personName: string = '';
  @Input() people: string[] = [];

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges changes', changes);
  }

  updateTexto() {
    this.texto = 'CHILD';
  }
}
