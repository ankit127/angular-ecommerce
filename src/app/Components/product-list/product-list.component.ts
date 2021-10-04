import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartServiceService } from 'src/app/Service/cart-service.service';
import { ProductServiceService } from 'src/app/Service/product-service.service';

@Component({
  selector: 'app-product-list',
  //templateUrl: './product-list.component.html',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product: Product = new Product;

  title: string | any;
  name: string | any;
  todoArray: any;
  category_id: string | any; 
  _id: string | any;
  searchMode: boolean | any;
  todo : any;
  
  
  constructor(private productService: ProductServiceService,
              private route: ActivatedRoute,
              private router: Router,
              private cartService: CartServiceService,
              private SpinnerService: NgxSpinnerService) { 

                
              }

  ngOnInit(): void {
    
     this.route.paramMap.subscribe(() => {

      this.fetch();
                
    });
      
   
  }
  
  fetch() {
     
     this.searchMode = this.route.snapshot.paramMap.has('keyword');
     
     if(this.searchMode){
      
       this.handleSearchProducts();
       
     }
     else{
     
           this.handleListProducts();
           
        }

     
  }
  
  save() {
    this.productService.postData(this.title,this.name).subscribe(res => {
      alert(res.message);
      this.fetch1()
    },error => {
      alert('Something went wrong');
    })
  }
  
  fetch1(){
    this.productService.fetchTodo().subscribe(res => {
      this.todoArray = res.products;
    })
  }

  handleListProducts(){
   
    const category_id: boolean = this.route.snapshot.paramMap.has('category_id');

    if (category_id) {
      // get the "id" param string. convert string to a number using the "+" symbol
     this.category_id = this.route.snapshot.paramMap.get('category_id');
    }
    else {
      // not category id available ... default to category id 1
      this.category_id = 1;
    }
    
    //this.category_id = this.route.snapshot.paramMap.get('category_id');
    console.log(this.category_id);
    this.productService.fetchTodos(this.category_id).subscribe(res => {
      this.todoArray = res.products;
    })
  }

  handleSearchProducts(){

    const theKeyword: string | any = this.route.snapshot.paramMap.get('keyword');

     this.productService.searchProducts(theKeyword).subscribe(res => {
      this.todoArray = res.products;
    });
  }

  addToCart(todo: any){
     console.log(`adding to product: name:${todo.name},unitPrice:${todo.unit_price},id:${todo.my_id}`);
     console.log("=========================================================================");  
        const theCartItem = new CartItem(todo);
       
        this.cartService.addToCart(theCartItem);

  }
  }
  

