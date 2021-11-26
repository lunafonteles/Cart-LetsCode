import { Product } from './../model/product';
import { ProductDBService } from './../product-db.service';
import { HeaderComponent } from './header/header.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent {

  filterGames: Product[] = [];

  constructor() {
    HeaderComponent.gameSearch.subscribe(filter => {this.applyFilter(filter)})
  }

  applyFilter(filter: string) {
    this.filterGames = ProductDBService.gamesCatalogue.filter(
      game => { return game.name.toLowerCase().includes(filter.toLowerCase()) });
    console.log(filter+" "+this.filterGames.length);
    }
  }
