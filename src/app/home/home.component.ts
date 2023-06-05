import { Component, EventEmitter, Output } from '@angular/core';
import { FireService } from '../services/fire.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Output() isLogout = new EventEmitter<void>()
  constructor(public fireBaseService: FireService){}

  logout(){
    this.fireBaseService.logout()
    this.isLogout.emit()
  }
  name = localStorage.getItem("name");
  surname = localStorage.getItem("surname");
}
