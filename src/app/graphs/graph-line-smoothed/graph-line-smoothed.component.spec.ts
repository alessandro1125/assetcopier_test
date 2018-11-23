import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphLineSmoothedComponent } from './graph-line-smoothed.component';

describe('GraphLineSmoothedComponent', () => {
  let component: GraphLineSmoothedComponent;
  let fixture: ComponentFixture<GraphLineSmoothedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphLineSmoothedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphLineSmoothedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
