import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SiteComponent } from './site/site.component';
import { HeaderComponent } from './site/header/header.component';
import { CheckoutComponent } from './site/checkout/checkout.component';
import { CatalogueComponent } from './site/catalogue/catalogue.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatalogueProductComponent } from './site/catalogue/catalogue-product/catalogue-product.component';

const appRoutes: Routes = [
  { path: 'home', component: SiteComponent },
  { path: 'checkout', component: CheckoutComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    HeaderComponent,
    CheckoutComponent,
    CatalogueComponent,
    CatalogueProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
          
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
