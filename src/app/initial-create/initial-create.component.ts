import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InitialQuestion } from '../models/initial-question.model';
import { InitialQuestionsService } from '../initial-questions.service';

@Component({
  selector: 'new-initial',
  templateUrl: './initial-create.component.html',
  styleUrls: ['./initial-create.component.css'],
  providers: [ InitialQuestionsService ]
})
export class InitialCreateComponent implements OnInit {


  constructor(private initialQuestionsService: InitialQuestionsService) { }
  @Output() keepOrDiscard = new EventEmitter();
  ngOnInit() {
  }

saveQuestion(number, topic, question, correct, wrong1, wrong2, wrong3) {
 var newInitialQuestion: InitialQuestion = new InitialQuestion(number, topic, question, correct, wrong1, wrong2, wrong3);
 console.log(newInitialQuestion);
 this.initialQuestionsService.saveInitialQuestionToFirebase(newInitialQuestion);
 this.keepOrDiscard.emit(false);
}
cancelNew() {
  this.keepOrDiscard.emit(false);
}
}
