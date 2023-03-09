import { Component } from '@angular/core';
import { PokeApiServiceService } from './../../service/poke-api-service.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent {

  private setAllPokemons: any;
  public getAllPokemons: any;

  constructor (
    private pokeApiServiceService: PokeApiServiceService
  ) {}

  ngOnInit(): void {
    this.pokeApiServiceService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = res.setAllPokemons;
      }
    );
  }

  public getSearch(value: string){
    const filter = this.setAllPokemons.filter( (res: any) => {
      return !res.name.indexOf(value.toLowerCase())
    });

    this.getAllPokemons = filter;
  }
}
