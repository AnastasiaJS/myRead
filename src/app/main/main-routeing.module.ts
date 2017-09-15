/**
 * Created by SWSD on 2017-05-17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import {ShortComponent} from "./short/short.component";
import {ArticleComponent} from "./article/article.component";
import { FoodComponent } from './food/food.component';
import { PhotoComponent } from './photo/photo.component';
import { MusicComponent } from './music/music.component';
import {AddTimelineComponent} from "./add-timeline/add-timeline.component";
import {MainSidebarComponent} from "./main-sidebar/main-sidebar.component";
import { AuthGuardService } from '../core/auth-guard.service';


const routes: Routes = [
{
    path: 'main',
    canActivate: [AuthGuardService],
    component: MainComponent,
    children: [
      { path:'',redirectTo:'short',pathMatch:'full'},
      { path: 'short',component: ShortComponent },
      { path: 'article', component: ArticleComponent },
      { path: 'food', component: FoodComponent },
      { path: 'photo', component: PhotoComponent },
      { path: 'music', component: MusicComponent },
    ]
  },
  {
    path:'add/:id',
    canActivate: [AuthGuardService],
    component: AddTimelineComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MainRoutingModule { }
