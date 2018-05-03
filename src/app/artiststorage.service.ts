import { Injectable } from '@angular/core';
import { PersistenceService, StorageType } from 'angular-persistence';
import { Artist } from './artist';

@Injectable()
export class ArtiststorageService {

  storageType: StorageType;
  constructor(private persistenceService: PersistenceService) {
    this.storageType = StorageType.LOCAL;
  }

  get(artistName) {
    const promise = new Promise<Artist>((resolve, reject) => {
      const result = this.persistenceService.get(artistName, this.storageType);
      resolve(result);
    });
    return promise;
  }

  add(artist) {
    this.persistenceService.set(artist.name, artist, { type: this.storageType });
  }

  removeAll() {
    this.persistenceService.removeAll(this.storageType);
  }

}
