

import { Department } from './landing/nav-bar/departments/department.component';
import { ViewPermissions } from './landing/nav-bar/view-permissions/view-permission.component';
import { SitesComponent } from './landing/nav-bar/sites/sites.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './landing/nav-bar/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'site-one',
    component: HomeComponent,
  },
  {
    path: 'sites',
    component: SitesComponent,
  },
  {
    path: 'view-permissions',
    component: ViewPermissions,
  },
  {
    path: 'department',
    component: Department,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
