import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCE9z5-dtkeixvvS3Tf6nGBgH6SFJeD4t0",
  authDomain: "proyecto-dpisc-c1626.firebaseapp.com",
  databaseURL: "https://proyecto-dpisc-c1626.firebaseio.com",
  projectId: "proyecto-dpisc-c1626",
  storageBucket: "proyecto-dpisc-c1626.appspot.com",
  messagingSenderId: "5238109160"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
