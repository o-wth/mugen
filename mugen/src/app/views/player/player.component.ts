import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MdcFab} from '@angular-mdc/web';

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

  constructor() {
    this.musicTypeForm = new FormGroup({
      musicType: new FormControl('Classical')
    });
  }

  rewindFABAction() {
    console.log('rewind');
  }
  playPauseFABAction() {
    this.playPauseFAB.icon = (this.playPauseFAB.icon === 'play_arrow') ? 'pause' : 'play_arrow';
  }
  forwardFABAction() {
    console.log('forward');
  }
  ngOnInit() {
  }

}
