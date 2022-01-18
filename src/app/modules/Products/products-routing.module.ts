import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProductComponent } from "./add-product/add-product.component";
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsListComponent } from './products-list/products-list.component';



const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent
  },
  {
    path: 'ProductDetails/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'AddProduct',
    component: AddProductComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule { }
