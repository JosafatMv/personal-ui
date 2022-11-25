import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralService } from '../../../services/general.service';
import { Observable, catchError } from 'rxjs';
import { Personal } from '../types/personal';
import { APP_URL } from 'src/app/services/base-url-app';

@Injectable({
	providedIn: 'root',
})
export class PersonalService {
	private loading: boolean = false;
	private people: Personal[] = [];

	get personal() {
		return [...this.people];
	}

	set setPersonal(person: Personal) {
		this.people.push(person);
	}

	get isLoading() {
		return this.loading;
	}

	set isLoading(isLoading: boolean) {
		this.loading = isLoading;
	}

	findAll() {
		this.loading = true;
		this.http
			.get<any>(`${APP_URL}api/personal/`)
			.pipe(
				catchError((error) => {
					this.loading = false;
					return error;
				})
			)
			.subscribe((response) => {
				this.people = response;
				this.loading = false;
			});
	}

	constructor(
		private readonly http: HttpClient,
		private generalService: GeneralService
	) {}

	// getPersonal(): Observable<any> {
	// 	return this.http.get<any>('http://localhost:3010/api/personal/', {
	// 		headers: {
	// 			Authorization: `Bearer ${this.generalService.token}`,
	// 		},
	// 	});
	// }
}
