import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-shopingcart',
  templateUrl: './shopingcart.component.html',
  styleUrls: ['./shopingcart.component.css']
})
export class ShopingcartComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.viewShop().subscribe(
      (data)=>{
        this.shopData=data
      }
    )
  }

  shopData:any =[]

  ngOnInit(): void {
  }

}
