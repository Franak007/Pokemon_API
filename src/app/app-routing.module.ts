import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PokemonPageComponent} from "./pokemon-page/pokemon-page.component";
import {PokemonAddFormComponent} from "./pokemon-add-form/pokemon-add-form.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pokemon', component: PokemonPageComponent},
  {path: 'addPokemon', component: PokemonAddFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
