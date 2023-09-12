import {Component, OnInit} from '@angular/core';
import {PokemonInterface} from "../pokemon.interface";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {

  pokemons: PokemonInterface[] = [];
  pokemonSelected: PokemonInterface | undefined;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.pokemonService.getAll().subscribe(data => {
      console.table(data);
      this.pokemons = data;

    });
  }

  getOnePokemon(id: number): void {
    this.pokemonService.getOne(id).subscribe(pokemonResult => {
      this.pokemonSelected = pokemonResult;

    })
  }

  suppressPokemon(id: number): void {
    console.log(id);
    this.pokemonService.deletePokemon(id).subscribe(deleteResult => {
      console.log(deleteResult);

    });
  }
}
