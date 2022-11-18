import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from '../modules/auth/pages/signin/signin.component';
import { MainPersonalComponent } from '../modules/personal/pages/main-personal/main-personal/main-personal.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
	{
		path: '',
		component: MainPersonalComponent,
		pathMatch: 'full',
	},
	{
		path: 'personal',
		component: MainPersonalComponent,
	},
	{
		path: 'auth',
		component: SigninComponent,
	},
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	bootstrap: [AppComponent],
})
export class AppRouterModule {}
