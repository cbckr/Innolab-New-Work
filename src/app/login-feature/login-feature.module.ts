import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginFeatureRoutingModule } from './login-routing.module';

import { LoginFeaturePage } from './login-feature.page';
import { WorkspacePage} from './pages/workspace/workspace.page';
import {RegisterPage} from './pages/register/register.page';
import {NicknamePage} from './pages/nickname/nickname.page';
import {LoginPage} from './pages/login/login.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LoginFeatureRoutingModule
  ],
  declarations: [
      LoginFeaturePage,
      WorkspacePage,
      RegisterPage,
      NicknamePage,
      LoginPage
  ]
})
export class LoginFeatureModule {}
