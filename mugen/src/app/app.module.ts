import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerComponent } from './views/player/player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ParticlesModule } from 'angular-particle';

import { 
  MdcIconModule,
  MdcTypographyModule,
  MdcButtonModule,
  MdcTopAppBarModule,
  MdcElevationModule,
  MdcFabModule,
  MdcSelectModule,
  MdcListModule,
  MdcChipsModule
} from '@angular-mdc/web';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MdcIconModule,
    MdcTypographyModule,
    MdcButtonModule,
    MdcTopAppBarModule,
    MdcElevationModule,
    MdcFabModule,
    MdcSelectModule,
    MdcListModule,
    MdcChipsModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
