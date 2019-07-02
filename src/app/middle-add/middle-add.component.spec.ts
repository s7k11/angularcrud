import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleAddComponent } from './middle-add.component';

describe('MiddleAddComponent', () => {
  let component: MiddleAddComponent;
  let fixture: ComponentFixture<MiddleAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
