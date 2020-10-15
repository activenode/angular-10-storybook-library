import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternLibComponent } from './pattern-lib.component';

describe('PatternLibComponent', () => {
  let component: PatternLibComponent;
  let fixture: ComponentFixture<PatternLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatternLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
