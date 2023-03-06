import { TestBed } from '@angular/core/testing';

import { CoreService } from './core.service';
import { HttpClient } from '@angular/common/http';

describe('CoreService', () => {
  let service: CoreService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient',['get','post','patch']);
    service = new CoreService(httpClientSpy);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
