import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class InitialQuestionsService {
  initialQuestionList: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.initialQuestionList = database.list('initial-questions');
  }

  getInitialQuestions() {
    return this.initialQuestionList;
  }
}
