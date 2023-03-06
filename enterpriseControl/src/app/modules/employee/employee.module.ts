import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeUpdateComponent } from './components/employee-update/employee-update.component';
import { EmployeeNewComponent } from './components/employee-new/employee-new.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [EmployeeUpdateComponent, EmployeeNewComponent, EmployeeListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatStepperModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule
  ]
})
export class EmployeeModule { }
