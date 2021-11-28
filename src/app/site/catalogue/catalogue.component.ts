import { Component } from '@angular/core';
import { ProductDBService } from 'src/app/product-db.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {

  baseURL: string = "../assets/"
  filteredGames = ProductDBService.gamesCatalogue;

  constructor() {
    HeaderComponent.gameSearch.subscribe(this.applyFilter);
   }

   applyFilter(filter: string){
    this.filteredGames = ProductDBService.gamesCatalogue.filter(
      game => game.name.toLowerCase().includes(filter.toLowerCase()));
      console.log(this.filteredGames);
   }

}
