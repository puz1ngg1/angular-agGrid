import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent {
  params;
  selectedRowsCount$: BehaviorSubject<number>;
  totalRowsCount: number;
  isSelectionCheckboxShown: boolean = false;

  constructor() {}

  agInit(params): void {
    this.params = params;
    this.selectedRowsCount$ = params.selectedRowsCount;

    this.params.api.addEventListener('modelUpdated',
      this.initTotalRowsCount.bind(this)
    );
  }

  initTotalRowsCount() {
    this.totalRowsCount = this.params.api.getDisplayedRowCount();
  }

  toggleSelectionMode() {
    this.isSelectionCheckboxShown = !this.isSelectionCheckboxShown;
    this.params.columnApi.setColumnVisible('selection-checkbox', this.isSelectionCheckboxShown);
    if (!this.isSelectionCheckboxShown) {
      this.params.api.deselectAll();
    }
  }
}

