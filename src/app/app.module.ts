import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { containerComponent } from './header/container/container.component';
import { SearchComponent } from './header/container/search/search.component';
import { FormsModule} from '@angular/forms';
import { ProductlistComponent } from './header/container/productlist/productlist.component';
import { ProductComponent } from './header/container/productlist/product/product.component';
import { FilterComponent } from './header/container/productlist/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    containerComponent,
    SearchComponent,
    ProductlistComponent,
    ProductComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
