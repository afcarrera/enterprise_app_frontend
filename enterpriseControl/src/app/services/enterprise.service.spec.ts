import { TestBed } from '@angular/core/testing';

import { EnterpriseService } from './enterprise.service';
import { HttpClient } from '@angular/common/http';

describe('EnterpriseService', () => {
  let service: EnterpriseService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient',
    ['getEnterprises',
    'getEnterpriseById',
    'postEnterprise',
    'patchEnterprise']);
    service = new EnterpriseService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
