import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentNewComponent } from './components/department-new/department-new.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { DepartmentUpdateComponent } from './components/department-update/department-update.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [DepartmentNewComponent, DepartmentListComponent, DepartmentUpdateComponent],
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
    MatSnackBarModule,
    MatSelectModule,
  ]
})
export class DepartmentModule { }
