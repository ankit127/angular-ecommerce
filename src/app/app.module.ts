import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductServiceService } from './Service/product-service.service';
import { SearchComponent } from './Components/search/search.component';
import { CartStatusComponent } from './Components/cart-status/cart-status.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CartDetailsComponent } from './Components/cart-details/cart-details.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SearchComponent,
    CartStatusComponent,
    ProductDetailsComponent,
    CartDetailsComponent,
    CheckoutComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule  
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
