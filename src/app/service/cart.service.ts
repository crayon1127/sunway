import { Injectable } from '@angular/core';

@Injectable({
  providedIn:"root"
})
export class CartService {
  items = [];

  //添加购物车
  addToCart(product) {
    const has = this.items.some(curr => curr.id == product.id)
      if(has){
        this.items = this.items.filter(curr => {
          if (curr.id == product.id)
            curr.number += 1
          return true
        })
      } else {
        this.items.push(product)
      }
      window.alert('添加成功')
      console.log("购物车内：", this.items)
    }
  
  //获取购物车数据
  getItems() {
    return this.items;
  }

  //清空购物车
  clearCart() {
    this.items = [];
    return this.items;
  }
}