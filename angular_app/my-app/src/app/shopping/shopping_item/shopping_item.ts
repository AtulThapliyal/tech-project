import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-shopping_item',
  templateUrl: './shopping_item.html',
  styleUrls: ['./shopping_item.scss']
})

export class Shopping_itemsComponent{

  @Input()
  inputdata:string = ""
}