import { GeneralService } from './../../../../services/general.service';
import { Component } from '@angular/core';
import { UserLogin } from '../../types/user';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
})
export class SigninComponent {
	user: UserLogin = {
		email: '',
		password: '',
	};

	logoPath: string = '../../../../../assets/img/logo.png';

	get isLoading() {
		return this.authService.isLoading;
	}

	constructor(
		private authService: AuthService,
		private router: Router,
		private generalService: GeneralService
	) {
		if (!!localStorage.getItem('token')) {
			this.router.navigate(['']);
		}
	}

	signin() {
		this.authService.login(this.user);
		this.router.navigate(['']);
		this.generalService.isLogged = true;
	}
}
