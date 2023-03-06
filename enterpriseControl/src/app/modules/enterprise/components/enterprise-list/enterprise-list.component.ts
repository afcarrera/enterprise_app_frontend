import { EnterpriseUpdateComponent } from './../enterprise-update/enterprise-update.component';
import { EnterpriseNewComponent } from './../enterprise-new/enterprise-new.component';

import { EnterpriseService } from './../../../../services/enterprise.service';
import { Enterprise } from '../../../../domain/enterprise';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { Response } from 'src/app/domain/response';

@Component({
  selector: 'app-enterprise-list',
  templateUrl: './enterprise-list.component.html',
  styleUrls: ['./enterprise-list.component.scss']
})
export class EnterpriseListComponent implements OnInit {
  displayedColumns: string[];
  dataSource: Enterprise[];
  constructor(
    private enterpriseService: EnterpriseService,
    public dialog: MatDialog,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.displayedColumns = [
      'name',
      'phone',
      'address',
      'action',
    ];
    this.chargeData();
  }

  chargeData(){
    this.enterpriseService.getEnterprises().subscribe((response: Response)=>{
      if (response.data){
        this.dataSource = response.data;
      }
    });
  }

  openDialogNew(): void {
    const dialogRef = this.dialog.open(EnterpriseNewComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.chargeData();
    });
  }

  openDialogUpdate(enterprise: Enterprise): void {
    const dialogRef = this.dialog.open(EnterpriseUpdateComponent, {
      data: enterprise.id,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.chargeData();
    });
  }

  returnPage(): void {
    this.location.back();
  }
}
