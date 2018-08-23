import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private baseUrl = 'http://localhost:3000/api/recipes'

  private recipes: any;
  private recipesChange : Subject<any>=new Subject();

  recipesChange$: Observable<any> = this.recipesChange.asObservable();

  constructor(private httpClient: HttpClient) {}

  private setRecipes(recipes:any){
    this.recipes=recipes;
    this.recipesChange.next(recipes);
    return recipes
  }

  getCategories(){
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/categories`, options)
      .toPromise()
  }

  getCategory(category){
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/category`, options)
      .toPromise()
  }

  getAll(){
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/`, options)
      .toPromise()
  }

  getAllByCategory(category){
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/categories/${category}`, options)
      .toPromise()
  }

  getAllMyRecipes(){
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/owner`, options)
      .toPromise()
  }

  getOneById(id: any){
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/${id}`, options)
      .toPromise()
  }

  // getList(): Promise<any> {
  //   const options = {
  //     withCredentials: true
  //   };
  //   return this.httpClient.get(`${this.baseUrl}`, options)
  //     .toPromise();
  // }

  // getOneById(id: string): Promise<any> {
  //   const options = {
  //     withCredentials: true
  //   };
  //   return this.httpClient.get(`${this.baseUrl}/${id}`, options)
  //     .toPromise();
  // }

  create(data): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseUrl}/add`, data, options)
      .toPromise()
  }

  delete(id): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.delete(`${this.baseUrl}/${id}`, options)
      .toPromise()
      .then(() => {
        this.getAllMyRecipes();
      })
  }

  put(id): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.put(`${this.baseUrl}/${id}`, options)
      .toPromise()
      .then(() => {
        this.getAllMyRecipes();
      })
  }
}

