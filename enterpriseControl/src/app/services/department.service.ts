import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreService } from './core.service';
import { Observable } from 'rxjs';
import { constants } from '../util/constants';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends CoreService {

  constructor(protected override http: HttpClient) {
    super(http);
  }

  getDepartments(): Observable<any> {
    return this.get(constants.CONTEXT+constants.V1+constants.SERVICES.DEPARTMENT)
  }

  getDepartmentById(id: string): Observable<any> {
    return this.get(constants.CONTEXT+constants.V1+constants.SERVICES.DEPARTMENT
      +'\\'+id)
  }

  postDepartment(obj: any): Observable<any> {
    return this.post(constants.CONTEXT+constants.V1+constants.SERVICES.DEPARTMENT, obj);
  }

  patchDepartment(id: string, obj: any): Observable<any> {
    return this.patch(constants.CONTEXT+constants.V1+constants.SERVICES.DEPARTMENT
      +'\\'+id, obj);
  }
}
