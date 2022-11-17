import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../types/user';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';
import { GeneralService } from '../../../services/general.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loading: boolean = false;
  get isLoading() {
    return this.loading;
  }
  constructor(
    private readonly http: HttpClient,
    private router: Router,
    private generalService: GeneralService
  ) {}

  login(payload: UserLogin): void {
    this.loading = true;
    this.http
      .post<any>('http://localhost:4000/api/auth/', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(
        catchError((error) => {
          this.loading = false;
          return error;
        })
      )
      .subscribe((response) => {
        localStorage.setItem('token', response);
        this.loading = false;
        // this.generalService.isLogged(true);
        this.router.navigate(['./']);
      });
  }
}
