import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Articles} from '../domain/entities';

import { UUID } from 'angular2-uuid';
@Injectable()
export class MainService {
  private api_url = 'http://localhost:3000/articles';
  private headers = new Headers({'Content-Type': 'application/json'});

  articles: Articles[] = [];
  // one:Articles;
  constructor(private http: Http) { }
  getArticles(): Promise<Articles[]>{
    // const userId = +localStorage.getItem('userId');
    const url = `${this.api_url}`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json() as Articles[])
      .catch(this.handleError);
  }
  addArticles(data:Articles):Promise<object>{
    let article = {
      id: UUID.UUID(),
      desc: data.desc,
      pic: data.pic,
      from:data.from,
      other:data.other,
      userId:1
    };
    return this.http
      .post(this.api_url, JSON.stringify(article), {headers: this.headers})
      .toPromise()
      .then(res => res)
      .catch(this.handleError);
  }
  delArticles(id: string):Promise<object>{
    const url = `${this.api_url}/${id}`;
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then((res) => res)
      .catch(this.handleError);
  }
  modifyArticles(data:Articles):Promise<object>{
    const url = `${this.api_url}/${data.id}`;
    let d={
      desc: data.desc,
      pic: data.pic,
      from:data.from,
      other:data.other,
    };
    return this.http
      .patch(url, JSON.stringify(d), {headers: this.headers})
      .toPromise()
      .then((res) => res)
      .catch(this.handleError);
  }
  getArticle(id:string):Promise<object>{
    const url = `${this.api_url}?id=${id}`;
    return this.http.get(url)
      .toPromise()
      .then(res => res)
      .catch(this.handleError);
  }
  // toggleArticles(id:string):Promise<Articles>{
  //   this.getArticle(id)
  //     .then(res=>{
  //       if(res.ok){
  //         return res.json()
  //       }
  //     })
  //     .catch(this.handleError);
  // }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
