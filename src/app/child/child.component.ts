import { AfterContentChecked, AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SubChildComponent } from '../sub-child/sub-child.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked {

  @ContentChild(SubChildComponent) subChildComponent!: SubChildComponent;

  @Input() texto: string = '';
  @Input() numero: number = 0;
  @Input() booleano: boolean = false;
  @Input() person: any = {};
  @Input() personName: string = '';
  @Input() people: string[] = [];

  constructor() {
    console.log('constructor ChildComponent');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges ChildComponent');
  }

  ngOnInit(): void {
    console.log('ngOnInit ChildComponent');
    console.log('subChildComponent ', this.subChildComponent);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck ChildComponent');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit ChildComponent');
    console.log('subChildComponent ', this.subChildComponent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked ChildComponent');
  }

  updateTexto() {
    this.texto = 'CHILD';
  }
}
