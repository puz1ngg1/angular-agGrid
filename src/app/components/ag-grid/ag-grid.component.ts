import { Component } from '@angular/core';
import { formatDate } from '@angular/common';
import { ToolbarComponent } from '../../shared/toolbar/toolbar.component';

import {Item, YoutubeResponse} from "../../shared/models/youtube-response.interface";
import {ItemThumbnailParams} from "../../shared/models/item.interface";

import {YoutubeApiService} from "../../shared/services/youtube-api.service";

import {BehaviorSubject} from "rxjs";
import {AgHeaderCheckboxComponent} from "../ag-header-checkbox/ag-header-checkbox.component";

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent {
  rowData: Item[];
  selectedRowsCount$: BehaviorSubject<number> = new BehaviorSubject(0);

  gridOptions = {
    columnDefs: [
      {
        field: 'selection-checkbox',
        valueGetter: '',
        suppressSizeToFit: true,
        width: 20,
        checkboxSelection: true,
        headerComponentFramework: AgHeaderCheckboxComponent,
        headerComponentParams: { selectedRowsCount: this.selectedRowsCount$ },
        hide: true
      },
      {
        headerName: '',
        field: 'thumbnails',
        autoHeight: true,
        minWidth: 175,
        valueGetter: 'data.snippet.thumbnails.default.url',
        cellRenderer: data => this.initThumbnail(data.data.snippet.thumbnails.default)
      },
      {
        headerName: 'Published on',
        field: 'publishedAt',
        width: 150,
        minWidth: 150,
        sortable: true,
        valueGetter: 'data.snippet.publishedAt',
        cellRenderer: data => formatDate(data.value, 'MMM d, y', 'en-US')
      },
      {
        headerName: 'Video Title',
        field: 'title',
        minWidth: 300,
        resizable: true,
        sortable: true,
        valueGetter: 'data.snippet.title',
        cellRenderer: data => this.initTitleLink(data.data)
      },
      {
        headerName: 'Description',
        field: 'description',
        autoHeight: true,
        resizable: true,
        minWidth: 300,
        width: 700,
        sortable: true,
        valueGetter: 'data.snippet.description'
      }
    ],
    frameworkComponents: {
      toolbarComponent: ToolbarComponent
    }
  }

  sideBar = {
    toolPanels: [
      {
        id: 'toolbarStats',
        labelDefault: 'Toolbar',
        labelKey: 'toolbarStats',
        iconKey: '',
        toolPanel: 'toolbarComponent',
        toolPanelParams: {
          selectedRowsCount: this.selectedRowsCount$
        }
      },
    ],
    defaultToolPanel: ''
  }

  constructor(private youtubeApiService: YoutubeApiService) {}

  onGridReady() {
    this.youtubeApiService.getData().subscribe(
      (data: YoutubeResponse) => {
        this.rowData = data.items;
      });
  }

  initThumbnail(thumbnail: ItemThumbnailParams) {
    return `<img alt="" src="${thumbnail.url}" style="height: ${thumbnail.height}px; width: ${thumbnail.width}px;">`;
  }

  initTitleLink(item: Item) {
    return `<a href="https://www.youtube.com/watch?v=${item.id.videoId}" target="_blank">${item.snippet.title}</a>`;
  }

  initContextMenuTitle(params) {
    if (params.column.getColId() === 'title') {
      const videoLink = params.node.data.id.videoId;
      return [
        {
          name: 'Open in new tab',
          action: () => {
            window.open(`https://www.youtube.com/watch?v=${videoLink}`, '_blank');
          }
        }
      ];
    } else return;
  }

  onSelectionChanged(event) {
    this.selectedRowsCount$.next((event.api.getSelectedRows()).length);
  }
}
