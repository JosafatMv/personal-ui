import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PersonalService } from '../../../service/personal.service';
import { Personal } from '../../../types/personal';
import { AddPersonalComponent } from '../../add-personal/add-personal.component';

@Component({
	selector: 'app-main-personal',
	templateUrl: './main-personal.component.html',
})
export class MainPersonalComponent implements OnInit {
	displayedColumns: string[] = [
		'#',
		'name',
		'surname',
		'lastname',
		'birthday',
		'salary',
		'position',
		'actions',
	];

	get isLoading() {
		return this.personalService.isLoading;
	}

	get personal() {
		return new MatTableDataSource<Personal>(this.personalService.personal);
	}

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;

	constructor(
		private personalService: PersonalService,
		private _liveAnnouncer: LiveAnnouncer,
		public dialog: MatDialog
	) {
		// this.getPersonal();
	}

	ngOnInit(): void {
		this.getAll();
	}

	ngAfterViewInit() {
		this.personal.paginator = this.paginator;
		this.personal.sort = this.sort;
	}

	announceSortChange(sortState: Sort) {
		if (sortState.direction) {
			this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
		} else {
			this._liveAnnouncer.announce('Sorting cleared');
		}
	}

	openDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
		const modalRef = this.dialog.open(AddPersonalComponent, {
			width: '60%',
			enterAnimationDuration,
			exitAnimationDuration,
			disableClose: true,
		});
		modalRef.afterClosed().subscribe((result: any) => {
			console.log('closed', result);
		});
	}

	getAll() {
		this.personalService.findAll();
	}

	// formateDate(date: string) {
	// 	const dateFormated = new Date(date);
	// 	const day = dateFormated.getDate();
	// 	const month = dateFormated.getMonth() + 1;
	// 	const year = dateFormated.getFullYear();

	// 	return `${year}-${month < 10 ? `0${month}` : month}-${
	// 		day < 10 ? `0${day}` : day
	// 	}`;
	// }

	// getPersonal() {
	// 	this.personalService.getPersonal().subscribe((resp) => {
	// 		resp.forEach((personal: Personal) => {
	// 			personal.fecNac = this.formateDate(personal.fecNac);
	// 		});

	// 		this.PERSONAL_DATA = resp;
	// 		this.dataSource = this.PERSONAL_DATA;
	// 	});
	// }
}

// docker run -d -p 3306:3306 --name MySQL80 -e MYSQL_ROOT_PASSWORD=root mysql:8.0
