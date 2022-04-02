import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonlist: Pokemon[]= [{

    nombre: 'charmander',
    pc: 500
  }, {
    nombre: 'Bulbasor',
    pc: 600
  }, {
    nombre: 'Squirtle',
    pc: 800
  }];
  get obtenerLista(){
    return [...this.pokemonlist];
  }
  constructor() { }
  agregarPokemon(nuevoPokemon: Pokemon){
    this.pokemonlist.push(nuevoPokemon);
  }
}
