import { TestBed } from '@angular/core/testing';

import { MachineLearningWekaService } from './machine-learning-weka.service';

describe('MachineLearningService', () => {
  let service: MachineLearningWekaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachineLearningWekaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
