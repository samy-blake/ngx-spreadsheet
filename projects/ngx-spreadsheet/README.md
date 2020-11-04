# NgxSpreadsheetApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Docs

Angular wrap from [x-spreadsheet](https://github.com/myliang/x-spreadsheet)

```html
<div class="parent" #parent>
  <ngx-spreadsheet
    [data]="data"
    [parent]="parent"
    [options]="{}"
    [localData]="localData"
    (changeData)="onSpreadsheetChange($event)"
    (cellEdited)="onEvent('cellEdited', $event)"
    (cellSelected)="onEvent('cellSelected', $event)"
  >
  </ngx-spreadsheet>
</div>
```

```ts
// Input:
data: SpreadsheetData;
options: SpreadsheetOptions;
parent: HTMLElement // for height and width from parent

// Output:
cellEdited = new EventEmitter<SpreadsheetCellText>();
cellSelected = new EventEmitter<SpreadsheetCell>();
changeData = new EventEmitter<SpreadsheetData>();

// Methodes:
setCellText(data: SpreadsheetCellText): NgxSpreadsheetComponent
reRender(): NgxSpreadsheetComponent
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project.