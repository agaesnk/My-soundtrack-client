import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable()
export class InitAuthGuard implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(): Promise<any> {
    return this.authService.me()
      .then((user) => {
        return true;
      })
      .catch((error) => {
        console.error(error);
        return false;
      });
  }
}
