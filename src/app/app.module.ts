import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AgGridComponent } from './components/ag-grid/ag-grid.component';

import 'ag-grid-enterprise';
import {ToolbarComponent} from "./shared/toolbar/toolbar.component";
import { AgHeaderCheckboxComponent } from './components/ag-header-checkbox/ag-header-checkbox.component';


@NgModule({
  declarations: [
    AppComponent,
    AgGridComponent,
    ToolbarComponent,
    AgHeaderCheckboxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([ToolbarComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
