import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsInterface } from 'src/app/interfaces/product-interface';
import { ProductsListService } from 'src/app/services/products-list.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  constructor(private productsService: ProductsListService) {
    this.productsList = this.productsService.getAllProducts();
  }

  productsList: ProductsInterface[] = [];

  targetProductID: number | null = null;
  targetProduct: ProductsInterface | undefined = undefined;
}
