/**
 * Created by SWSD on 2017-05-17.
 */
import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { MainComponent } from './main/main.component';
import {AddTimelineComponent} from "./main/add-timeline/add-timeline.component";
import { AuthGuardService } from './core/auth-guard.service';

const routes: Routes = [
  {
    path: 'main',
    canActivate: [AuthGuardService],
    component: MainComponent
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'**',
    /*
     * **代表该路由是一个通配符路径。
     * 如果当前URL无法匹配上我们配置过的任何一个路由中的路径，
     * 路由器就会匹配上这一个。
     * 当需要显示404页面或者重定向到其它路由时，该特性非常有用。
     */
    redirectTo:'main'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      // { enableTracing: true }//显示导航的生命周期
      )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

// forRoot其实是一个静态的工厂方法，它返回的仍然是Module
/*
 * 路由定义这个对象包括若干属性：
 path：路由器会用它来匹配路由中指定的路径和浏览器地址栏中的当前路径，如 /login 。
 component：导航到此路由时，路由器需要创建的组件，如 LoginComponent 。
 redirectTo：重定向到某个path，使用场景的话，比如在用户输入不存在的路径时重定向到首页。
 pathMatch：路径的字符匹配策略
 children：子路由数组
 */
