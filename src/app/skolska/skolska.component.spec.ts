import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkolskaComponent } from './skolska.component';

describe('SkolskaComponent', () => {
  let component: SkolskaComponent;
  let fixture: ComponentFixture<SkolskaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkolskaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkolskaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
