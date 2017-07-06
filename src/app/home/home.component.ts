import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { UserService } from '../user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ UserService ]
})
export class HomeComponent implements OnInit {
  authUser;
  userWithQuizzes;
  users: FirebaseListObservable<any>;
  createNewAccount: boolean = false;
  passwordNotConfirmed: boolean = false;
  quiz1;

  constructor(public userService: UserService) {
  }

  ngOnInit() {
    this.authUser = firebase.auth().currentUser;
    console.log(this.authUser);
  }
  createAccount(email, password, firstName, lastName, passwordConfirm) {
    if (password == passwordConfirm){
      console.log(this.authUser);
      this.authUser = this.userService.createAccount(email, password, firstName, lastName);
    } else {
      this.passwordNotConfirmed = true;
    }

  }

  signIn(email, password) {
    this.authUser = this.userService.signIn(email, password);
  }

  getQuizzes() {
    var uid;
    this.authUser.then(x => {
      uid = x.uid;
      console.log(uid);
      this.userWithQuizzes = this.userService.getUserWithQuizzes(uid);
      this.userWithQuizzes.subscribe(x => {
        this.userWithQuizzes = x;
        this.quiz1 = x.firstAssessmentResults;
      });
    });
    console.log(this.userWithQuizzes.$key);
  }
  toggleNewAccountInputs(input){
    if (input) {

      this.createNewAccount = true;
    } else {
      this.createNewAccount = false;
    }
  }

}
