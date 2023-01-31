import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HostUrlService {
  private url: any;
  constructor() {

  }
  public getRealmURL(): string {
    this.url = `${environment.webServer.createSites}`;
    return this.url;
  }
  public getCreateSiteUserRealm(): void {
    this.url = `${environment.webServer.createUser}`;
    return this.url;
  }
  public getDepartmentURL(): string {
    this.url = `${environment.webServer.department}`;
    return this.url;
  }
  public getDepartmentURLPermissions(): string {
    this.url = `${environment.webServer.departmentPermissions}`;
    return this.url;
  }
  public getUsers(): string {
    this.url = `${environment.webServer.users}`;
    return this.url;
  }
}
