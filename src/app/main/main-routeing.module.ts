/**
 * Created by SWSD on 2017-05-17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import {TypeComponent} from "../type/type.component";
import {AddTimelineComponent} from "./add-timeline/add-timeline.component";
import { AuthGuardService } from '../core/auth-guard.service';

const routes: Routes = [
  {
    path: 'main',
    canActivate: [AuthGuardService],
    component: MainComponent
  },
  {
    path: 'type',
    component: TypeComponent
  },
  {
    path:'add/:id',
    canActivate: [AuthGuardService],
    component:AddTimelineComponent
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MainRoutingModule { }
