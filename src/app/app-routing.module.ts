import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailsComponent } from './Components/cart-details/cart-details.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductListComponent } from './Components/product-list/product-list.component';

const routes: Routes = [
 
 {path: 'search/:keyword', component: ProductListComponent}, 
 {path: 'checkout', component: CheckoutComponent},
 {path: 'products/:category_id', component: ProductListComponent},
 {path: 'products/product/:my_id', component: ProductDetailsComponent},
 {path: 'cart-details', component: CartDetailsComponent},
 {path: 'products', component: ProductListComponent},
 {path: '', redirectTo: '/products', pathMatch: 'full'},
 {path: '**', redirectTo: '/login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
