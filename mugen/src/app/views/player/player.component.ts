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

  ngOnInit() {
  }

}
