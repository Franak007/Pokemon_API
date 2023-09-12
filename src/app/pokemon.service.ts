import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokemonInterface} from "./pokemon.interface";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<PokemonInterface[]> {
    return this.http.get<PokemonInterface[]>(' http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=getAll');
  }

  getOne(id: number):Observable<PokemonInterface> {
    return this.http.get<PokemonInterface>('http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=getById&id='+id);
  }

  addPokemon(pokemon: PokemonInterface): Observable<string>{
    const header = { 'content-type': 'application/x-www-form-urlencoded'}
    const body = JSON.stringify(pokemon);
    console.log(body);
    return this.http.post<string>('http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=createPokemon&userApi=Franck', body, {'headers' : header});
  }

  deletePokemon(id: number): Observable<string> {
    return this.http.get<string>('http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=deletePokemon&userApi=Franck&id='+id);
  }

}
