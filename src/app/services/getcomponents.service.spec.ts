import { TestBed } from '@angular/core/testing';

import { GetcomponentsService } from './getcomponents.service';

describe('GetcomponentsService', () => {
  let service: GetcomponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetcomponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
