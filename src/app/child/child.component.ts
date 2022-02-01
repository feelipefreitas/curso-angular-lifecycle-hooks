import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, KeyValueDiffer, KeyValueDiffers, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { SubChildComponent } from '../sub-child/sub-child.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements 
  OnChanges, 
  OnInit, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy {
    
  showText = false;
  differ!: KeyValueDiffer<string, any>;

  @ContentChild(SubChildComponent) subChildComponent!: SubChildComponent;
  @ViewChild('texto') textoEl!: ElementRef;
  @ViewChild('textoAssincrono') textoAssincronoEl!: ElementRef;

  @Input() texto: string = '';
  @Input() numero: number = 0;
  @Input() booleano: boolean = false;
  @Input() person: any = {};
  @Input() personName: string = '';
  @Input() people: string[] = [];

  constructor(private _ngZone: NgZone, private _differsService: KeyValueDiffers) {
    console.log('constructor ChildComponent');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges ChildComponent');
  }

  ngOnInit(): void {
    console.log('ngOnInit ChildComponent');
    console.log('subChildComponent ', this.subChildComponent);
    console.log('textoEl', this.textoEl);

    this._ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        console.log('ngZone');
      }, 5000);
    });

    setTimeout(() => {
      console.log('setTimeout');
      
      this.showText = true;
    }, 3000);

    this.differ = this._differsService.find(this.people).create();
    console.log('differ', this.differ);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck ChildComponent');

    if (this.differ) {
      const changes = this.differ.diff(this.people);
      console.log('changes', changes);

      if (changes) {
        changes.forEachChangedItem((r) => {
          console.log('r', r);
        });
      }
    }
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit ChildComponent');
    console.log('subChildComponent ', this.subChildComponent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked ChildComponent');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit ChildComponent');
    console.log('textoEl', this.textoEl);
    console.log('textoAssincronoEl', this.textoAssincronoEl);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked -------> ChildComponent');
    console.log('textoAssincronoEl', this.textoAssincronoEl);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy ChildComponent');
  }

  updateTexto() {
    this.texto = 'CHILD';
  }
}
