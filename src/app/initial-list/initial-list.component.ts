import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable
 } from 'angularfire2/database';
import { InitialQuestionsService } from '../initial-questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-list',
  templateUrl: './initial-list.component.html',
  styleUrls: ['./initial-list.component.css'],
  providers: [InitialQuestionsService]
})
export class InitialListComponent implements OnInit {
  initialQuestionList: FirebaseListObservable<any[]>;
  questionToEdit = '';
  blurBg: boolean = false;

  constructor(private initialQuestionsService: InitialQuestionsService, private router: Router) { }

  ngOnInit() {
    this.initialQuestionList = this.initialQuestionsService.getInitialQuestions();
  }

  selectedQuestion(question) {
    this.questionToEdit = question;
    console.log(question);
    this.blurBg = true;
  }

  saveOrCancel(truth) {
    if (truth) {
        console.log("true");
        this.questionToEdit = '';
        this.blurBg = false;
    } else {
      this.questionToEdit = '';
      this.blurBg = false;
    }
  }
}
