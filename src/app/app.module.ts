import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { FireService } from './services/fire.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC6QgwLQxBNdl_nZze0N17qHOH3IQl2_sY",
      authDomain: "final-project-81bdc.firebaseapp.com",
      projectId: "final-project-81bdc",
      storageBucket: "final-project-81bdc.appspot.com",
      messagingSenderId: "588019164688",
      appId: "1:588019164688:web:9b588a95ea1a61dfa68c95"
    })
  ],
  providers: [FireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
