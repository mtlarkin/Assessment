import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
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
  user;
  constructor(public userService: UserService) {
   }

  ngOnInit() {
  }
  createAccount(email, password, firstName, lastName) {
    this.user = this.userService.createAccount(email, password, firstName, lastName);
  }

}
