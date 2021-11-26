import { Product } from './../../../model/product';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-catalogue-product',
  templateUrl: './catalogue-product.component.html',
  styleUrls: ['./catalogue-product.component.css']
})
export class CatalogueProductComponent implements OnInit {

  @Output() addCartBt = new EventEmitter();
  @Input() product: Product = new Product();

  baseURL: string = "../assets/";

  constructor() { }

  ngOnInit(): void {
  }

  getData(event: any) {
    this.addCartBt.emit(event);
    }

}
