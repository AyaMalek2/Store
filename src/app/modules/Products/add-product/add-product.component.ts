import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product.model';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup;
  product:Product=new Product;

  constructor(private _formBuilder: FormBuilder,private productService :ProductService) { }

  buildProductForm() {
    this.productForm = this._formBuilder.group({
      id: ['', [Validators.required]],
      category: ['', [Validators.required]],
      price: ['', [Validators.required]],
      title: ['', Validators.required],
    });
  }
  addProduct(){
    this.productService.createProduct(this.product).subscribe((res: any) => {
  },
  err => {
    console.log(err);
  });
  }

  ngOnInit(): void {
  }

}
