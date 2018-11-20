import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractiseChartComponent } from './practise-chart.component';

describe('PractiseChartComponent', () => {
  let component: PractiseChartComponent;
  let fixture: ComponentFixture<PractiseChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractiseChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractiseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
