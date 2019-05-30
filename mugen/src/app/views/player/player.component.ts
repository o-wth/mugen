import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MdcFab } from '@angular-mdc/web';

import * as mm from '@magenta/music';
import * as Tone from 'tone';
import {tensorflow} from '@magenta/music/es5/protobuf/proto';
import Note = tensorflow.magenta.NoteSequence.Note;

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  musicTypeForm: FormGroup;

  classical = new mm.MusicRNN('https://raw.githubusercontent.com/o-wth/mugen/master/data/classical/model');
  player = new mm.Player();

  sequence = {
    ticksPerQuarter: 220,
    totalTime: 28.5,
    timeSignatures: [
      {
        time: 0,
        numerator: 4,
        denominator: 4
      }
    ],
    tempos: [
      {
        time: 0,
        qpm: 120
      }
    ],
    // notes: [
    //   { pitch: 'Gb4', startTime: 0, endTime: 1 },
    //   { pitch: 'F4', startTime: 1, endTime: 3.5 },
    //   { pitch: 'Ab4', startTime: 3.5, endTime: 4 },
    //   { pitch: 'C5', startTime: 4, endTime: 4.5 },
    //   { pitch: 'Eb5', startTime: 4.5, endTime: 5 },
    //   { pitch: 'Gb5', startTime: 5, endTime: 6 },
    //   { pitch: 'F5', startTime: 6, endTime: 7 },
    //   { pitch: 'E5', startTime: 7, endTime: 8 },
    //   { pitch: 'Eb5', startTime: 8, endTime: 8.5 },
    //   { pitch: 'C5', startTime: 8.5, endTime: 9 },
    //   { pitch: 'G4', startTime: 9, endTime: 11.5 },
    //   { pitch: 'F4', startTime: 11.5, endTime: 12 },
    //   { pitch: 'Ab4', startTime: 12, endTime: 12.5 },
    //   { pitch: 'C5', startTime: 12.5, endTime: 13 },
    //   { pitch: 'Eb5', startTime: 13, endTime: 14 },
    //   { pitch: 'D5', startTime: 14, endTime: 15 },
    //   { pitch: 'Db5', startTime: 15, endTime: 16 },
    //   { pitch: 'C5', startTime: 16, endTime: 16.5 },
    //   { pitch: 'F5', startTime: 16.5, endTime: 17 },
    //   { pitch: 'F4', startTime: 17, endTime: 19.5 },
    //   { pitch: 'G4', startTime: 19.5, endTime: 20 },
    //   { pitch: 'Ab4', startTime: 20, endTime: 20.5 },
    //   { pitch: 'C5', startTime: 20.5, endTime: 21 },
    //   { pitch: 'Eb5', startTime: 21, endTime: 21.5 },
    //   { pitch: 'C5', startTime: 21.5, endTime: 22 },
    //   { pitch: 'Eb5', startTime: 22, endTime: 22.5 },
    //   { pitch: 'C5', startTime: 22.5, endTime: 24.5 },
    //   { pitch: 'Eb5', startTime: 24.5, endTime: 25.5 },
    //   { pitch: 'G4', startTime: 25.5, endTime: 28.5 }
    // ]
  };

  musicSynth = new Tone.Synth().toMaster();
  quantizedSequence = mm.sequences.quantizeNoteSequence(this.sequence, 1);
  improvisedModel;

  @ViewChild('playPauseFAB') playPauseFAB: MdcFab;

  constructor() {
    this.musicTypeForm = new FormGroup({
      musicType: new FormControl('Classical')
    });
  }


  play(genre: string) {
    switch (genre) {
      case 'classical': {
        this.improvisedModel.notes.forEach(note => {
          this.musicSynth.triggerAttackRelease(note.pitch, note.endTime - note.startTime, note.startTime);
        });
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
    const initRNN = async () => {
      await this.classical.initialize();
      this.improvisedModel = this.classical.continueSequence(this.quantizedSequence, 60, 1.1,
        ['Bm', 'Bbm', 'Gb7', 'F7', 'Ab', 'Ab7', 'G7', 'Gb7', 'F7', 'Bb7', 'Eb7', 'AM7']);
    };
    initRNN();
  }

}
