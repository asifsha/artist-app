import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { PersistenceService, StorageType } from 'angular-persistence';
import { ArtistService } from './artist.service';
import { ArtiststorageService } from './artiststorage.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        ArtistService,
        ArtiststorageService,
        HttpClient,
        HttpHandler,
        PersistenceService],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Artist app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Artist app');
  }));
  it('search exists on app component', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    const spy = spyOn(app, 'search').and.callThrough();
    expect(spy);
  }));
});
