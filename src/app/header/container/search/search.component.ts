import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: String = '';

updateSearchType(Event: any){
  this.searchText= Event.target.value;
}
}