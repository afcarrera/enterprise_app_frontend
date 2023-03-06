import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreService } from './core.service';
import { Observable } from 'rxjs';
import { constants } from '../util/constants';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends CoreService {

  constructor(protected override http: HttpClient) {
    super(http);
  }

  getEmployees(): Observable<any> {
    return this.get(constants.CONTEXT+constants.V1+constants.SERVICES.EMPLOYEE)
  }

  getEmployeeById(id: string): Observable<any> {
    return this.get(constants.CONTEXT+constants.V1+constants.SERVICES.EMPLOYEE
      +'\\'+id)
  }

  postEmployee(obj: any): Observable<any> {
    return this.post(constants.CONTEXT+constants.V1+constants.SERVICES.EMPLOYEE, obj);
  }

  patchEmployee(id: string, obj: any): Observable<any> {
    return this.patch(constants.CONTEXT+constants.V1+constants.SERVICES.EMPLOYEE
      +'\\'+id, obj);
  }
}
