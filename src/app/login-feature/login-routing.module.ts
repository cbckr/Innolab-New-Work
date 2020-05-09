import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFeaturePage } from './login-feature.page';
import {WorkspacePage} from './pages/workspace/workspace.page';
import {RegisterPage} from './pages/register/register.page';
import {NicknamePage} from './pages/nickname/nickname.page';
import {LoginPage} from './pages/login/login.page';

const routes: Routes = [
  {
    path: 'login',
    component: LoginFeaturePage
  },
  {
    path: 'login/workspace',
    component: WorkspacePage
  },
  {
    path: 'login/register',
    component: RegisterPage
  },
  {
    path: 'login/nickname',
    component: NicknamePage
  },
  {
    path: 'login/login',
    component: LoginPage
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginFeatureRoutingModule {}
