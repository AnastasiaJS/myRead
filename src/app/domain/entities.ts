/**
 * Created by SWSD on 2017-05-17.
 */
export class Articles {
  id:string;
  desc:string;
  pic:string;
  from:string;
  other:string;
  userId:number;
}
export class User {
  userId:string;
  username:string;
  pwd:string;
}
export class Auth {
  user: User;
  hasError: boolean;
  errMsg: string;
  redirectUrl: string;
}
