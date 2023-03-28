import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiServiceService } from './../../service/poke-api-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiServiceService: PokeApiServiceService
  ){}

  ngOnInit(): void {
    this.getPokemon;
  }

  get getPokemon() {
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.pokeApiServiceService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiServiceService.apiGetPokemons(`${this.urlName}/${id}`)

    return forkJoin([pokemon, name]).subscribe(
      res => {
      this.pokemon = res;
      }
    );
  }
}
