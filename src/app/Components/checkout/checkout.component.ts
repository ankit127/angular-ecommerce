import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartServiceService } from 'src/app/Service/cart-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup: FormGroup | any;
  submitted = false;

  
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private fb: FormBuilder,
  private cartService: CartServiceService) { }

  ngOnInit(): void {
    
    this.checkoutFormGroup = this.fb.group({
      customer: this.fb.group({
        firstName: ['', [Validators.required,Validators.minLength(2)]],
        lastName: ['', [Validators.required,Validators.minLength(2)]],
        email: ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.{a-z}{2,4}$')]]
      }),
      shippingAddress: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: ['']
      }),
      billingAddress: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: ['']
      }),
      creditCard: this.fb.group({
        cardType: [''],
        nameOnCard: [''],
        cardNumber: [''],
        securityCode: [''],
        expirationMonth: ['']
      })
    });
  }
   
  onSubmit(checkoutFormGroup: FormGroup){
    this.submitted = true;
   
    
    console.log("Handling the submit button");
    console.log(this.checkoutFormGroup.get('customer').value.firstName);
    console.log(this.checkoutFormGroup.get('customer').value.email);


  }

  copyAddreess(event: any){
    if(event.target.checked) {
      this.checkoutFormGroup.controls.billingAddress
         .setValue(this.checkoutFormGroup.controls.shippingAddress.value);
    }
    else{
      this.checkoutFormGroup.controls.billingAddress.reset();
    }
  }

  getFirstName(){ return this.checkoutFormGroup.get('customer.firstName'); }
  getLastName(){ return this.checkoutFormGroup.get('customer.lastName'); }
  getemail(){ return this.checkoutFormGroup.get('customer.email'); }
 
  OrderPlaced(){
    alert("Your Order is place..Thank You!!");
  }
 
}
