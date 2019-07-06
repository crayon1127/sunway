import { Component, OnInit } from '@angular/core';
import { CartService } from './../service/cart.service'

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  public cartList=[];
  constructor(public cart:CartService) { }

  ngOnInit() {
    this.cart.getItems()
    this.cartList
    console.log(this.cart.items)
    this.cartList=this.cart.items;
    
  }
  
}
