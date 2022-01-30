import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, DoCheck {
  texto: string = 'TESTE';
  numero: number = 0;
  booleano: boolean = false;
  person: any = {
    name: 'Joao',
    age: 20
  };
  people: string[] = [ 'lucas', 'laura', 'maria' ];

  constructor(private _http: HttpClient) {
    console.log('constructor AppComponent');
  }

  ngOnInit(): void {
    console.log('ngOnInit AppComponent');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck AppComponent');
  }

  updateValues() {
    this.texto = 'ATUALIZADO';
    this.numero = this.numero + 1;
    this.booleano = true;

    this.person.name = 'Carlos';
    // this.person = {};

    // this.people.push('joao');
    this.people = [];
  }
}
