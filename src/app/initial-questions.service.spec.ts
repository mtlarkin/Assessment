import { TestBed, inject } from '@angular/core/testing';
import {} from 'jasmine';

import { InitialQuestionsService } from './initial-questions.service';

describe('InitialQuestionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitialQuestionsService]
    });
  });

  it('should be created', inject([InitialQuestionsService], (service: InitialQuestionsService) => {
    expect(service).toBeTruthy();
  }));
});
