import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPersonalComponent } from './pages/main-personal/main-personal/main-personal.component';
import { materialModules } from 'src/app/types/material-modules';
import { AddPersonalComponent } from './pages/add-personal/add-personal.component';

@NgModule({
  declarations: [MainPersonalComponent, AddPersonalComponent],
  imports: [CommonModule, ...materialModules],
})
export class PersonalModule {}
