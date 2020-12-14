import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgHeaderCheckboxComponent } from './ag-header-checkbox.component';

describe('AgHeaderCheckboxComponent', () => {
  let component: AgHeaderCheckboxComponent;
  let fixture: ComponentFixture<AgHeaderCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgHeaderCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgHeaderCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
