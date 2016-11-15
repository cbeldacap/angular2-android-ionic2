import { Component, Input } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

@Component ({
  selector: 'details',
  templateUrl: 'Details.html'
})

export class DetailsComponent {

  entity: any;
  constructor(
    public params: NavParams,
    public nav: NavController
  ) { }

  ngOnInit() {
    this.entity = this.params.data.item;
  }

}
