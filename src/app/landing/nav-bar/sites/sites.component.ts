import { POCService } from './../../../services/poc.service';
import { AuthService } from '../../../auth/service/auth.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddSites } from './add-sites/add-site.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent implements OnInit {
  items = ['Site 1', 'Site 2', 'Site 3', 'Site 4', 'Site 5'];
  expandedIndex = 0;
  sites: any = [];
  siteDetails: any;

  constructor(public dialog: MatDialog, private pocService: POCService) { }
  ngOnInit(): void {
    this.getSites();
  }
  addSites(isSite: any){
    const data = {
      dialogTitle:"",
      isSite:''
    }
    if (isSite) {
      data.dialogTitle = 'Add Site';
      data.isSite = isSite;
      const dialogRef = this.dialog.open(AddSites, {
        data: {
          data
        }
      });

      dialogRef.afterClosed().subscribe((result: any) => {
        console.log(`Dialog result: ${result}`);
      });
    } else {
      data.dialogTitle = 'Add Site Admin';
      data.isSite = isSite;
      const dialogRef = this.dialog.open(AddSites, {
        data: {
          data
        }
      });

      dialogRef.afterClosed().subscribe((result: any) => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
  getSites(): void {
    this.pocService.getSites().then(sites => {

      this.sites = sites.realms;
    })
  }
  onOpen(event: any) {

    this.pocService.getSite(event).then(res => {
      this.siteDetails = res;
    })
  }
}
