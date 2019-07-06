import { Component, OnInit } from '@angular/core';
import { CartService } from './../service/cart.service'

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {


  private list = [
    {id:1,name:'aaa',price:10,number:1},
    {id:2,name:'bbb',price:20,number:1},
    {id:3,name:'ccc',price:30,number:1}
    ];

  constructor(
    public cart:CartService
  ) { }

  ngOnInit() {
  }

  buyShop(item){
    this.cart.addToCart(item)
  }
}
