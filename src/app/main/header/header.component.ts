import { Component, OnInit,Inject } from '@angular/core';
import {User} from "../../domain/entities";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username=localStorage.username;

  // user:User
  constructor(@Inject('auth') private service) {
    // this.user=service.getUser();
    // console.log(this.user)
  }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    this.username=null;
  }
}
