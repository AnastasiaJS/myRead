import {Component, OnInit, Inject, Output} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Auth, User} from '../domain/entities';
// import * as $ from "@types/jquery";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Anastasia';
  pwd = '';
  auth:Auth;

  constructor(@Inject('auth') private service, private router:Router) {
  }

  ngOnInit() {
  }

  login(formValue) {
    // $("#login_form").addClass('shake_effect')

    this.service
      .loginWithCredentials(formValue.username, formValue.pwd)
      .then(auth => {
        console.info(formValue)
        let redirectUrl = (auth.redirectUrl === null) ? '/' : auth.redirectUrl;
        if (!auth.hasError) {
          this.router.navigate([redirectUrl]);
          localStorage.removeItem('redirectUrl');
        } else {
          this.auth = Object.assign({}, auth);
        }
      });
  }


}
