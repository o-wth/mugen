import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { 
  MdcIconModule,
  MdcTypographyModule,
  MdcButtonModule,
  MdcTopAppBarModule
} from '@angular-mdc/web';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdcIconModule,
    MdcTypographyModule,
    MdcButtonModule,
    MdcTopAppBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
