import { environment } from './../../../environments/environment.prod';
import { Router } from '@angular/router';
import { RolePermissions } from './../../../constants/user-permission';
import { UserPermissions } from './../../../models/permissions';
import { AuthService } from './../../auth/service/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  isSiteAdmin = false;
  rolePermissions = RolePermissions;
  constructor(private authService: AuthService, private router: Router) {

    // tslint:disable-next-line:align
    this.checkPermissions();



  }
  checkPermissions(): void {
    debugger;
    if (this.authService.hasUserRole(UserPermissions.SERVICE)) {
      RolePermissions.isSiteAdmin = true;
    } else if (this.authService.hasUserRole(UserPermissions.CLINICAL)) {
      RolePermissions.isSiteUser = true;
    }

    // this.authService.
    if (environment.keycloak.realm === 'master') {
      RolePermissions.isSystemAdmin = true;
    }

  }
  onNavigateSitePage(): void {

    // tslint:disable-next-line:no-conditional-assignment
    if (RolePermissions.isSystemAdmin) {
      this.router.navigate([`/sites`]);
    } else if (RolePermissions.isSiteUser) {
      this.router.navigate([`/view-permissions`]);
    } else if (RolePermissions.isSiteAdmin) {
      this.router.navigate([`/department`]);
      //this.router.navigate([`/view-permissions`]);
    }

  }
  onNavigateDepartmentPage(): void {
    this.router.navigate([`/view-permissions`]);
  }
  onLogout(): void {
    this.authService.logout();
    const me = this;
    window.sessionStorage.clear();
    window.localStorage.clear();
    me.authService.isLoggedIn().then((status) => {
      if (status) {
        me.authService.logout();
      }
    });
  }
}
