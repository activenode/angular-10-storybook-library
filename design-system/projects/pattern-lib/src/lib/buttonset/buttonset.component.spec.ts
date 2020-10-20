import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsetComponent } from './buttonset.component';

describe('ButtonsetComponent', () => {
  let component: ButtonsetComponent;
  let fixture: ComponentFixture<ButtonsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
