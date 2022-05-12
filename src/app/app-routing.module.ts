import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { NewPasswordInputComponent } from './components/new-password-input/new-password-input.component';

const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    component: LoginComponent
  },
  {
    pathMatch: 'full',
    path: 'login',
    component: LoginComponent
  },
  {
    pathMatch: 'full',
    path: 'recover_password',
    component: RecoverPasswordComponent
  },
  {
    pathMatch: 'full',
    path: 'new_password/:token',
    component: NewPasswordInputComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
