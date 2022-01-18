import { Component, OnInit } from '@angular/core';
import {ProductService} from '../products.service';
import { Product } from '../product.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:Product = new Product;


  constructor(private productService :ProductService,private activatedroute:ActivatedRoute) { }


  getProduct(id:number){
    
    this.productService.getProduct(id).subscribe((res: any) => {
      this.product = res;
  },
  err => {
    console.log(err);
  }
);
  }
  ngOnInit(): void {
    this.activatedroute.params.subscribe((params: Params) => 
       {
         this.product.id=params.id;
         this.getProduct(params.id);
  });
  }

}
