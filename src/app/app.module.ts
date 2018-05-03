import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { PersistenceModule } from 'angular-persistence';
import { AppComponent } from './app.component';
import { ArtistService } from './artist.service';
import { ArtiststorageService } from './artiststorage.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PersistenceModule
  ],
  providers: [
    ArtistService,
    ArtiststorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
