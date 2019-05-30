import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {MdcFab} from '@angular-mdc/web';

import * as mm from '@magenta/music';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @ViewChild('rewindFAB') rewindFAB: MdcFab;
  @ViewChild('playPauseFAB') playPauseFAB: MdcFab;
  @ViewChild('forwardFAB') forwardFAB: MdcFab;

  musicTypeForm: FormGroup;
  @ViewChild('rewindButton') rewindButton: MdcFab;
  @ViewChild('playPauseButton') playPauseButton: MdcFab;
  @ViewChild('forwardButton') forwardButton: MdcFab;

  classical = new mm.MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/trio_4bar');
  player = new mm.Player();

  constructor() {
    this.musicTypeForm = new FormGroup({
      musicType: new FormControl('Classical')
    });
  }


  play(genre: string) {
    switch (genre) {
      case 'classical': {
        break;
      }
      case 'country': {
        break;
      }
      case 'rap': {
        break;
      }
      default: {
        console.error(`MUGEN ERROR: genre not found (received: ${genre})`);
        break;
      }
    }
  }

  pause() {
    this.player.pause();
  }

  playPause() {
    if (this.playPauseFAB.icon === 'play_arrow') {
      this.playPauseFAB.icon = 'pause';
      // this.play('classical');
    }
    this.playPauseFAB.icon = (this.playPauseFAB.icon === 'play_arrow') ? 'pause' : 'play_arrow';
  }

  forward() {
    console.log('fast forward');
  }

  ngOnInit() {
    this.classical.initialize();
  }

}
