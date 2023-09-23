import { Component } from '@angular/core';
import { ProductsInterface } from 'src/app/interfaces/product-interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  targetProduct: ProductsInterface | undefined = undefined;
  setTargetProduct(event: ProductsInterface): void {
    this.targetProduct = event;
  }
}
