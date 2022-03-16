import { Component } from '@angular/core';
import { productListComponent } from './products/product-list.component';

@Component({
  selector: 'app-root',
  template: '<product-list></product-list>'
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
}
