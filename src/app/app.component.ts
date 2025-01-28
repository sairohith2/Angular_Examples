import { Component, ElementRef,  ViewChildren , QueryList} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-children';

   @ViewChildren('inputE1') inputElement: QueryList<ElementRef>;

  show(){
    this.inputElement.forEach((el) => {
      console.log(el.nativeElement);
    })
    console.log();
  }
}
