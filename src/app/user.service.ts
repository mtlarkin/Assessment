import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { UserWithQuizzes } from './models/user.model';

@Injectable()
export class UserService {
  auth;
  currentUser;
  usersAndQuizzes: FirebaseListObservable<any>;

  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase) {
    this.auth = afAuth.auth;
    this.usersAndQuizzes = db.list('/users-and-quizzes');

  }

  createAccount(email, password, firstName, lastName){
  this.currentUser = this.auth.createUserWithEmailAndPassword(email, password);

  this.currentUser.then(user => {
    var newUser = new UserWithQuizzes(user.uid, "", "", firstName, lastName);

    console.log(newUser);
    this.usersAndQuizzes.push(newUser);
  });

  // this.usersAndQuizzes.push(newUser);
  return this.currentUser;
  }








}
