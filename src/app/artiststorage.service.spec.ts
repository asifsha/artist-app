import { TestBed, inject } from '@angular/core/testing';

import { ArtiststorageService } from './artiststorage.service';
import { PersistenceService } from 'angular-persistence';

describe('ArtiststorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtiststorageService,
        PersistenceService]
    });
  });

  it('should be created', inject([ArtiststorageService], (service: ArtiststorageService) => {
    expect(service).toBeTruthy();    
    const spyGet = spyOn(service, 'get').and.callThrough();
    expect(spyGet);
    const spyAdd = spyOn(service, 'add').and.callThrough();
    expect(spyAdd);
    const spyRemoveAll = spyOn(service, 'removeAll').and.callThrough();
    expect(spyRemoveAll);
  }));
});
