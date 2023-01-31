import { POCService } from './../../../../services/poc.service';
import { Component, OnInit } from "@angular/core";
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
})
export class AddSites implements OnInit {
  dialogData: any;
  siteDetails = {
    siteName:''
  }
  siteUserDetails = {
    firstName:'',
    lastName:'',
    realmName:"",
    isAdmin:false,
    emailid:''
  }
  durationInSeconds = 5;
  constructor(@Inject(MAT_DIALOG_DATA) public data: string, private pocService: POCService,private _snackBar: MatSnackBar) {

  }
  ngOnInit() {
    // will log the entire data object
    console.log(this.data);
    this.dialogData = this.data;
  }
  addSite(): void {
    this.pocService.createSite(this.siteDetails.siteName).then(res => {
     alert('Addedd Success')
    })
  }
  onChange(event: any): void {

    console.log(event)
    this.siteUserDetails.isAdmin = event.checked ? true : false;
  }
  createSiteUser(): void {
    this.pocService.createSiteUser(this.siteUserDetails).then(res => {
      alert('Success');
    })
  }
}
