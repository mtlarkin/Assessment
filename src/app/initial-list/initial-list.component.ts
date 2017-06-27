import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
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
  constructor(private initialQuestionsService: InitialQuestionsService, private router: Router) { }

  ngOnInit() {
    this.initialQuestionList = this.initialQuestionsService.getInitialQuestions();
  }

}
