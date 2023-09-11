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
  onePokemon: PokemonInterface | undefined;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit() {

    this.pokemonService.fetchAll().subscribe(data => {

      this.pokemons = data;

    });

  }

  getOnePokemon(id: any): void {
    this.pokemonService.fetchOne(id).subscribe(pokemon => {
      this.onePokemon = pokemon;

    })
  }
}
