import { TestBed, inject } from '@angular/core/testing';

import { SimJobsService } from './sim-jobs.service';

describe('SimJobsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimJobsService]
    });
  });

  it('should be created', inject([SimJobsService], (service: SimJobsService) => {
    expect(service).toBeTruthy();
  }));
});
