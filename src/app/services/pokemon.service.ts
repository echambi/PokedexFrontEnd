import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { Global } from './global';

@Injectable()
export class PokemonService{
    public url:string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    pruebas(){
        return "Soy el servicio Angular";
    }

    getPokemons():Observable<any>{
        return this._http.get(this.url+'pokemons');
    }

    searchPokemons(parametro):Observable<any>{
        return this._http.get(this.url+'searchpk/'+parametro);
    }
}