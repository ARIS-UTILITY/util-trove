import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDisplay } from './data-display';

describe('DataDisplay', () => {
  let component: DataDisplay;
  let fixture: ComponentFixture<DataDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
