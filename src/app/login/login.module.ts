/**
 * Created by SWSD on 2017-05-19.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import {LoginRoutingModule} from "./login-routing.module";
import {LoginComponent} from "./login.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent,

  ],
  providers: [
    // {provide: 'mainService', useClass: MainService}
  ]
})
export class LoginModule {}
