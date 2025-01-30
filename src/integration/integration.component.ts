import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.css']
})
export class IntegrationComponent implements OnInit {
  public data : any;
  public apiurl =  'http://localhost:3000/restaurants';
  constructor(private http : HttpClient){}
  ngOnInit(): void {

      this.fetchdetails();  

  }
  public fetchdetails(){
      this.http.get(this.apiurl).subscribe((res:any) => {
          console.log(res); 
          this.data = res;
      })
  }
}
