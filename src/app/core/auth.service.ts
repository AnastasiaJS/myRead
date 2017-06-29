import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Auth,User } from '../domain/entities';

@Injectable()
export class AuthService {

   user:User;
  constructor(private http: Http, @Inject('user') private userService) { }

  loginWithCredentials(username: string, pwd: string): Promise<Auth> {
    return this.userService
      .findUser(username)
      .then(user => {
        let auth = new Auth();
        localStorage.removeItem('userId');
        let redirectUrl = (localStorage.getItem('redirectUrl') === null)?
          '/': localStorage.getItem('redirectUrl');
        auth.redirectUrl = redirectUrl;
        if (null === user){
          auth.hasError = true;
          auth.errMsg = 'user not found';
        } else if (pwd === user.pwd) {
          auth.user = Object.assign({}, user);
          auth.hasError = false;
          localStorage.setItem('userId',user.userId);
          localStorage.setItem('username',user.username);
        } else {
          auth.hasError = true;
          auth.errMsg = 'password not match';
        }
        this.user=auth.user;
        return auth;
      })
      .catch(this.handleError);
  }
  getUser(){
    return this.user;
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
