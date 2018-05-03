import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArtiststorageService } from './artiststorage.service';
import { Artist } from './artist';
import { Event } from './event';


@Injectable()
export class ArtistService {

  constructor(private http: HttpClient, private storageService: ArtiststorageService) { }

  artist: Artist;
  get(artistName) {
    this.artist = null;
    const promise = new Promise<Artist>((resolve, reject) => {

      if (artistName !== '' || artistName !== undefined) {
        this.storageService.get(artistName).then(lastArtist => {

          if (lastArtist === null || lastArtist === undefined) {
            const baseUrl = 'https://rest.bandsintown.com/artists/';
            const appid = 'artistapp_asif';
            const artistUrl = baseUrl + artistName + '?app_id=' + appid;
            const eventUrl = baseUrl + artistName + '/events?app_id=' + appid;
            this.http.get<Artist>(artistUrl).subscribe(artistData => {
              this.artist = artistData;
              if (this.artist != null && this.artist.upcoming_event_count > 0) {
                this.http.get<Event[]>(eventUrl).subscribe(eventData => {
                  this.artist.events = eventData;
                  this.storageService.removeAll();
                  this.storageService.add(this.artist);
                  resolve(this.artist);
                },
                  err => {

                  });
              } else {
                this.storageService.removeAll();
                this.storageService.add(this.artist);
                resolve(this.artist);
              }
            },
              err => {
                reject('record not found');
              }
            );

          } else {
            this.artist = lastArtist;
            resolve(this.artist);
          }
        }, err => {
          reject('error in getting record from cache');
        });

      }
    });
    return promise;
  }
}






