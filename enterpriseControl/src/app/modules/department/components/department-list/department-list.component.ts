import { EnterpriseService } from 'src/app/services/enterprise.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { Department } from 'src/app/domain/department';
import { Response } from 'src/app/domain/response';
import { DepartmentService } from 'src/app/services/department.service';
import { DepartmentNewComponent } from '../department-new/department-new.component';
import { DepartmentUpdateComponent } from '../department-update/department-update.component';
import { Enterprise } from 'src/app/domain/enterprise';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
  displayedColumns: string[];
  dataSource: Department[];

  enterpriseMap: Map<string, string>;

  constructor(
    private departmentService: DepartmentService,
    private enterpriseService: EnterpriseService,
    public dialog: MatDialog,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.displayedColumns = [
      'name',
      'description',
      'phone',
      'idEnterprise',
      'action',
    ];
    this.enterpriseMap = new Map<string, string>();
    this.chargeEnterpriseData();
    this.chargeData();
  }

  chargeData(){
    this.departmentService.getDepartments().subscribe((response: Response)=>{
      if (response.data){
        this.dataSource = response.data;
      }
    });
  }

  chargeEnterpriseData(){
    this.enterpriseService.getEnterprises().subscribe((response: Response)=>{
      if (response.data){
        const enterprisesData: Enterprise[] = response.data;
        enterprisesData.forEach(
          (enterprise: Enterprise) => {
            this.enterpriseMap.set(enterprise.id, enterprise.name)
          }
        );
      }
    });
  }

  openDialogNew(): void {
    const dialogRef = this.dialog.open(DepartmentNewComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.chargeData();
    });
  }

  openDialogUpdate(department: Department): void {
    const dialogRef = this.dialog.open(DepartmentUpdateComponent, {
      data: department.id,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.chargeData();
    });
  }

  getEnterpriseName(idEnterprise: string): string | undefined{
    return this.enterpriseMap.get(idEnterprise);
  }

  returnPage(): void {
    this.location.back();
  }

}
