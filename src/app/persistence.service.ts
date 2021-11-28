import { Register } from './model/register';
import { Product } from './model/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  static cart: Product[] = [];
  static register: Register = new Register('','','','');
  
  constructor() {
  }

   static init () {
    PersistenceService.cart = JSON.parse(localStorage.getItem("item") ?? "[]");
    PersistenceService.register = JSON.parse(localStorage.getItem("register") ?? "[]");
   }

  static removeFromCart(product: Product) {
    let index = this.cart.indexOf(product);
    this.cart.splice(index , 1);
    this.updateFromLocalStorage();
    console.log(this.cart)
  }

  static addToCart(product: Product) {
    this.cart.push(product);
    console.log(this.cart);
    this.updateFromLocalStorage();
  }

  static updateFromLocalStorage() {
    localStorage.setItem("item", JSON.stringify(this.cart)); 
  }

  static updateRegisterFromLocalStorage(register: Register) {
    localStorage.setItem("register", JSON.stringify(register)); 
  }

}

PersistenceService.init();
