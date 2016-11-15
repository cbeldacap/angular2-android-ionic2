import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../main/Main';

@Component({
    selector: 'login',
    templateUrl: 'Login.html'
})

export class LoginPage {
  constructor(
    public nav: NavController
  ) {}

  logIn() {
    // check credentials...
    this.nav.setRoot(MainPage);
  }

}
