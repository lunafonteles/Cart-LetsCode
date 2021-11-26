import { Product } from 'src/app/model/product';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDBService {


  static gamesCatalogue: Product[] = [
    {id: 1, name: "Final Fantasy", price: 180, image: "ffx2.jpg"},
    {id: 2, name: "Kingdom Hearts", price: 140, image: "kh.jpg"},
    {id: 3, name: "Harry Potter", price: 500, image: "HP.jpg"},
    {id: 4, name: "Horizon", price: 95, image: "horizon.jpg"},
    {id: 5, name: "Donkey Kong", price: 250, image: "DK.jpg"},
    {id: 6, name: "Zelda", price: 360, image: "zelda.jpg"},
    {id: 7, name: "Crash", price: 150, image: "crash.jpg"},
    {id: 8, name: "Spyro", price: 80, image: "spyro.jpg"}]
    

  constructor() { }
}

