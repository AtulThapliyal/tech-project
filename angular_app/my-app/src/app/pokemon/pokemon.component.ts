import { Component, OnInit } from "@angular/core";
import{api_service} from "../service/api_service"

@Component({
    selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class pokemon_component implements OnInit{
    poke : any= [];
    mess = "";

    constructor(private api: api_service){
        
    }

    ngOnInit(): void {
        // this.api.add_driver().subscribe(data => {
        //     console.log(data)
        // })
    }

    public add_vehicle(name: string,size: string, brand: string,model: string){

        this.api.add_vehicle(name,size, brand,model).subscribe(data => {
            this.mess= data.message;
            
            console.log(data)
        })
    }
}