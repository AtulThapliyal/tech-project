import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.html',
  styleUrls: ['./shopping.css']
})
export class ShoppingComponent {
  constructor(){
  }
  shopping:any = ["ffdsgfds","hjfjgf"]

  add_item(item:string){
    this.shopping.push(item)
  }

  

}
