import { TestBed } from '@angular/core/testing';

import { MachineLearningService } from './machine-learning.service';

describe('MachineLearningService', () => {
  let service: MachineLearningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachineLearningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
