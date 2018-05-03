import { TestBed, inject } from '@angular/core/testing';
import { ArtistService } from './artist.service';
import { HttpClientModule, HttpClient, HttpHandler} from '@angular/common/http';
import { ArtiststorageService } from './artiststorage.service';
import { PersistenceService } from 'angular-persistence';


describe('ArtistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtistService,
        HttpClient,
        HttpHandler,
        ArtiststorageService,
        PersistenceService]
    });
  });

  it('should be created', inject([ArtistService], (service: ArtistService) => {
    expect(service).toBeTruthy();
    const spy = spyOn(service, 'get').and.callThrough();
    expect(spy);
  }));
});
