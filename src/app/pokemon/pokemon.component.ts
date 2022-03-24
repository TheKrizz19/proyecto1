import { Component } from '@angular/core';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  nuevo = {
    nombre: '',
    pc:0
  }


  listaPokemon: Pokemon[] = [{

    nombre: 'charmander',
    pc: 500
  }, {
    nombre: 'Bulbasor',
    pc: 600
  }, {
    nombre: 'Squirtle',
    pc: 800
  }]
  agregar(){
    this.listaPokemon.push(this.nuevo);
    this.nuevo={
      nombre:'',
      pc:0

    }
    console.log(this.listaPokemon)
  }
  
  constructor() { }
}



