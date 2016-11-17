import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';
import { db } from '../../mock';
import { LoginPage } from '../login/Login';
import { EntityDetails } from './entity-detail/entity-detail.component';

@Component({
    selector: 'main-page',
    templateUrl: 'Main.html'
})

export class MainPage {

  data: any;
  constructor(
    public nav: NavController,
    public alertCtrl: AlertController
  ) {

  }

  ngOnInit() {
    this.data = db;
  }

  logOut() {
    this.nav.setRoot(LoginPage)
  }

  openInfo(entity: any) {
    let alert = this.alertCtrl.create({
      title: entity.name,
      subTitle: entity.surname,
      buttons: ['OK']
    });
    alert.present();
  }

  openDetails(entity: any) {
    this.nav.push(EntityDetails);
  }

}
