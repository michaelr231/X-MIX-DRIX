import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEnterComponent } from './main-enter.component';

describe('MainEnterComponent', () => {
  let component: MainEnterComponent;
  let fixture: ComponentFixture<MainEnterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainEnterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
