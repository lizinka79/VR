import { TestBed, inject } from '@angular/core/testing';

import { SimCategoriesService } from './sim-categories.service';

describe('SimCategoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimCategoriesService]
    });
  });

  it('should be created', inject([SimCategoriesService], (service: SimCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
