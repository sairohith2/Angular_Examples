import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
    
  products=[
    {
      id: 1,
      name: 'Nike React Infinity Run Flyknit',
      description:  "Printing and typesetting industry",
      brand: "Nike",
      gender: "Men",
      category: "Running",
      size: [2,3,4,5,6],
      color: ['white','black', 'gray'],
      price: 160,
      items_left: 3,
      // image: "https://www.google.com/search?sca_esv=cf26ac7335e7e159&sxsrf=ADLYWIJex89X8MOtRWPi1i-DglB1vL29DA:1736359759810&q=men%27s+nike+shoes&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWxyMMuf0D-HOMEpzq2zertRy7G-dme1ONMLTCBvZzSliUAtuJwXTPBVWQOpeBsM3fmFL5Lqp-XZLVDIgYrCqvP087-7Bp8xz7QxmLIKRCCY1IFP5gYbsF1Oog9A9FJX4nYEFlx_gWIkrWVx8LXtzWTXT_DMffDStrdos-OW9MtRABwErRQhv8lcBIwnqz9ehZ308Nxw&sa=X&ved=2ahUKEwjh9b2V3OaKAxWDLtAFHTJENmgQtKgLegQIExAB&biw=1280&bih=585&dpr=1.5#vhid=QjONEWMab9rC4M&vssid=mosaic",
      slug: "nike-react-miler"
    }
  ]
}
