import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InitialQuestion } from '../models/initial-question.model';
import { InitialQuestionsService } from '../initial-questions.service';

@Component({
  selector: 'edit-initial',
  templateUrl: './edit-initial-question.component.html',
  styleUrls: ['./edit-initial-question.component.css'],
  providers: [ InitialQuestionsService ]
})
export class EditInitialQuestionComponent implements OnInit {
  @Input() questionToDisplay;
  @Output() keepOrDiscard = new EventEmitter();

  constructor(private initialQuestionsService: InitialQuestionsService) { }

  ngOnInit() {
  }

  saveChangesToQuestion() {
    this.keepOrDiscard.emit(true);
  }

  cancelEditing() {
    this.keepOrDiscard.emit(false);
  }
}
