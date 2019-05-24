import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MdcFab} from '@angular-mdc/web';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  musicTypeForm: FormGroup;
  @ViewChild('rewindButton') rewindButton: MdcFab;
  @ViewChild('playPauseButton') playPauseButton: MdcFab;
  @ViewChild('forwardButton') forwardButton: MdcFab;

  constructor() {
    this.musicTypeForm = new FormGroup({
      musicType: new FormControl('Classical')
    });
  }
  playPauseAction() {
   this.playPauseButton.icon =  this.playPauseButton.icon === 'play_arrow' ? 'pause' : 'play_arrow';
  }
  rewindAction() {
    console.log('rewind');
  }

  forwardAction() {
    console.log('forward');
  }
  ngOnInit() {
  }

}
