import { Component } from '@angular/core';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Final-Project';

    searchOnSite (event: any) {
    if (event == Product.name) {
      alert(Product);
    }
  }
}
