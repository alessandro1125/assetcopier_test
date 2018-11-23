import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHeaderNavComponent } from './test-header-nav.component';

describe('TestHeaderNavComponent', () => {
  let component: TestHeaderNavComponent;
  let fixture: ComponentFixture<TestHeaderNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHeaderNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHeaderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
