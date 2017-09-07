import { Component, OnInit ,Input,Inject} from '@angular/core';
import {MainService} from '../main.service'
import {Articles} from '../../domain/entities';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-short',
  templateUrl: './short.component.html',
  styleUrls: ['./short.component.css'],
  providers:[MainService]
})
export class ShortComponent implements OnInit {

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
        this.articles=articles.sort((a,b)=>b.uptime-a.uptime);
      })
  }
  delArticles(id){
    if(confirm('确定删除吗？'))
      this.service.delArticles(id);
  }
  // goModify(arti){
  //   this.router.navigate(['add:m']);
  // }

}
