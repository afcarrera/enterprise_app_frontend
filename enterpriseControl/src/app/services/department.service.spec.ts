import { TestBed } from '@angular/core/testing';

import { DepartmentService } from './department.service';
import { HttpClient } from '@angular/common/http';

describe('DepartmentService', () => {
  let service: DepartmentService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient',
    ['getDepartments',
    'getDepartmentById',
    'postDepartment',
    'patchDepartment']);
    service = new DepartmentService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
