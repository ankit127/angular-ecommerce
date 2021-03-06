import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { CartServiceService } from 'src/app/Service/cart-service.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalprice: number = 0;
  totalquantity: number = 0;

  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }

  listCartDetails(){
       
    this.cartItems = this.cartService.cartItems;

     this.cartService.totalPrice.subscribe(
      data => this.totalprice = data
    );

    this.cartService.totalQuantity.subscribe(
      data => this.totalquantity = data
    );

   this.cartService.computeCartTotals();

  }
  incrementQuantity(theCartItem: CartItem) {
    this.cartService.incrementQuantity(theCartItem);
  }

  decrementQuantity(theCartItem: CartItem) {
    this.cartService.decrementQuantity(theCartItem);
  }
  

  remove(theCartItem: CartItem) {
    this.cartService.remove(theCartItem);
  }

  

}
