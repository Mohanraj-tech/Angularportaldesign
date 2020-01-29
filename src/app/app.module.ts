import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { CircularsComponent } from './circulars/circulars.component';
import { QuickaccessComponent } from './quickaccess/quickaccess.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationsComponent,
    ProfileComponent,
    CircularsComponent,
    QuickaccessComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
