import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  private user: any;
  private userChange: Subject<any> = new Subject();

  private API_URL = environment.API_URL;

  userChange$: Observable<any> = this.userChange.asObservable();

  constructor(private httpClient: HttpClient) { }

  private setUser(user?: any) {
    this.user = user;
    this.userChange.next(user);
    return user;
  }

  me(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/auth/me`, options)
      .toPromise()
      .then((user) => this.setUser(user))
      .catch((err) => {
        if (err.status === 404) {
          this.setUser();
        }
      });
  }

  login(username: any, password: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    const user = {
      username: username,
      password: password
    }
    return this.httpClient.post(`${this.API_URL}/auth/login`, user, options)
      .toPromise()
      .then((data) => this.setUser(data));
  }

  signup(username: any, email: any, password: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    const user = {
      username: username,
      email: email,
      password: password
    }
    return this.httpClient.post(`${this.API_URL}/auth/signup`, user, options)
      .toPromise()
      .then((data) => this.setUser(data));
  }

  logout(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/auth/logout`, null, options)
      .toPromise()
      .then(() => this.setUser());
  }

  getUser(): any {
    return this.user;
  }
}