import { Injectable } from '@angular/core';

interface Session {
	logged: boolean;
	token: string | null;
}

@Injectable({
	providedIn: 'root',
})
export class GeneralService {
	private session: Session = {
		logged: false,
		token: null,
	};

	constructor() {
		this.session.logged = !!localStorage.getItem('token');
		this.session.token = localStorage.getItem('token')
			? localStorage.getItem('token')
			: null;
		console.log(this.token);
	}

	get isLogged() {
		return this.session.logged;
	}

	set isLogged(value) {
		this.session.logged = value;
	}

	get token() {
		return this.session.token;
	}

	set token(value) {
		this.session.token = value;
	}
}
