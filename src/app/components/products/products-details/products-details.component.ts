import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsInterface } from 'src/app/interfaces/product-interface';
import { ProductsListService } from 'src/app/services/products-list.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css'],
})
export class ProductsDetailsComponent implements OnInit {
  targetProduct: ProductsInterface | undefined = undefined;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsListService
  ) {}

  ngOnInit() {
    let currentProductId = this.route.snapshot.params['id'];
    this.targetProduct = this.productsService.getOneProduct(+currentProductId);
  }

  deleteProduct(pId: number): void {
    this.productsService.deleteOneProduct(pId);
  }
}
