import { TestBed } from '@angular/core/testing';

import { ServiceDTService } from './service-dt.service';

describe('ServiceDTService', () => {
  let service: ServiceDTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
