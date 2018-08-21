import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private baseUrl = 'http://localhost:3000/api/recipes'

  constructor(private httpClient: HttpClient) {}

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
}
