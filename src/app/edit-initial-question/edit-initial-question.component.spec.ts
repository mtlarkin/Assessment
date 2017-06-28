import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInitialQuestionComponent } from './edit-initial-question.component';

describe('EditInitialQuestionComponent', () => {
  let component: EditInitialQuestionComponent;
  let fixture: ComponentFixture<EditInitialQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInitialQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInitialQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
