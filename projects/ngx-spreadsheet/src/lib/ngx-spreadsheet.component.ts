import { 
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import Spreadsheet from 'x-data-spreadsheet';

import { SpreadsheetCell } from './interfaces/cell';
import { SpreadsheetCellText } from './interfaces/cell-text';
import { SpreadsheetData } from './interfaces/data';
import { SpreadsheetOptions } from './interfaces/options';

@Component({
  selector: 'ngx-spreadsheet',
  template: `<div #spreadsheets></div>`,
  styleUrls: ['./ngx-spreadsheet.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxSpreadsheetComponent implements OnInit, AfterViewInit {
  private data: SpreadsheetData = null;
  @Input('data')
  set _data(value: SpreadsheetData) {
    if(!value) {
      return;
    }
    this.data = value;
    if(this.spreadsheet) {
      this.spreadsheet.loadData(this.data);
    }
  }
  @Input() options: SpreadsheetOptions = {};
  @Input() localData: {
    locale: 'zh-cn' | 'de' | 'en' | 'nl',
    data: string
  } = null;
  @Input() parent: HTMLElement = null;


  @Output() cellEdited = new EventEmitter<SpreadsheetCellText>()
  @Output() cellSelected = new EventEmitter<SpreadsheetCell>()
  @Output() changeData = new EventEmitter<SpreadsheetData>();

  @ViewChild('spreadsheets') spreadsheetsRenderElement: ElementRef;

  private spreadsheet: any = null;

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if(this.parent) {
      this.options.view = {
        height: () => this.parent.getBoundingClientRect().height,
        width: () => this.parent.getBoundingClientRect().width,
      }
    }

    if(this.localData) {
      (Spreadsheet as any).locale(this.localData.locale, this.localData.data);
    }

    this.spreadsheet = new Spreadsheet(
      this.spreadsheetsRenderElement.nativeElement,
      this.options
    );


    if(this.data) {
      this.spreadsheet.loadData(this.data);
    }

    this.spreadsheet.change((data: SpreadsheetData) => this.changeData.emit(data));
    this.spreadsheet.on('cell-edited', (text, ri, ci) => this.cellEdited.emit({colIndex: ci, rowIndex: ri, text: text}));
    this.spreadsheet.on('cell-selected', (cell, ri, ci) => this.cellSelected.emit({cell: cell, colIndex: ci, rowIndex: ri}));
  }

  public setCellText(data: SpreadsheetCellText): NgxSpreadsheetComponent {
    if(!this.spreadsheet) {
      return;
    }
    this.spreadsheet.cellText(data.rowIndex, data.colIndex, data.text);
    return this;
  }

  public reRender(): NgxSpreadsheetComponent {
    if(!this.spreadsheet) {
      return;
    }
    this.spreadsheet.reRender();
    return this;
  }
}
