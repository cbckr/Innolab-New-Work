import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'login-register',
    templateUrl: 'register.page.html',
    styleUrls: ['../login-feature-styling.scss']
})
export class RegisterPage {

    constructor(public navCtrl: NavController) {}

    navigateBack() {
        this.navCtrl.back();
    }

    goToNickname() {
        this.navCtrl.navigateForward('/login/nickname');
    }

}