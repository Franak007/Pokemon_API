import { Component } from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {NgForm} from "@angular/forms";
import {PokemonInterface} from "../pokemon.interface";
import {Observable} from "rxjs";

@Component({
  selector: 'app-pokemon-add-form',
  templateUrl: './pokemon-add-form.component.html',
  styleUrls: ['./pokemon-add-form.component.css']
})
export class PokemonAddFormComponent {

  pokemons:PokemonInterface[] = [];

  constructor(private pokemonService: PokemonService){ }

  onSubmit(form: NgForm): void{
    console.log(form.value);
    // this.pokemonService.addPokemon(form.value);
    // console.log(this.pokemonService.addPokemon(form.value));
    this.pokemonService.addPokemon(form.value).subscribe(requestMessage =>{
      console.log(requestMessage);
    })
  }

}
