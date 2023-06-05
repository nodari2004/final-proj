import { Component, OnInit } from '@angular/core';
import { FireService } from '../services/fire.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{
  isSignedIn = false;

  constructor(public firebaseService: FireService){}
  ngOnInit(){
    if(localStorage.getItem('user')!== null){
      this.isSignedIn = true
    }
    else{
      this.isSignedIn = false
    }
  }

  async onSignup(email: string, password: string,name: string,surname: string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedin){
      this.isSignedIn = true;
    }
    localStorage.setItem("name",name);
    localStorage.setItem("surname",surname);
  }

}
