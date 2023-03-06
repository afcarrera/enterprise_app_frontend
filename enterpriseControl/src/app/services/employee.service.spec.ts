import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { HttpClient } from '@angular/common/http';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient',
    ['getEmployees',
    'getEmployeeById',
    'postEmployee',
    'patchEmployee']);
    service = new EmployeeService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
