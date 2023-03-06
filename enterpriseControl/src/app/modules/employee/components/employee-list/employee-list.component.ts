import { Employee } from './../../../../domain/employee';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { EmployeeService } from 'src/app/services/employee.service';
import { Response } from 'src/app/domain/response';
import { EmployeeNewComponent } from '../employee-new/employee-new.component';
import { EmployeeUpdateComponent } from '../employee-update/employee-update.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[];
  dataSource: Employee[];

  constructor(
    private employeeService: EmployeeService,
    public dialog: MatDialog,
    private location: Location) { }

  ngOnInit(): void {
    this.displayedColumns = [
      'name',
      'surname',
      'age',
      'email',
      'position',
      'action',
    ];
    this.chargeData();
  }

  chargeData(){
    this.employeeService.getEmployees().subscribe((response: Response)=>{
      if (response.data){
        this.dataSource = response.data;
      }
    });
  }

  openDialogNew(): void {
    const dialogRef = this.dialog.open(EmployeeNewComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.chargeData();
    });
  }

  openDialogUpdate(employee: Employee): void {
    const dialogRef = this.dialog.open(EmployeeUpdateComponent, {
      data: employee.id,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.chargeData();
    });
  }

  returnPage(): void {
    this.location.back();
  }

}
