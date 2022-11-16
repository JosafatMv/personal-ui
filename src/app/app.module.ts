import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { materialModules } from './types/material-modules';
import { AppRouterModule } from './routers/app-rotuer.module';
import { AuthModule } from './modules/auth/auth.module';
import { PersonalModule } from './modules/personal/personal.module';

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [
    AppRouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AuthModule,
    PersonalModule,
    ...materialModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
