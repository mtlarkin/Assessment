import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InitialQuestion } from '../models/initial-question.model';
import { InitialQuestionsService } from '../initial-questions.service';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

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

      console.log(this.questionToDisplay);


  }

  saveChangesToQuestion(questionToDisplay) {
    this.initialQuestionsService.updateInitialQuestion(questionToDisplay);
    this.keepOrDiscard.emit(true);
  }

  cancelEditing() {
    this.keepOrDiscard.emit(false);
  }
}
