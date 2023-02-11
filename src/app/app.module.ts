import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AccountComponent } from './account/account.component';
import { PasswordComponent } from './password/password.component';
import { SecurityComponent } from './security/security.component';
import { ApplicationComponent } from './application/application.component';
import { NotificationComponent } from './notification/notification.component';
// import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AccountComponent,
    PasswordComponent,
    SecurityComponent,
    ApplicationComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgModule,
    // NgForm,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
