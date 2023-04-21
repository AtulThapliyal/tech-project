import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';

@Injectable(
    {
        providedIn:'root' //to connect with server to get and put data on server 

    }
)
export class api_service{
    constructor(private http: HttpClient){

    }

    public get_data():Observable<any>{ 
        return this.http.get(API_URL) 
    }
}
