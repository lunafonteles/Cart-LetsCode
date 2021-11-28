import { Product } from './../../../model/product';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { PersistenceService } from 'src/app/persistence.service';

@Component({
  selector: 'app-catalogue-product',
  templateUrl: './catalogue-product.component.html',
  styleUrls: ['./catalogue-product.component.css']
})
export class CatalogueProductComponent {

  @Input() product: Product = new Product();

  baseURL: string = "../assets/";

  constructor() { }

  persistence = PersistenceService;

}
