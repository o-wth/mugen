import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MdcFab } from '@angular-mdc/web';

import * as mm from '@magenta/music';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  musicTypeForm: FormGroup;

  classical = new mm.MusicVAE('https://raw.githubusercontent.com/o-wth/mugen/master/data/classical/checkpoints/');
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

  forward() {
    console.log('fast forward');
  }

  backward() {
    console.log('rewind');
  }

  ngOnInit() {
    this.classical.initialize();
  }

}
