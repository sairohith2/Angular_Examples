import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-switch';

   tab: string='';

  onInfoClicked(){
    this.tab= 'Info';
  }

  onServiceClicked(){
    this.tab='Service';
  }
  
  onClickPrivacy(){
    this.tab='privacy';
  }

  onClickUser(){
    this.tab = 'User Aggrement';
  }

}
