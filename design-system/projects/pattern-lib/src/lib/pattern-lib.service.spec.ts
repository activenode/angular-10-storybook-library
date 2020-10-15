import { TestBed } from '@angular/core/testing';

import { PatternLibService } from './pattern-lib.service';

describe('PatternLibService', () => {
  let service: PatternLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatternLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
