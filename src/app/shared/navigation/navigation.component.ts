import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { GeneralService } from '../../services/general.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
	// Esto se borra
	logoPath: string = '../../../../../assets/img/logo.png';

	get session() {
		return this.generalService.isLogged;
	}

	isHandset$: Observable<boolean> = this.breakpointObserver
		.observe(Breakpoints.Handset)
		.pipe(
			map((result) => result.matches),
			shareReplay()
		);

	constructor(
		private breakpointObserver: BreakpointObserver,
		private router: Router,
		private generalService: GeneralService
	) {
		this.generalService.isLogged = !!localStorage.getItem('token');
		// if (!this.session.logged) {
		//   this.router.navigateByUrl('/auth');
		// }
		if (!this.generalService.isLogged) {
			this.router.navigateByUrl('/auth');
		}
	}
}
