import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxSpreadsheetModule } from '../../projects/ngx-spreadsheet/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSpreadsheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
