import { Injectable } from "@angular/core";
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Observable,throwError } from "rxjs";
import { Product } from "./product.model";

@Injectable()
export class ProductService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }; 
  apiURL: string="https://fakestoreapi.com";
 
  constructor(private http: HttpClient) { }

  
  getProducts():Observable<Product> {
    return this.http.get<Product>(this.apiURL + "/products?limit=10"); 
  }
  
  getProduct(id:any): Observable<Product> {
    return this.http.get<Product>(this.apiURL + '/Products/' + id)
  }  

  createProduct(Product:Product): Observable<Product> {
    return this.http.post<Product>(this.apiURL + '/Products', JSON.stringify(Product), this.httpOptions)

  }  

}
