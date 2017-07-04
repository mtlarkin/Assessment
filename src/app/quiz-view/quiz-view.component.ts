import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { InitialQuestionsService } from '../initial-questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-view',
  templateUrl: './quiz-view.component.html',
  styleUrls: ['./quiz-view.component.css'],
  providers: [InitialQuestionsService]
})
export class QuizViewComponent implements OnInit {
  quizActive: boolean;
  currentQuestion;
  questionList;
  quizAnswers=[];
  answer;
  start = false;
  answerIndex = 0;
  fourAnswerChoices = [];

  constructor(public initialQuestionsService: InitialQuestionsService) { }
  ngOnInit() {
    this.initialQuestionsService.makeAnswerArray(this.quizAnswers);

  }

  shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  startQuiz(){
   this.initialQuestionsService.getInitialQuestionById(this.quizAnswers[this.answerIndex].id).subscribe(x => {
     this.currentQuestion = x;
   });
    this.start = true;

  }

  check(){
    console.log(this.answer);
  }


  setAnswer(chosenAnswer) {
    this.quizAnswers[this.answerIndex].answer = chosenAnswer.target.innerHTML;

    if (chosenAnswer.target.innerHTML == this.currentQuestion.correct){
      this.quizAnswers[this.answerIndex].correct = true;
      console.log(this.quizAnswers[this.answerIndex]);
    } else {
      this.quizAnswers[this.answerIndex].correct = false;
      console.log(this.quizAnswers[this.answerIndex]);

    }
    if (this.answerIndex < this.quizAnswers.length){
      this.answerIndex++;
      this.startQuiz();
    } else {
      console.log("all done");
    }
  }

}
