import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { MainPage } from './views/main/Main';
import { LoginPage } from './views/login/Login';

@Component({
  template: `
    <div style="width:100%; height:100%; background-image:url('http://npsapps.com/wp-content/uploads/2015/09/slider1-bg.png'); background-repeat: no-repeat;">
      <ion-nav [root]="rootPage"></ion-nav>
    </div>
  `
})
export class MyApp {
  private rootPage:any;

  constructor(private platform:Platform) {

    this.rootPage = LoginPage;

    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }

}
