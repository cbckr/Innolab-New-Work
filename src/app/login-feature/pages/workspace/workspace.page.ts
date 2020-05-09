import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'login-workspace',
    templateUrl: 'workspace.page.html',
    styleUrls: ['../login-feature-styling.scss']
})
export class WorkspacePage {

    constructor(
        public navCtrl: NavController
    ) {}

    navigateBack() {
        this.navCtrl.back();
    }

    goToRegistration() {
        this.navCtrl.navigateForward('/login/register');
    }
}
