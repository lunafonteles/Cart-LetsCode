import { Product } from './../../model/product';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cart: number = 0;
  products: number = 0;

  static gameSearch = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  search(input: any) {
    HeaderComponent.gameSearch.emit(input.value);
    }
  }

