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

  constructor() {
    this.musicTypeForm = new FormGroup({
      musicType: new FormControl('Classical')
    });
  }
  musicTypeForm: FormGroup;

  classical = new mm.MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/trio_4bar');
  player = PlayerComponent.initPlayerAndEffects();

  @ViewChild('playPauseFAB') playPauseFAB: MdcFab;

  static initPlayerAndEffects() {
    const MAX_PAN = 0.2;
    const MIN_DRUM = 35;
    const MAX_DRUM = 81;

    // Set up effects chain.
    const globalCompressor = new mm.Player.tone.MultibandCompressor();
    const globalReverb = new mm.Player.tone.Freeverb(0.25);
    const globalLimiter = new mm.Player.tone.Limiter();
    globalCompressor.connect(globalReverb);
    globalReverb.connect(globalLimiter);
    globalLimiter.connect(mm.Player.tone.Master);

    // Set up per-program effects.
    const programMap = new Map();
    for (let i = 0; i < 128; i++) {
      const programCompressor = new mm.Player.tone.Compressor();
      const pan = 2 * MAX_PAN * Math.random() - MAX_PAN;
      const programPanner = new mm.Player.tone.Panner(pan);
      programMap.set(i, programCompressor);
      programCompressor.connect(programPanner);
      programPanner.connect(globalCompressor);
    }

    // Set up per-drum effects.
    const drumMap = new Map();
    for (let i = MIN_DRUM; i <= MAX_DRUM; i++) {
      const drumCompressor = new mm.Player.tone.Compressor();
      const pan = 2 * MAX_PAN * Math.random() - MAX_PAN;
      const drumPanner = new mm.Player.tone.Panner(pan);
      drumMap.set(i, drumCompressor);
      drumCompressor.connect(drumPanner);
      drumPanner.connect(globalCompressor);
    }

    // Set up SoundFont player.
    const player = new mm.SoundFontPlayer(
      'https://storage.googleapis.com/download.magenta.tensorflow.org/soundfonts_js/sgm_plus',
      globalCompressor, programMap, drumMap);
    return player;
  }


  play(genre: string) {
    switch (genre) {
      case 'classical': {
        this.player.resumeContext();
        this.classical.sample(1)
          .then((samples) => this.player.start(samples[0], 80));
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

  toggleControlIcon() {
    this.playPauseFAB.icon = this.playPauseFAB.icon === 'play_arrow' ? 'pause' : 'play_arrow';
    if (this.playPauseFAB.icon === 'play_arrow') {
      this.pause();
    } else {
      this.play('classical');
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
  }
}
