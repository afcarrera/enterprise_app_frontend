import { Enterprise } from './../../../../domain/enterprise';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { EnterpriseService } from 'src/app/services/enterprise.service';
import { Response } from 'src/app/domain/response';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-enterprise-update',
  templateUrl: './enterprise-update.component.html',
  styleUrls: ['./enterprise-update.component.scss']
})
export class EnterpriseUpdateComponent implements OnInit {
  enterprise: Enterprise;
  name = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);
  isDisabledSaveBtn: boolean;
  constructor(
    public dialogRef: MatDialogRef<EnterpriseUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public enterpriseId: string,
    private enterpriseService: EnterpriseService,
    private _snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
    this.enterprise = new Enterprise();
    this.enterpriseService.getEnterpriseById(this.enterpriseId).subscribe({
      next: (response: Response) =>{
        if (response.data){
          this.enterprise = response.data;
        }
      },
      error: (error) => {
        this.openSnackBar('ERROR, '+error.message, 'OK');
      }
    });
    this.isDisabledSaveBtn = false;
  }

  disableSaveBtn(): void{
    this.isDisabledSaveBtn = this.name.hasError('required');
  }

  saveForm(): void{
    this.enterpriseService.patchEnterprise(this.enterprise.id,this.enterprise).subscribe({
      next: (response: Response) =>{
        if (response.data){
          console.log('Enterprise updated', response.data);
          this.openSnackBar('Enterprise updated', 'OK');
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
