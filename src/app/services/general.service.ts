import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  private session = {
    logged: false,
  };

  get isLogged() {
    return this.session.logged;
  }

  set isLogged(isLogged) {
    this.session.logged = isLogged;
  }

  constructor() {
    this.session.logged = !!localStorage.getItem('token');
  }
}
