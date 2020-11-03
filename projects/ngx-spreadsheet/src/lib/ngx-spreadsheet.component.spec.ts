import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSpreadsheetComponent } from './ngx-spreadsheet.component';

describe('NgxSpreadsheetComponent', () => {
  let component: NgxSpreadsheetComponent;
  let fixture: ComponentFixture<NgxSpreadsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSpreadsheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSpreadsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
