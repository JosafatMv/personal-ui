import { Component } from '@angular/core';
import { Personal } from '../../../types/personal';
import { PersonalService } from '../../../service/personal.service';
import { GeneralService } from '../../../../../services/general.service';

@Component({
  selector: 'app-main-personal',
  templateUrl: './main-personal.component.html',
})
export class MainPersonalComponent {
  PERSONAL_DATA: Personal[] = [];

  displayedColumns: string[] = [
    'id',
    'name',
    'surname',
    'lastname',
    'position',
    'salary',
    'birthday',
  ];
  dataSource = this.PERSONAL_DATA;

  constructor(
    private personalService: PersonalService,
    private generalService: GeneralService
  ) {
    this.getPersonal();
  }

  getPersonal() {
    console.log(this.generalService.token);

    this.personalService.getPersonal().subscribe((resp) => {
      this.PERSONAL_DATA = resp;
      this.dataSource = this.PERSONAL_DATA;
      this.PERSONAL_DATA;
    });
  }

}
