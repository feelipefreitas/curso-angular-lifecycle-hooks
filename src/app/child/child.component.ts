import { ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck {

  @Input() texto: string = '';
  @Input() numero: number = 0;
  @Input() booleano: boolean = false;
  @Input() person: any = {};
  @Input() personName: string = '';
  @Input() people: string[] = [];

  constructor() {
    console.log('constructor ChildComponent');
    console.log('texto', this.texto);
    console.log('numero', this.numero);
    console.log('booleano', this.booleano);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges ChildComponent changes', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit ChildComponent');
    console.log('texto', this.texto);
    console.log('numero', this.numero);
    console.log('booleano', this.booleano);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck ChildComponent');
  }

  updateTexto() {
    this.texto = 'CHILD';
  }
}
