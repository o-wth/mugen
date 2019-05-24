import { Component, OnInit } from '@angular/core';
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
    const rewindFAB: HTMLElement = document.getElementById('rewind');
    rewindFAB.addEventListener('click', (e: Event) => this.rewindFABAction());
    const controlFAB: HTMLElement = document.getElementById('control');
    controlFAB.addEventListener('click', (e: Event) => this.controlFABAction(controlFAB));
    const forwardFAB: HTMLElement = document.getElementById('forward');
    forwardFAB.addEventListener('click', (e: Event) => this.forwardFABAction());
  }

}
