import { Component, OnInit ,Input,Inject} from '@angular/core';
import {MainService} from '../main.service'
import {Articles} from '../../domain/entities';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  providers:[MainService]
})
export class MainContentComponent implements OnInit {

  articles:Articles[] = [];
  // @Input()
  // set articles(articles:Articles[]){
  //   this._articles = [...articles];
  // }
  // get articles() {
  //   return this._articles;
  // }
  constructor(@Inject('mainService') private service, private router: Router) { }

  ngOnInit() {
    this.getArticles()
  }

  getArticles(){
    this.service.getArticles()
      .then(articles=>{
        this.articles=articles;
      })
  }
  delArticles(id){
    this.service.delArticles(id);
  }
  // goModify(arti){
  //   this.router.navigate(['add:m']);
  // }

}
