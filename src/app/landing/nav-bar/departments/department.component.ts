import { POCService } from './../../../services/poc.service';
import { CreateDepartment } from './create-department/create-department.component';
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class Department implements OnInit {
  items = ['Department 1', 'Department 2', 'Department 3', 'Department 4', 'Department 5'];
  users = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5'];
  expandedIndex = 0;
  departments: any;
  siteUsers: any = [];
  constructor(public dialog: MatDialog, private pocService: POCService) {}
  ngOnInit(): void {
    this.getDepartments();
    this.getSiteUsers();
  }
  addDepartment(isCreateDepartment: any) {
    const data = {
      dialogTitle:"",
      isCreateDepartment:''
    }
    if (isCreateDepartment) {
      data.dialogTitle = 'Create Department'
      data.isCreateDepartment = isCreateDepartment;
      const dialogRef = this.dialog.open(CreateDepartment, {
        data: {
          data
        }
      });

      dialogRef.afterClosed().subscribe((result: any) => {
        console.log(`Dialog result: ${result}`);
      });
    } else {
      data.dialogTitle = 'Create Site User'
      data.isCreateDepartment = isCreateDepartment;
      const dialogRef = this.dialog.open(CreateDepartment, {
        data: {
          data
        }
      });

      dialogRef.afterClosed().subscribe((result: any) => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
  getDepartments(): void {
    this.pocService.getDepartments().then(departments => {
      debugger;
      this.departments = departments.departments;
    })
  }
  getSiteUsers(): void {
    debugger;
    this.pocService.getSiteUsers().then(siteUsers => {
      debugger;
      this.siteUsers = siteUsers.users;
    })
  }
}
