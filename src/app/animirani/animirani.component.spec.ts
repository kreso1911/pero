import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimiraniComponent } from './animirani.component';

describe('AnimiraniComponent', () => {
  let component: AnimiraniComponent;
  let fixture: ComponentFixture<AnimiraniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimiraniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimiraniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
