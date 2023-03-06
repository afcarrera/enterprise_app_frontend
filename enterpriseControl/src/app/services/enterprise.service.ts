import { constants } from './../util/constants';
import { HttpClient } from '@angular/common/http';
import { CoreService } from './core.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService extends CoreService {

  constructor(protected override http: HttpClient) {
    super(http);
  }

  getEnterprises(): Observable<any> {
    return this.get(constants.CONTEXT+constants.V1+constants.SERVICES.ENTERPRISE)
  }

  getEnterpriseById(id: string): Observable<any> {
    return this.get(constants.CONTEXT+constants.V1+constants.SERVICES.ENTERPRISE
      +'\\'+id)
  }

  postEnterprise(obj: any): Observable<any> {
    return this.post(constants.CONTEXT+constants.V1+constants.SERVICES.ENTERPRISE, obj);
  }

  patchEnterprise(id: string, obj: any): Observable<any> {
    return this.patch(constants.CONTEXT+constants.V1+constants.SERVICES.ENTERPRISE
      +'\\'+id, obj);
  }
}
