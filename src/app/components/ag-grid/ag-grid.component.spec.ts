import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { AgGridComponent } from './ag-grid.component';

import { YoutubeApiService } from "../../shared/services/youtube-api.service";

describe('AgGridComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AgGridComponent],
      providers: [ YoutubeApiService ]
    }).compileComponents();
  });

  it('should be created', () => {
    const fixture = TestBed.createComponent(AgGridComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
