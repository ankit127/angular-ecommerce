import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  

  constructor(private http: HttpClient) { }

   postData(titleVal: string, nameVal: string){
     const obj ={
       title: titleVal,
       name: nameVal
     }
     return this.http.post<{message: string}>('http://localhost:3000/api/product',obj);
   }
   
   fetchTodos(id: string) {
    
    return this.http.get<{message: string, products: []}>('http://localhost:3000/api/products/'+id);
  } 
  
  fetchTodo() {
    
    return this.http.get<{message: string, products: []}>('http://localhost:3000/api/products');
  } 

  searchProducts(theKeyword: string) {
   
    return this.http.get<{message: string, products: []}>('http://localhost:3000/api/search/'+theKeyword);
  }

  getProduct(my_id: string){
    
    return this.http.get<{message: string, products: []}>('http://localhost:3000/api/products/product/'+my_id);
  }
}
