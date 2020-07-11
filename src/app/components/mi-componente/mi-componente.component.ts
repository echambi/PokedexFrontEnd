import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';
import { Global } from 'src/app/services/global';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html',
    providers: [PokemonService]
})

export class MiComponente implements OnInit {
    public pokemons: Pokemon[];
    public url: string;

    public titulo: string;
    public spAttack: number;
    public textBuscar: string;
 
    constructor(
        
        private _pokemonServices: PokemonService
        // console.log('mi-componente cargado!');
        
    ){
        this.url = Global.url;

        this.titulo = "saur";
        this.spAttack = 10;
        this.textBuscar = "";
    }

    ngOnInit(){
        // // console.log(this._pokemonServices.pruebas());
        // this._pokemonServices.getPokemons().subscribe(
        //     response =>{
        //         // debugger;
        //         console.log(response.pokemons);
        //         this.pokemons = response.pokemons;
        //         // var entBase = response.pokemons[1].base;
        //         // console.log(entBase["Sp. Attack"]);
        //     },
        //     error =>{
        //         console.log(error);
        //     }
        // );
        var textPokemon = this.titulo;
        
        if (textPokemon.length>0){
            this._pokemonServices.searchPokemons(textPokemon).subscribe(
                response =>{
                    // debugger;
                    console.log(response.pokemons);
                    this.pokemons = response.pokemons;
                    // var entBase = response.pokemons[1].base;
                    // console.log(entBase["Sp. Attack"]);
                },
                error =>{
                    console.log(error);
                }
            );
        }else{
            this._pokemonServices.getPokemons().subscribe(
                response =>{
                    // debugger;
                    console.log(response.pokemons);
                    this.pokemons = response.pokemons;
                    // var entBase = response.pokemons[1].base;
                    // console.log(entBase["Sp. Attack"]);
                },
                error =>{
                    console.log(error);
                }
            );
        }
    }

    goSearch(){
        // alert(this.titulo);
        var textPokemon = this.titulo;
        
        if (textPokemon.length>0){
            this._pokemonServices.searchPokemons(textPokemon).subscribe(
                response =>{
                    // debugger;
                    console.log(response.pokemons);
                    this.pokemons = response.pokemons;
                    // var entBase = response.pokemons[1].base;
                    // console.log(entBase["Sp. Attack"]);
                },
                error =>{
                    console.log(error);
                }
            );
        }else{
            this._pokemonServices.getPokemons().subscribe(
                response =>{
                    // debugger;
                    console.log(response.pokemons);
                    this.pokemons = response.pokemons;
                    // var entBase = response.pokemons[1].base;
                    // console.log(entBase["Sp. Attack"]);
                },
                error =>{
                    console.log(error);
                }
            );
        }

        
    }
}