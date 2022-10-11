import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShopingcartComponent } from './shopingcart/shopingcart.component';
import { HttpClientModule } from '@angular/common/http'

const link:Routes=[
  {
    path:"",component:ShopingcartComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShopingcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(link),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
