import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'login-page',
    templateUrl: 'login.page.html',
    styleUrls: ['../login-feature-styling.scss']
})
export class LoginPage {

    constructor(public navCtrl: NavController) {}

    navigateBack() {
        this.navCtrl.back();
    }
}
