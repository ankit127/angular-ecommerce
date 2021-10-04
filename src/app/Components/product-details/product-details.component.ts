import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { CartServiceService } from 'src/app/Service/cart-service.service';
import { ProductServiceService } from 'src/app/Service/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  todo: any;

  constructor(private productService: ProductServiceService,
              private route: ActivatedRoute,
              private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductList();
    })
  }

  handleProductList(){
      const my_id: string | any = this.route.snapshot.paramMap.get('my_id');
      
      this.productService.getProduct(my_id).subscribe( res => {
        this.todo = res.products; 
      })
  }

  addToCart(to: any){
    
       const theCartItem = new CartItem(to);
      
       this.cartService.addToCart(theCartItem);

 }

}
