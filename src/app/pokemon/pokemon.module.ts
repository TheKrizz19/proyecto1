import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PokemonComponent,
    MainComponent
  ],
  exports:[
MainComponent,
PokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PokemonModule { }
