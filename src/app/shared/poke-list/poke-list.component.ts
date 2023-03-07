import { Component } from '@angular/core';
import { PokeApiServiceService } from './../../service/poke-api-service.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent {

  public getAllPokemons: any;

  constructor (
    private pokeApiServiceService: PokeApiServiceService
  ) {}

  ngOnInit(): void {
    this.pokeApiServiceService.apiListAllPokemons.subscribe(
      res => {
        this.getAllPokemons = res.results;
      }
    );
  }
}
