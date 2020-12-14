import { Component } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-ag-header-checkbox',
  templateUrl: './ag-header-checkbox.component.html',
  styleUrls: ['./ag-header-checkbox.component.scss']
})
export class AgHeaderCheckboxComponent {
  params;
  selectedRowsCount$: BehaviorSubject<number>;
  totalRowsCount: number;
  areSelectedAll: boolean = false;

  agInit(params): void {
    this.params = params;
    this.selectedRowsCount$ = params.selectedRowsCount;

    this.params.api.addEventListener('selectionChanged',
      this.checkSelectionAll.bind(this)
    );
  }

  checkSelectionAll(): void {
    this.totalRowsCount = this.params.api.getDisplayedRowCount();
    if(this.totalRowsCount > 0) {
      this.selectedRowsCount$.subscribe(count => {
        this.areSelectedAll = count === this.totalRowsCount;
      });
    }
  }

  toggleSelectionAll(event) {
    if(event.target.checked) {
      this.params.api.selectAll();
    } else {
      this.params.api.deselectAll();
    }
  }
}
