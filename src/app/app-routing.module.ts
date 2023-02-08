import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ApplicationComponent } from './application/application.component';
import { MainComponent } from './main/main.component';
import { NotificationComponent } from './notification/notification.component';
import { PasswordComponent } from './password/password.component';
import { SecurityComponent } from './security/security.component';

const routes: Routes = [
  {path:'Component',component:MainComponent},
  {path:'component',component:AccountComponent},
  {path:'component',component:ApplicationComponent},
  {path:'component',component:NotificationComponent},
  {path:'component',component:PasswordComponent},
  {path:'component',component:SecurityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
