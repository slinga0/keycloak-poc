import { element } from 'protractor';
import { RolePermissions } from './../../../../constants/user-permission';
import { AuthService } from './../../../auth/service/auth.service';
import { POCService } from './../../../services/poc.service';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface DepartmentList {
  department: string;
  permission: number;
  read: string;
  write: string;
  readwrite: string;
  users: string;
}

const ELEMENT_DATA: DepartmentList[] = [];
@Component({
  selector: 'app-view-permissions',
  templateUrl: './view-permission.component.html',
  styleUrls: ['./view-permission.component.scss'],
})
export class ViewPermissions {
  displayedColumns: string[] = [
    'position',
    'department',
    'read',
    'write',
    'readwrite',
    'users',
  ];
  userDetails: any;
  dataSource = new MatTableDataSource();
  departments: any = [];
  roles = RolePermissions;
  departmentList: any = [];

  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];
  permissionsChecked = {
    isRead: 'READ_ONLY',
    isWrite: 'READ_WRITE',
    isReadWrite: 'ADMIN',
  };
  siteUsers: any = [];
  isPermissionsHas = {
    isRead: false,
    isWrite: false,
    isReadWrite: false,
  };
  permissionObj: any = {
    userName: '',
    permissions: [],
  };
  constructor(
    private pocService: POCService,
    private authService: AuthService
  ) {
    this.getDepartments();
    if (RolePermissions.isSiteAdmin) {
      this.getSiteUsers();
    }
  }
  getDepartments(): void {
    this.pocService.getDepartments().then((departments) => {
      if (departments.departments.length > 0) {
        // this.departments = departments.departments;

        departments.departments.forEach((val: any, index: any) => {
          this.departmentList.push({ position: index, departmentName: val });
        });
      }
      console.log(this.departmentList);
      this.dataSource = new MatTableDataSource(this.departmentList);
      this.getUserInfo();
    });
  }
  getUserInfo(): void {
    this.authService.loadUserProfile().then((res) => {
      this.pocService
        .getDepartmentsUserPermissions(res.username)
        .then((permissions) => {
          permissions.user.permissions.forEach((val: any) => {
            const findElement = this.departments.findIndex(
              (x: { department: any }) => x.department === val.departmentName
            );
            console.log(findElement);
            if (val.permission === this.permissionsChecked.isRead) {
              val.isRead = true;
              this.departmentList.push(val);
              //  this.departments[findElement].isRead = true;
            } else if (val.permission === this.permissionsChecked.isWrite) {
              val.isWrite = true;
              this.departmentList.push(val);
              //  this.departments[findElement].isWrite = true;
            } else {
              val.isReadWrite = true;
              this.departmentList.push(val);
              //  this.departments[findElement].isReadWrite = true;
            }
          });
          debugger;
          this.dataSource = new MatTableDataSource(this.departmentList);
        });
    });
  }
  onChange(element: any, event: any, typePermission: any) {
    debugger;
    if (event.checked) {
      const obj = {
        departmentName: element.departmentName,
        permission: typePermission,
      };
      this.authService.loadUserProfile().then((res) => {
        console.log(res);
        // const userDetails = 'site1user@gmail.com';
        this.permissionObj.userName = element?.username;
      });

      this.permissionObj.permissions.push(obj);
      console.log(this.permissionObj);
    } else {
      // tslint:disable-next-line:max-line-length
      const findIndex = this.permissionObj.permissions.findIndex(
        (x: { departmentName: any }) =>
          x.departmentName === element.deartmentName
      );
      if (findIndex) {
        this.permissionObj.permissions.splice(findIndex, 1);
      }
    }
  }
  addPermissions(): void {
    this.pocService.addPermissions(this.permissionObj).then((res) => {
      alert('Succes');
    });
  }
  getSiteUsers(): void {
    this.pocService.getSiteUsers().then((siteUsers) => {
      this.siteUsers = siteUsers.users;
    });
  }
  onUserChange(element: any, event: any): any {
    console.log(event);
    element.username = event.value;
  }
}
