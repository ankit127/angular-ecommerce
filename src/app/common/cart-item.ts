import { Product } from './product';

export class CartItem {

    my_id: string | any;
    name: string | any;
    url: string| any;
    unit_price: string| any;

    quantity: number = 1;
   /*
    constructor(id: string,name: string,url:string,unit_price:number, quantity=1){
        
    }
*/
 
   

    constructor(product: Product) {
        this.my_id = product.my_id;
        this.name = product.name;
        this.url = product.url;
        this.unit_price = product.unit_price;
        this.quantity = 1;
    }

}
