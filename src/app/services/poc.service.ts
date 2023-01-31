import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';
import { HostUrlService } from './host.url.service';

import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class POCService {
  constructor(private hostUrlService: HostUrlService, private httpService: HttpService) {}
  public createSite(siteName: any): Promise<any> {
    const obj = {
      name : siteName
    }
    const url = this.hostUrlService.getRealmURL();

    const data = this.getJSONData(siteName);
    const httpOptions = {
      headers: new HttpHeaders({ 'lrp-site-name': 'master', 'Content-Type': 'application/json'  }),
    };
    return this.httpService.postRequest(url, obj, httpOptions);
  }
  private getJSONData(data: any): any {
    return JSON.stringify(data);
  }

  public getSites(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'lrp-site-name': 'master', 'Content-Type': 'application/json'  }),
    };
    const url = this.hostUrlService.getRealmURL();
    return this.httpService.getRequest(url,httpOptions);
  }
  public getSite(siteName: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'lrp-site-name': 'master', 'Content-Type': 'application/json'  }),
    };
    let url = this.hostUrlService.getRealmURL();
    url = url + '/' + siteName + '';
    return this.httpService.getRequest(url,httpOptions);
  }
  public createSiteUser(siteuserDetails: any): Promise<any> {

    const url = this.hostUrlService.getCreateSiteUserRealm();
    const data = this.getJSONData(siteuserDetails);
    const httpOptions = {
      headers: new HttpHeaders({ 'lrp-site-name': siteuserDetails.isAdmin ? 'master' : environment.keycloak.realm, 'Content-Type': 'application/json'  }),
    };
    return this.httpService.postRequest(url, data, httpOptions);
  }
  public getDepartments(): Promise<any> {
    // 'site-one'
    const httpOptions = {
      headers: new HttpHeaders({ 'lrp-site-name': environment.keycloak.realm, 'Content-Type': 'application/json'  }),
    };
    const url = this.hostUrlService.getDepartmentURL();
    return this.httpService.getRequest(url,httpOptions);
  }
  public getDepartmentsUserPermissions(userName: any): Promise<any> {
    // 'site-one'
    const httpOptions = {
      headers: new HttpHeaders({ 'lrp-site-name': environment.keycloak.realm, 'Content-Type': 'application/json'  }),
    };
    let url = this.hostUrlService.getDepartmentURLPermissions();
    url = url + '/' + userName + '';
    return this.httpService.getRequest(url, httpOptions);
  }
  public createDepartment(siteuserDetails: any): Promise<any> {

    const url = this.hostUrlService.getDepartmentURL();
    const data = this.getJSONData(siteuserDetails);
    const httpOptions = {
      headers: new HttpHeaders({ 'lrp-site-name': environment.keycloak.realm, 'Content-Type': 'application/json'  }),
    };
    return this.httpService.postRequest(url, data, httpOptions);
  }
  public addPermissions(permissionObj: any): Promise<any> {

    const url = this.hostUrlService.getDepartmentURLPermissions();
    const data = this.getJSONData(permissionObj);
    const httpOptions = {
      headers: new HttpHeaders({ 'lrp-site-name': environment.keycloak.realm, 'Content-Type': 'application/json'  }),
    };
    return this.httpService.postRequest(url, data, httpOptions);
  }
  public getSiteUsers(): Promise<any> {
    // 'site-one'
    const httpOptions = {
      headers: new HttpHeaders({ 'lrp-site-name': environment.keycloak.realm, 'Content-Type': 'application/json'  }),
    };
    let url = this.hostUrlService.getUsers();
    url = url + '/' + '?realm=' +  environment.keycloak.realm + '';
    return this.httpService.getRequest(url, httpOptions);
  }
}
