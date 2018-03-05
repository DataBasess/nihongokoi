import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
        apiKey: "AIzaSyCgGMy6LPWD4j4jNKa9ohXZp2aLwyV4IT0",
        authDomain: "nihongokoi-9a908.firebaseapp.com",
        databaseURL: "https://nihongokoi-9a908.firebaseio.com",
        projectId: "nihongokoi-9a908",
        storageBucket: "nihongokoi-9a908.appspot.com",
        messagingSenderId: "495170231579"
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
