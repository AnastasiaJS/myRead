/**
 * Created by SWSD on 2017-05-16.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { MainComponent } from './main.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { MainService } from './main.service';
import {HeaderComponent} from "./header/header.component";
import {AddTimelineComponent} from "./add-timeline/add-timeline.component";
import {ShortComponent} from "./short/short.component";
import {ArticleComponent} from "./article/article.component";
import { FoodComponent } from './food/food.component';
import { PhotoComponent } from './photo/photo.component';
import { MusicComponent } from './music/music.component';
import {MainRoutingModule} from "./main-routeing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MainRoutingModule,
  ],
  declarations: [
    MainComponent,
    MainSidebarComponent,
    HeaderComponent,
    AddTimelineComponent,
    ShortComponent,
    ArticleComponent,
    FoodComponent,
    PhotoComponent,
    MusicComponent
  ],
  providers: [
    {provide: 'mainService', useClass: MainService}
  ]
})
export class MainModule {}
