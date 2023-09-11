import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokemonInterface} from "./pokemon.interface";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<PokemonInterface[]> {
    return this.http.get<PokemonInterface[]>(' http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=getAll')
  }

  fetchOne(id: any):Observable<PokemonInterface> {
    return this.http.get<PokemonInterface>('http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=getById&id='+id)
  }

}
