import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping';
import { Shopping_itemsComponent } from './shopping/shopping_item/shopping_item';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    Shopping_itemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
