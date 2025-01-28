import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class containerComponent {
  // name= "Rohith";
  // addToCart: number =0;
  //  product = {
  //   name: 'iphone 14',
  //   price: 989,
  //   color: 'white',
  //   discount: 8.5,
  //   instock: 5,
  //   pImage:"/assets/images/iphone.jpeg"
  //  }

  //  getDiscountedPrice() {
  //    return (this.product.price)-(this.product.price * this.product.discount / 100 )
  //  }

  //  onNameChange(event: any){
  //   // this.name = event.target.value;
  //  }

  //  decrementCartValue(){
  //   if(this.addToCart>0){
  //   this.addToCart--;
  //   }
  //  }

  //  incrementCartValue(){
  //   if(this.addToCart < this.product.instock){
  //   this.addToCart++;
  //   }
  //  }

  listofstring: String[] = ['Mark', 'Rohit','Sai','Prasad'];
}
