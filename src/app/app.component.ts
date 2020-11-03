import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { LOCALE_DE, NgxSpreadsheetComponent, SpreadsheetData } from 'projects/ngx-spreadsheet/src/public-api';
import { EXAMPLE_DATA } from './data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  public data: SpreadsheetData = EXAMPLE_DATA
  public localData = {
    locale: 'de',
    data: LOCALE_DE
  }

  @ViewChild(NgxSpreadsheetComponent) spreadsheet: NgxSpreadsheetComponent;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      /**
       * set one cell data
       */
      this.spreadsheet.setCellText({
        colIndex: 1,
        rowIndex: 1,
        text: 'adsdasdassdadsdsadsa'
      }).reRender();
    }, 4000)
  }

  onSpreadsheetChange(data: SpreadsheetData) {
    console.log(data);
    console.log(JSON.stringify(data));
  }

  onEvent(e: string, data: any) {
    console.log(e, data);
  }
}
