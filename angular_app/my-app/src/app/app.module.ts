import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping';
import { Shopping_itemsComponent } from './shopping/shopping_item/shopping_item';
import { pokemon_component } from './pokemon/pokemon.component';
import { api_service } from './service/api_service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    Shopping_itemsComponent,
    pokemon_component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [api_service, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
