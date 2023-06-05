import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  isLoggedin = false;
  constructor(public firebase: AngularFireAuth, public router: Router) { }

  async signin(email: string, password: string){
    await this.firebase.signInWithEmailAndPassword(email,password)
    .then(res => {
      this.isLoggedin = true
      localStorage.setItem('user', JSON.stringify(res.user));
      this.router.navigateByUrl("/home")
    })
  }

  async signup(email: string, password: string){
    await this.firebase.createUserWithEmailAndPassword(email,password)
    .then(res => {
      this.isLoggedin = true
      localStorage.setItem('user', JSON.stringify(res.user));
      this.router.navigateByUrl("/home")
    })
  }

  logout(){
    this.firebase.signOut()
    localStorage.removeItem('user');
    this.router.navigateByUrl('')
  }

}
