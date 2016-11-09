import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { MainPage } from './views/main/Main';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  private rootPage:any;

  constructor(private platform:Platform) {

    this.rootPage = MainPage;

    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }

}
