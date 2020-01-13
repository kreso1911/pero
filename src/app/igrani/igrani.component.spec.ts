import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgraniComponent } from './igrani.component';

describe('IgraniComponent', () => {
  let component: IgraniComponent;
  let fixture: ComponentFixture<IgraniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgraniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgraniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
