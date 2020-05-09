import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'login',
  templateUrl: 'login-feature.page.html',
  styleUrls: ['login-feature.page.scss']
})
export class LoginFeaturePage {

  constructor(
      public navCtrl: NavController
  ) {}

  register() {
    this.navCtrl.navigateForward('/login/workspace');
  }

  login() {
    this.navCtrl.navigateForward('/login/login');
  }

}
