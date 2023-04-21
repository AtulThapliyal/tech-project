import { Component, OnInit } from "@angular/core";
import{api_service} from "../service/api_service"

@Component({
    selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class pokemon_component implements OnInit{
    poke : any= [];
    constructor(private api: api_service){
        
    }

    ngOnInit(): void {
        this.api.get_data().subscribe(data => {
            this.poke = data.results
            console.log(data)
        })
    }
}