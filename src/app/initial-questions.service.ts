import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { InitialQuestion } from './models/initial-question.model';
import { Question } from './models/question.model';

@Injectable()
export class InitialQuestionsService {
  initialQuestionList: FirebaseListObservable<any[]>;
  quizQuestionList;
  answerArray = [];

  constructor(private database: AngularFireDatabase) {
    this.initialQuestionList = database.list('initial-questions');
  }

  getInitialQuestions() {
    return this.initialQuestionList;
  }

  saveInitialQuestionToFirebase(question: InitialQuestion) {
    this.initialQuestionList.push(question);
  }

  getInitialQuestionById(questionId: string) {
    return this.database.object('initial-questions/' + questionId);
  }

  updateInitialQuestion(updatedQuestion){
    var initialQuestionInFirebase = this.getInitialQuestionById(updatedQuestion.$key);
    initialQuestionInFirebase.update(
      {
        question_number: updatedQuestion.question_number,
        topic: updatedQuestion.topic,
        question: updatedQuestion.question,
        correct: updatedQuestion.correct,
        wrong_1: updatedQuestion.wrong_1,
        wrong_2: updatedQuestion.wrong_2,
        wrong_3: updatedQuestion.wrong_3,

      });
    }
    makeAnswerArray(emptyArray) {
      this.initialQuestionList.subscribe(questions =>  {

        this.quizQuestionList = questions;

        for(var i=0; i<this.quizQuestionList.length; i++) {
          var id = this.quizQuestionList[i].$key;
          var tempQuestion:Question =  new Question(id, undefined, undefined);
          emptyArray.push(tempQuestion);
        }

          return emptyArray;
      });
    }

    deleteInitialQuestion(questionId: string) {
      console.log(questionId);
      console.log("we're in");
      var questionToDelete = this.getInitialQuestionById(questionId);
      console.log(questionToDelete);
      questionToDelete.remove();
    }
  }
