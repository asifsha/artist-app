import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ArtistService } from './artist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Artist app';
  artist: any;
  showErrorMessage = false;
  errorMessage = '';

  constructor(private titleService: Title, private artistService: ArtistService) {
    this.titleService.setTitle('Artist App');
  }

  search(artistName) {
    this.showErrorMessage = false;
    this.artist = null;
    const noRecordMsg = 'No record found.';
    const noInputMsg = 'Please enter artist name.';
    if (artistName === '' || artistName === null) {
      this.showErrorMessage = true;
      this.errorMessage = noInputMsg;
      return;
    }
    this.artistService.get(artistName).then(result => {
      if (result === null || result === undefined) {
        this.showErrorMessage = true;
        this.errorMessage = noRecordMsg;
      } else {
        this.artist = result;
      }

    }, err => {
      this.showErrorMessage = true;
      this.errorMessage = noRecordMsg;
      this.artist = null;

    });


  }
}
