import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products:Product[] = new Array<Product>();

  constructor(private productService :ProductService, public router: Router) { }

  getProducts(){
    
  }

  getProductDetails(id:any){
  }

  ngOnInit(): void {
  }

}
