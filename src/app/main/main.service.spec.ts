import { TestBed, inject } from '@angular/core/testing';

import {MainServiceService, MainService} from './main.service.ts';

describe('MainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainServiceService]
    });
  });

  it('should be created', inject([MainService], (service: MainService) => {
    expect(service).toBeTruthy();
  }));
});
