import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterpriseNewComponent } from './components/enterprise-new/enterprise-new.component';
import { EnterpriseUpdateComponent } from './components/enterprise-update/enterprise-update.component';
import { EnterpriseListComponent } from './components/enterprise-list/enterprise-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [EnterpriseNewComponent, EnterpriseUpdateComponent, EnterpriseListComponent],
  imports: [
    CommonModule,
    FormsModule,
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
  ],
  exports:[
    EnterpriseListComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EnterpriseModule { }
