import {Component, OnInit, Inject, Output} from '@angular/core'
import {MainService} from '../main.service'
import {Articles} from "../../domain/entities";
import {Router, ActivatedRoute, Params} from '@angular/router';
// import $ from "@types/jquery";
@Component({
  selector: 'app-add-timeline',
  templateUrl: './add-timeline.component.html',
  styleUrls: ['./add-timeline.component.css', '../../../fileinput.min.css'],
  providers: [MainService]
})
export class AddTimelineComponent implements OnInit {

  id=''
  from = '';
  desc = '';
  pic = '';
  other = '';
  type = 'ad';

  constructor(@Inject('mainService') private service,
              private route:ActivatedRoute,
              private router:Router) {
  }

  // @Output() addArt= new EventEmitter<Articles>();
  errorMsg = '';

  ngOnInit() {
    this.route.params.forEach((params:Params) => {
      let id = params['id'];
      if (id!=-1) {
        this.type='mo';
        this.service.getArticle(id)
          .then(res=> {
            if (res.ok) {
              this.id=id;
              this.from = res.json()[0].from;
              this.desc = res.json()[0].desc;
              this.pic = res.json()[0].pic;
              this.other = res.json()[0].other;
            }
          })
      }else{
        this.id='';
        this.from = '';
        this.desc = '';
        this.pic = '';
        this.other = '';
      }

    });
  }

  addArticles(data) {
    if (!data.desc) {
      this.errorMsg = '请输入内容';
      return false;
    }
    if(!data.from){
      this.errorMsg = '请输入出处';
      return false;
    }
    if(this.type=='ad'){
      this.service.addArticles(data)
        .then(res=> {
          if (res.ok) {
            alert('添加成功！');
            this.router.navigate(['main']);
          }

        })
    }else{
      let d={
        id:this.id,
        from:data.from,
        desc:data.desc,
        other:data.other,
        pic:data.pic,
      };
      this.service.modifyArticles(d)
        .then(res=>{
          if(res.ok){
            alert('修改成功！');
          }
        })
    }
  }
}
