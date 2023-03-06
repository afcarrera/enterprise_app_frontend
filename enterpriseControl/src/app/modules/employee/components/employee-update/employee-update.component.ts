import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee } from 'src/app/domain/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Response } from 'src/app/domain/response';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent implements OnInit {
  employee: Employee;

  name = new FormControl('', [Validators.required]);
  surname = new FormControl('', [Validators.required]);
  age = new FormControl('', [Validators.required, Validators.pattern('^([0-9]){1,3}$')]);
  email = new FormControl('', [Validators.required, Validators.email]);
  position = new FormControl('', [Validators.required]);
  isDisabledSaveBtn: boolean;

  constructor(
    public dialogRef: MatDialogRef<EmployeeUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public employeeId: string,
    private employeeService: EmployeeService,
    private _snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
    this.employee = new Employee();
    this.employeeService.getEmployeeById(this.employeeId).subscribe({
      next: (response: Response) =>{
        if (response.data){
          this.employee = response.data;
        }
      },
      error: (error) => {
        this.openSnackBar('ERROR, '+error.message, 'OK');
      }
    })
    this.isDisabledSaveBtn = false;
  }

  disableSaveBtn(): void{
    this.isDisabledSaveBtn =
    this.name.hasError('required') ||
    this.surname.hasError('required') ||
    this.age.hasError('required') ||
    this.age.hasError('pattern') ||
    this.position.hasError('required') ||
    this.email.hasError('required') ||
    this.email.hasError('email');
  }

  saveForm(): void{
    this.employeeService.patchEmployee(this.employee.id, this.employee).subscribe({
      next: (response: Response) =>{
        if (response.data){
          console.log('Employee updated', response.data);
          this.openSnackBar('Employee updated', 'OK');
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
