import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  texto: string = 'TESTE';
  numero: number = 0;
  booleano: boolean = false;
  person: any = {
    name: 'Joao',
    age: 20
  };
  people: string[] = [ 'lucas', 'laura', 'maria' ];

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
