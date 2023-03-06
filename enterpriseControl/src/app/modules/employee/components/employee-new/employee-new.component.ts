import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/services/employee.service';
import { Response } from 'src/app/domain/response';
import { Employee } from 'src/app/domain/employee';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.scss']
})
export class EmployeeNewComponent implements OnInit {

  basicFormGroup : FormGroup;
  complementaryFormGroup : FormGroup;
  isLinear=true;

  constructor(
    private _formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private _snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.basicFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
    });
    this.complementaryFormGroup = this._formBuilder.group({
      age: ['', [Validators.required, Validators.pattern('^([0-9]){1,3}$')]],
      email: ['', [Validators.required, Validators.email]],
      position: ['', Validators.required],
    });
  }

  saveForm(){
    let employee: Employee = new Employee();
    employee.name = this.basicFormGroup.value.name;
    employee.surname = this.basicFormGroup.value.surname;
    employee.email = this.complementaryFormGroup.value.email;
    employee.age = this.complementaryFormGroup.value.age;
    employee.position = this.complementaryFormGroup.value.position;
    this.employeeService.postEmployee(employee).subscribe({
      next: (response: Response) =>{
        if (response.data){
          this.openSnackBar('Employee saved', 'Close');
        }else{
          this.openSnackBar('ERROR saving Employee, try again later.', 'OK');
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
