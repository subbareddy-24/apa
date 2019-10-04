import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterialExamplesComponent } from './meterial-examples.component';

describe('MeterialExamplesComponent', () => {
  let component: MeterialExamplesComponent;
  let fixture: ComponentFixture<MeterialExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterialExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterialExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
