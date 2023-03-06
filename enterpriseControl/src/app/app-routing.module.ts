import { EmployeeListComponent } from './modules/employee/components/employee-list/employee-list.component';
import { DepartmentListComponent } from './modules/department/components/department-list/department-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterpriseListComponent } from './modules/enterprise/components/enterprise-list/enterprise-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'enterprises', component: EnterpriseListComponent},
  { path: 'departments', component: DepartmentListComponent},
  { path: 'employees', component: EmployeeListComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
