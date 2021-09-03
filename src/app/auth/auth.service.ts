import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userAuthenticated: boolean = false;
  constructor() {}

  onLogin() {
    this._userAuthenticated = true;
  }

  onLoggout() {
    this._userAuthenticated = false;
  }

  get isAuthenticated() {
    return this._userAuthenticated;
  }
}
