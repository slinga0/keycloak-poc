import { AuthService } from '../../../auth/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { RolePermissions } from 'src/constants/user-permission';
import { Router } from '@angular/router';
import { UserPermissions } from 'src/models/permissions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  isSiteAdmin = false;
  rolePermissions = RolePermissions;
  constructor(private authService: AuthService, private router: Router) {

  }
    // tslint:disable-next-line:align
  //   this.checkPermissions();
  //   console.log(this.authService.hasUserRole(UserPermissions.SITEADMIN));
  //   console.log(this.authService.getRoles())
  // }
  // checkPermissions(): void {
  //   if (this.authService.hasUserRole(UserPermissions.SITEADMIN)) {
  //     RolePermissions.isSiteAdmin = true;
  //   } else if (this.authService.hasUserRole(UserPermissions.SITEUSER)) {
  //     RolePermissions.isSiteUser = true;
  //   } else if (this.authService.hasUserRole(UserPermissions.SYSTEMADMIN)) {
  //     RolePermissions.isSystemAdmin = true;
  //   }
  // }
  // onNavigateSitePage(): void {
  //   this.router.navigate([`/sites`]);
  // }

}
