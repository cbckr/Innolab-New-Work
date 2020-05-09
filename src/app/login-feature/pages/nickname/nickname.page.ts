import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'login-nickname',
    templateUrl: 'nickname.page.html',
    styleUrls: ['../login-feature-styling.scss']
})
export class NicknamePage {

    constructor(public navCtrl: NavController) {}

    navigateBack() {
        this.navCtrl.back();
    }
}
