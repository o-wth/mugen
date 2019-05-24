import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  musicTypeForm: FormGroup;

  constructor() {
    this.musicTypeForm = new FormGroup({
      musicType: new FormControl('Classical')
    })
  }

  rewindFABAction() {
    console.log('rewind');
  }
  controlFABAction(element: HTMLElement) {
    element.setAttribute('icon', 'pause');
    // won't work because HTML and angular-mdc-web are different
    console.log(element.getAttribute('icon'))
  }
  forwardFABAction() {
    console.log('forward');
  }
  ngOnInit() {
  }

}
