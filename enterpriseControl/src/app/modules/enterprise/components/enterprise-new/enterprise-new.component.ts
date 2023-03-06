import { Enterprise } from './../../../../domain/enterprise';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnterpriseService } from 'src/app/services/enterprise.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Response } from 'src/app/domain/response';

@Component({
  selector: 'app-enterprise-new',
  templateUrl: './enterprise-new.component.html',
  styleUrls: ['./enterprise-new.component.scss']
})
export class EnterpriseNewComponent implements OnInit {

  enterpriseFormGroup : FormGroup;
  addressFormGroup : FormGroup;
  phoneFormGroup : FormGroup;
  isLinear=true;

  constructor(
    private _formBuilder: FormBuilder,
    private enterpriseService: EnterpriseService,
    private _snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.enterpriseFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
    });
    this.addressFormGroup = this._formBuilder.group({
      street: ['', Validators.required],
    });
    this.phoneFormGroup = this._formBuilder.group({
      number: ['', [Validators.required, Validators.pattern('^([0-9]){1,10}$')]],
    });
  }

  saveForm(){
    let enterprise: Enterprise = new Enterprise();
    enterprise.name = this.enterpriseFormGroup.value.name;
    enterprise.address = this.addressFormGroup.value.street;
    enterprise.phone = this.phoneFormGroup.value.number;
    this.enterpriseService.postEnterprise(enterprise).subscribe({
      next: (response: Response) =>{
        if (response.data){
          this.openSnackBar('Enterprise saved', 'Close');
        }else{
          this.openSnackBar('ERROR saving Enterprise, try again later.', 'OK');
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
