import { Product } from './../model/product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent {

  filterGames: Product[] = [];

  constructor() {
  }

  }
