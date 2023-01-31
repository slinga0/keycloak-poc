import { POCService } from './../../../../services/poc.service';
import { Component, OnInit } from "@angular/core";
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',

})
export class CreateDepartment implements OnInit {
  departmentDetails = {
    departmentName:''
  }
  siteUserDetails = {
    firstName:'',
    lastName:'',
    realmName:"",
    isAdmin:false,
    emailid:''
  }
  dialogData: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: string, private pocService: POCService) {

  }
  ngOnInit(): void {
    // will log the entire data object
    console.log(this.data);
    this.dialogData = this.data;
  }
  addDepartment(): void {
    this.pocService.createDepartment(this.departmentDetails).then(res => {
      alert('Success');
    })
  }
  createSiteUser(): void {
    this.pocService.createSiteUser(this.siteUserDetails).then(res => {
      alert('Success');
    })
  }
  onChange(event: any): void {

    console.log(event)
    this.siteUserDetails.isAdmin = event.checked ? true : false;
  }
}
