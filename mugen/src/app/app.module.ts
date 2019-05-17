import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerComponent } from './views/player/player.component';

import { 
  MdcIconModule,
  MdcTypographyModule,
  MdcButtonModule,
  MdcTopAppBarModule,
  MdcElevationModule,
  MdcFabModule,
  MdcSelectModule,
  MdcListModule,
} from '@angular-mdc/web';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    MdcIconModule,
    MdcTypographyModule,
    MdcButtonModule,
    MdcTopAppBarModule,
    MdcElevationModule,
    MdcFabModule,
    MdcSelectModule,
    MdcListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
