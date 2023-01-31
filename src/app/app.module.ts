import { LocalService } from './auth/service/local.service';
import { HostUrlService } from './services/host.url.service';
import { POCService } from './services/poc.service';
import { HttpService } from './services/http.service';
import { CreateDepartment } from './landing/nav-bar/departments/create-department/create-department.component';
import { AddSites } from './landing/nav-bar/sites/add-sites/add-site.component';
import { MatCardModule } from '@angular/material/card';
import { ViewPermissions } from './landing/nav-bar/view-permissions/view-permission.component';
import { SitesComponent } from './landing/nav-bar/sites/sites.component';
import { NavBarComponent } from './landing/nav-bar/nav-bar.component';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './landing/nav-bar/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogContent, MatDialogModule , MatDialogActions} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Department } from './landing/nav-bar/departments/department.component';


import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { initializer } from './auth/keycloak-initializer';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/service/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SitesComponent,
    ViewPermissions,
    Department,
    AddSites,
    CreateDepartment
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    CdkAccordionModule,
    MatGridListModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    KeycloakAngularModule

  ],
  providers: [HttpService, POCService, HostUrlService, KeycloakService,LocalService, {
    provide: APP_INITIALIZER,
    useFactory: initializer,
    deps: [ KeycloakService ],
    multi: true
  }, AuthGuard,
  AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
