import { Component, OnInit ,Inject ,Input,Output,EventEmitter} from '@angular/core';
import {MainService} from './main.service'
import {Articles} from '../domain/entities';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [MainService]
})
export class MainComponent implements OnInit {

  articles:Articles[] = [];

 
  
  constructor(@Inject('mainService') private service) { }

  ngOnInit() {
   
  }

}
