import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import * as mm from '@magenta/music';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  const classical = new mm.MusicVAE('https://github.com/o-wth/mugen/raw/master/data/classical/attention_rnn.mag');
  const player = new mm.Player();

  constructor() {

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
        console.error(`MUGEN ERROR: genre not found (received: ${string})`);
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
