import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MdcFab } from '@angular-mdc/web';
import { Tone } from 'tone'

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

  classical: mm.MusicVAE = new mm.MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/trio_4bar');
  player: mm.SoundFontPlayer = PlayerComponent.initPlayerAndEffects();

  @ViewChild('playPauseFAB') playPauseFAB: MdcFab;

  static initPlayerAndEffects() {
    const MAX_PAN: number = 0.2;
    const MIN_DRUM: number = 35;
    const MAX_DRUM: number = 81;

    // Set up effects chain.
    const globalCompressor: Tone.MultibandCompressor = new mm.Player.tone.MultibandCompressor();
    const globalReverb: Tone.Freeverb = new mm.Player.tone.Freeverb(0.25);
    const globalLimiter: Tone.Limiter = new mm.Player.tone.Limiter();
    globalCompressor.connect(globalReverb);
    globalReverb.connect(globalLimiter);
    globalLimiter.connect(mm.Player.tone.Master);

    // Set up per-program effects.
    const programMap: Map<number, Tone.Compressor> = new Map<number, Tone.Compressor>();
    for (let i: number = 0; i < 128; i++) {
      const programCompressor: Tone.Compressor = new mm.Player.tone.Compressor();
      const pan: number = 2 * MAX_PAN * Math.random() - MAX_PAN;
      const programPanner: Tone.Panner = new mm.Player.tone.Panner(pan);
      programMap.set(i, programCompressor);
      programCompressor.connect(programPanner);
      programPanner.connect(globalCompressor);
    }

    // Set up per-drum effects.
    const drumMap: Map<number, Tone.Compressor> = new Map<number, Tone.Compressor>();
    for (let i: number = MIN_DRUM; i <= MAX_DRUM; i++) {
      const drumCompressor: Tone.Compressor = new mm.Player.tone.Compressor();
      const pan: number = 2 * MAX_PAN * Math.random() - MAX_PAN;
      const drumPanner: Tone.Panner = new mm.Player.tone.Panner(pan);
      drumMap.set(i, drumCompressor);
      drumCompressor.connect(drumPanner);
      drumPanner.connect(globalCompressor);
    }

    // Set up SoundFont player.
    const player: mm.SoundFontPlayer = new mm.SoundFontPlayer(
      'https://storage.googleapis.com/download.magenta.tensorflow.org/soundfonts_js/sgm_plus',
      globalCompressor, programMap, drumMap);
    return player;
  }


  async play(): Promise<void> {
    const sampleAndStart: Function = async (): Promise<void> => {
      this.player.resumeContext();
      this.classical.sample(1)
        .then((samples): void => {
          this.player.start(samples[0], 80).then((): Promise<void> => this.playPauseFAB.icon === 'play_arrow' ? undefined : this.play());
        });
    };
    await sampleAndStart();
  }

  toggleControl() {
    this.playPauseFAB.icon = this.playPauseFAB.icon === 'play_arrow' ? 'pause' : 'play_arrow';
    this.playPauseFAB.icon === 'play_arrow' ? this.pause() : this.play();
  }

  pause: Function = (): void => this.player.stop();

  ngOnInit() {
    const init: Function = (): Promise<void> => this.classical.initialize();
  }
}
