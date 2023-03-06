import { Enterprise } from './../../../../domain/enterprise';
import { EnterpriseService } from 'src/app/services/enterprise.service';
import { Department } from './../../../../domain/department';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from 'src/app/services/department.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Response } from 'src/app/domain/response';

@Component({
  selector: 'app-department-new',
  templateUrl: './department-new.component.html',
  styleUrls: ['./department-new.component.scss']
})
export class DepartmentNewComponent implements OnInit {

  departmentFormGroup : FormGroup;
  phoneFormGroup : FormGroup;
  isLinear=true;

  enterprises: Enterprise[];

  constructor(
    private _formBuilder: FormBuilder,
    private enterpriseService: EnterpriseService,
    private departmentService: DepartmentService,
    private _snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.departmentFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      idEnterprise: ['', Validators.required],
    });
    this.phoneFormGroup = this._formBuilder.group({
      number: ['', [Validators.required, Validators.pattern('^([0-9]){1,10}$')]]
    });
    this.chargeEnterpriseData();
  }

  chargeEnterpriseData(){
    this.enterpriseService.getEnterprises().subscribe((response: Response)=>{
      if(response.data){
        this.enterprises = response.data;
      }
    });
  }

  saveForm(){
    let department: Department = new Department();
    department.name = this.departmentFormGroup.value.name;
    department.description = this.departmentFormGroup.value.description;
    department.idEnterprise = this.departmentFormGroup.value.idEnterprise;
    department.phone = this.phoneFormGroup.value.number;
    this.departmentService.postDepartment(department).subscribe({
      next: (response: Response) =>{
        if (response.data){
          this.openSnackBar('Department saved', 'Close');
        }else{
          this.openSnackBar('ERROR saving Department, try again later.', 'OK');
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
