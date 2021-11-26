import { PersistenceService } from './../../persistence.service';
import { Component } from '@angular/core';
import { ProductDBService } from 'src/app/product-db.service';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {

  baseURL: string = "../assets/"
  gamesCatalogue = ProductDBService.gamesCatalogue;
  persistence = PersistenceService;

  constructor() { }

}
