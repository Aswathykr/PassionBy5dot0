import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../../category';
import { Observable } from 'rxjs';
/*
  Generated class for the CategoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoryProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CategoryProvider Provider');
  }
  getCategoryUrl = 'http://192.168.0.26:8080/category/'
  
  /** GET heroes from the server */
  getCategory (): Observable<Category[]> {
    console.log("trying to get categories");
        return this.http.get<Category[]>(this.getCategoryUrl);
  }
}
