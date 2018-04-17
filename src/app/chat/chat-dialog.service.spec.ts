import { TestBed, inject } from '@angular/core/testing';

import { ChatDialogService } from './chat-dialog.service';

describe('ChatDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatDialogService]
    });
  });

  it('should be created', inject([ChatDialogService], (service: ChatDialogService) => {
    expect(service).toBeTruthy();
  }));
});
