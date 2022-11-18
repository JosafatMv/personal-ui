import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralService } from '../../../services/general.service';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class PersonalService {
	// private personal: Personal[] = [];

	// public get getPersonal(): Personal[] {
	// 	return [...this.personal];
	// }

	constructor(
		private readonly http: HttpClient,
		private generalService: GeneralService
	) {
		console.log(this.generalService.token);
	}

	getPersonal(): Observable<any> {
		console.log(this.generalService.token);

		return this.http.get<any>('http://localhost:3010/api/personal/', {
			headers: {
				Authorization: `Bearer ${this.generalService.token}`,
			},
		});
	}
}
