import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { InitialQuestion } from './models/initial-question.model';

@Injectable()
export class InitialQuestionsService {
  initialQuestionList: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.initialQuestionList = database.list('initial-questions');
  }

  getInitialQuestions() {
    return this.initialQuestionList;
  }

  saveInitialQuestionToFirebase(question: InitialQuestion) {
    this.initialQuestionList.push(question);
  }
}
