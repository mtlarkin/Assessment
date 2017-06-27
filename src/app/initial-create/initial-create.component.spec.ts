import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialCreateComponent } from './initial-create.component';

describe('InitialCreateComponent', () => {
  let component: InitialCreateComponent;
  let fixture: ComponentFixture<InitialCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
