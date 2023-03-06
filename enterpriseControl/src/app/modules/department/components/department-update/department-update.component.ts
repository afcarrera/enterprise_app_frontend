import { EnterpriseService } from 'src/app/services/enterprise.service';
import { Department } from './../../../../domain/department';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DepartmentService } from 'src/app/services/department.service';
import { Response } from 'src/app/domain/response';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Enterprise } from 'src/app/domain/enterprise';

@Component({
  selector: 'app-department-update',
  templateUrl: './department-update.component.html',
  styleUrls: ['./department-update.component.scss']
})
export class DepartmentUpdateComponent implements OnInit {
  department: Department;
  name = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  idEnterprise = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required, Validators.pattern('^([0-9]){1,10}$')]);
  isDisabledSaveBtn: boolean;

  enterprises: Enterprise[];

  constructor(
    public dialogRef: MatDialogRef<DepartmentUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public departmentId: string,
    private departmentService: DepartmentService,
    private enterpriseService: EnterpriseService,
    private _snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
    this.department = new Department();
    this.departmentService.getDepartmentById(this.departmentId).subscribe({
      next: (response: Response) =>{
        if (response.data){
          this.department = response.data;
        }
      },
      error: (error) => {
        this.openSnackBar('ERROR, '+error.message, 'OK');
      }
    })
    this.isDisabledSaveBtn = false;
    this.chargeEnterpriseData();
  }

  chargeEnterpriseData(){
    this.enterpriseService.getEnterprises().subscribe((response: Response)=>{
      if(response.data){
        this.enterprises = response.data;
      }
    });
  }

  disableSaveBtn(): void{
    this.isDisabledSaveBtn =
    this.name.hasError('required')||
    this.description.hasError('required')||
    this.phone.hasError('required')||
    this.idEnterprise.hasError('required');
  }

  saveForm(): void{
    this.departmentService.patchDepartment(this.department.id,this.department).subscribe({
      next: (response: Response) =>{
        if (response.data){
          console.log('Department updated', response.data);
          this.openSnackBar('Department updated', 'OK');
        }
      },
      error: (error) => {
        this.openSnackBar('ERROR, '+error.message, 'OK');
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
