import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHoveringImageComponent } from './test-hovering-image.component';

describe('TestHoveringImageComponent', () => {
  let component: TestHoveringImageComponent;
  let fixture: ComponentFixture<TestHoveringImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHoveringImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHoveringImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
