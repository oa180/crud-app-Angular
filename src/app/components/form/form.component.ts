import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsListService } from 'src/app/services/products-list.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(
    private productService: ProductsListService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id'] != 0) {
      this.renderFormFields(this.activatedRoute.snapshot.params['id']);
    }
  }

  productForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(4)]),
    description: new FormControl('', [Validators.required]),
    discountPercentage: new FormControl(0, [Validators.required]),
    stock: new FormControl(0, [Validators.required]),
    brand: new FormControl('', [Validators.required]),
    rating: new FormControl(0),
    category: new FormControl('', [Validators.required]),
    thumbnail: new FormControl('', [Validators.required]),
  });

  saveForm(e: any): void {
    e.preventDefault();

    if (this.activatedRoute.snapshot.params['id'] == 0) {
      this.productService.addNewProduct(this.productForm.value);
    } else {
      console.log('e');
      this.productService.updateProduct(
        this.activatedRoute.snapshot.params['id'],
        this.productForm.value
      );
    }
    this.router.navigate(['/products']);
  }

  renderFormFields(pId: number): void {
    let productToRender = this.productService.getOneProduct(pId);
    console.log(productToRender);

    if (productToRender) {
      this.productForm.controls.title.setValue(productToRender!.title); // Use .setValue() method
      this.productForm.controls.description.setValue(
        productToRender!.description
      );
      this.productForm.controls.brand.setValue(productToRender!.brand);
      this.productForm.controls.category.setValue(productToRender!.category);
      this.productForm.controls.discountPercentage.setValue(
        productToRender!.discountPercentage
      );

      if (productToRender!.rating !== undefined) {
        this.productForm.controls.rating.setValue(productToRender!.rating);
      } else {
        this.productForm.controls.rating.setValue(null);
      }

      this.productForm.controls.stock.setValue(productToRender!.stock);
      this.productForm.controls.thumbnail.setValue(productToRender!.thumbnail);
    }
  }
}
